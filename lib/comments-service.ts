export interface CommentItem {
  id: string
  name: string
  comment: string
  role?: string
  rating?: number
  date: string
  approved?: boolean
}

// Token por defecto en Base64 ("ingresarcomentario" -> "aW5ncmVzYXJjb21lbnRhcmlv")
export const DEFAULT_SECRET_TOKEN = "aW5ncmVzYXJjb21lbnRhcmlv"
export const DEFAULT_SECRET_WORD = "ingresarcomentario"

export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzzIq4-Tp8qx7O3KhLVAtpaut7aYZCoCfXl7PV4-ExP3prMjxihk6Ri8vpZ1Owt5Up1Jg/exec"

/**
 * Valida si el token recibido en la URL (Base64) coincide con la palabra clave secreta.
 */
export function validateToken(tokenStr: string | null): boolean {
  if (!tokenStr) return false
  
  const cleanedToken = decodeURIComponent(tokenStr).trim()

  if (cleanedToken === DEFAULT_SECRET_TOKEN || cleanedToken === DEFAULT_SECRET_WORD) {
    return true
  }

  try {
    const decoded = atob(cleanedToken)
    return decoded.toLowerCase().trim() === DEFAULT_SECRET_WORD.toLowerCase()
  } catch (e) {
    return false
  }
}

/**
 * Formatea fechas tipo ISO (ej: 2026-08-12T05:00:00.000Z) a formato legible como "12 de Agosto, 2026"
 */
export function formatCommentDate(dateStr?: string): string {
  if (!dateStr) return ""
  
  // Si ya está en texto en español
  if (dateStr.includes(" de ")) return dateStr

  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr

    const day = d.getDate()
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]
    const month = months[d.getMonth()]
    const year = d.getFullYear()

    return `${day} de ${month}, ${year}`
  } catch (e) {
    return dateStr
  }
}

const LOCAL_STORAGE_KEY = "english_house_comments_v1"

/**
 * Obtiene la lista de comentarios ÚNICAMENTE desde Google Sheets API (y respaldos en LocalStorage).
 * Si no hay comentarios en Google Sheets, retorna un arreglo vacío.
 */
export async function fetchComments(): Promise<CommentItem[]> {
  let remoteComments: CommentItem[] = []

  if (GOOGLE_SCRIPT_URL) {
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, { method: "GET", cache: "no-store" })
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data)) {
          remoteComments = data
        }
      }
    } catch (error) {
      console.warn("No se pudo conectar a Google Sheets API, revisando LocalStorage local.", error)
    }
  }

  // Cargar comentarios locales guardados temporalmente (LocalStorage)
  let localComments: CommentItem[] = []
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (stored) {
        localComments = JSON.parse(stored)
      }
    } catch (e) {
      console.error("Error leyendo comentarios locales:", e)
    }
  }

  // Combinar sin duplicar
  const combined = [...remoteComments]

  localComments.forEach((lc) => {
    if (!combined.some((rc) => rc.id === lc.id || (rc.name === lc.name && rc.comment === lc.comment))) {
      combined.unshift(lc)
    }
  })

  return combined
}

/**
 * Envía un nuevo comentario a Google Sheets y lo respalda en LocalStorage.
 */
export async function submitComment(data: {
  name: string
  comment: string
  role?: string
  rating?: number
}): Promise<{ success: boolean; message: string }> {
  if (!data.name || !data.name.trim()) {
    return { success: false, message: "El nombre es obligatorio." }
  }
  if (!data.comment || !data.comment.trim()) {
    return { success: false, message: "El comentario es obligatorio." }
  }

  const now = new Date()
  const formattedDate = formatCommentDate(now.toISOString())

  const newComment: CommentItem = {
    id: "c-" + Date.now(),
    name: data.name.trim(),
    comment: data.comment.trim(),
    role: data.role?.trim() || "Estudiante",
    rating: data.rating || 5,
    date: formattedDate,
    approved: true
  }

  // Guardar en LocalStorage para actualización instantánea
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      const existing: CommentItem[] = stored ? JSON.parse(stored) : []
      existing.unshift(newComment)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing))
    } catch (e) {
      console.error("Error al guardar localmente:", e)
    }
  }

  // Enviar a Google Sheets API
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment)
    })
    return {
      success: true,
      message: "¡Tu comentario ha sido publicado y guardado exitosamente!"
    }
  } catch (err) {
    console.warn("No se pudo conectar a Google Sheets, pero se guardó localmente:", err)
    return {
      success: true,
      message: "Tu comentario se guardó localmente y se actualizará en breve."
    }
  }
}
