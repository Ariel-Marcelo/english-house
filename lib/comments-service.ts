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

/**
 * Obtiene la URL de Google Script ÚNICAMENTE desde la variable de entorno NEXT_PUBLIC_GOOGLE_SCRIPT_URL.
 */
export function getGoogleScriptUrl(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""
}

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

/**
 * Obtiene la lista de comentarios desde Google Sheets API.
 */
export async function fetchComments(): Promise<CommentItem[]> {
  const apiUrl = getGoogleScriptUrl()
  let remoteComments: CommentItem[] = []

  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, { method: "GET", cache: "no-store" })
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data)) {
          remoteComments = data
        }
      }
    } catch (error) {
      console.warn("No se pudo conectar a Google Sheets API.", error)
    }
  }

  return remoteComments
}

/**
 * Envía un nuevo comentario a Google Sheets.
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

  const apiUrl = getGoogleScriptUrl()
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

  if (!apiUrl) {
    return {
      success: false,
      message: "No se ha configurado la variable de entorno NEXT_PUBLIC_GOOGLE_SCRIPT_URL."
    }
  }

  try {
    await fetch(apiUrl, {
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
    console.warn("Error al enviar a Google Sheets:", err)
    return {
      success: false,
      message: "No se pudo conectar con el servidor de Google Sheets."
    }
  }
}
