"use client"

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { validateToken, submitComment, DEFAULT_SECRET_TOKEN, DEFAULT_SECRET_WORD } from "@/lib/comments-service"
import { Lock, Star, Send, ShieldCheck, Link2, Copy, ArrowLeft, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import Swal from "sweetalert2"

function CreateCommentForm() {
  const searchParams = useSearchParams()
  const tokenParam = searchParams.get("token")

  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
  const [manualToken, setManualToken] = useState<string>("")
  const [authError, setAuthError] = useState<string>("")

  // Form states
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [role, setRole] = useState("")
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)

  // Status states
  const [errors, setErrors] = useState<{ name?: string; comment?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  useEffect(() => {
    if (validateToken(tokenParam)) {
      setIsAuthorized(true)
    }
  }, [tokenParam])

  const handleManualAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateToken(manualToken)) {
      setIsAuthorized(true)
      setAuthError("")
    } else {
      setAuthError("Clave o token incorrecto. Asegúrate de ingresar el enlace o código autorizado.")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    let hasErrors = false
    const newErrors: { name?: string; comment?: string } = {}

    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio. No se permiten comentarios anónimos."
      hasErrors = true
    }
    if (!comment.trim()) {
      newErrors.comment = "El comentario es obligatorio."
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const res = await submitComment({
        name,
        comment,
        role: role.trim() || undefined,
        rating
      })

      if (res.success) {
        // Alerta elegante con SweetAlert2
        Swal.fire({
          title: "¡Comentario Publicado!",
          text: "Tu comentario se ha guardado exitosamente en nuestra base de datos de Google Sheets y ya está visible en la página principal.",
          icon: "success",
          confirmButtonText: "Ver en la página principal",
          confirmButtonColor: "#2563eb",
          customClass: {
            popup: "rounded-[2rem]",
            confirmButton: "px-6 py-3 rounded-xl font-bold"
          }
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/#comentarios"
          }
        })

        // Limpiar campos del formulario
        setName("")
        setComment("")
        setRole("")
        setRating(5)
      } else {
        Swal.fire({
          title: "Error al publicar",
          text: res.message || "No se pudo guardar el comentario. Por favor intenta nuevamente.",
          icon: "error",
          confirmButtonColor: "#ef4444",
          customClass: {
            popup: "rounded-[2rem]",
            confirmButton: "px-6 py-3 rounded-xl font-bold"
          }
        })
      }
    } catch (err) {
      Swal.fire({
        title: "Error inesperado",
        text: "Ocurrió un problema de conexión al guardar el comentario.",
        icon: "error",
        confirmButtonColor: "#ef4444",
        customClass: {
          popup: "rounded-[2rem]"
        }
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const copySecretLink = () => {
    if (typeof window !== "undefined") {
      const fullUrl = `${window.location.origin}/crear-comentario?token=${DEFAULT_SECRET_TOKEN}`
      navigator.clipboard.writeText(fullUrl)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 3000)
    }
  }

  // PANTALLA DE ACCESO RESTRINGIDO (Si no cuenta con token válido)
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-2">Página Oculta Restringida</h1>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Esta sección es privada y requiere un enlace encriptado en Base64 o clave de acceso para crear comentarios.
          </p>

          <form onSubmit={handleManualAuth} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Clave o Token de Acceso
              </label>
              <input
                type="password"
                value={manualToken}
                onChange={(e) => setManualToken(e.target.value)}
                placeholder="Ingresa la clave secreta o token..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-slate-800 text-sm"
              />
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              Verificar Acceso
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>English House Admin</span>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // PANTALLA AUTORIZADA - FORMULARIO DE COMENTARIOS
  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6 font-sans">
      <div className="max-w-2xl mx-auto">

        {/* ENCABEZADO SUPERIOR */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al sitio principal
          </Link>
        </div>

        {/* TARJETA DEL FORMULARIO */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl">
          
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full w-max text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" /> Acceso Autorizado mediante Enlace Encriptado
          </div>

          <h1 className="text-3xl md:text-4xl font-black font-serif text-slate-900 tracking-tight mb-3">
            Crear un nuevo comentario
          </h1>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Completa los datos a continuación. Los campos de <strong className="text-slate-900">Nombre</strong> y <strong className="text-slate-900">Comentario</strong> son obligatorios.
          </p>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* CAMPO NOMBRE (OBLIGATORIO) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Nombre Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                disabled={isSubmitting}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Maria Fernanda Lopez"
                className={`w-full px-4 py-3.5 rounded-2xl border ${
                  errors.name ? "border-red-300 bg-red-50/30" : "border-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-primary/40 text-slate-900 text-sm font-medium transition-all disabled:opacity-50`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                </p>
              )}
            </div>

            {/* CAMPO ROL / CARGO (OPCIONAL) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Rol u Ocupación <span className="text-slate-400 font-normal lowercase">(opcional)</span>
              </label>
              <input
                type="text"
                disabled={isSubmitting}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Ej. Estudiante de Inglés B2, Profesional TI, Madre de familia"
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-slate-900 text-sm font-medium transition-all disabled:opacity-50"
              />
            </div>

            {/* CAMPO CALIFICACIÓN EN ESTRELLAS */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Calificación
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-transform hover:scale-110 focus:outline-none disabled:opacity-50"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= (hoverRating || rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-200"
                      } transition-colors`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-xs font-bold text-slate-600">
                  {rating} de 5 estrellas
                </span>
              </div>
            </div>

            {/* CAMPO COMENTARIO (OBLIGATORIO) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Comentario u Opinión <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                disabled={isSubmitting}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escribe aquí tu experiencia o testimonio sobre English House..."
                className={`w-full px-4 py-3.5 rounded-2xl border ${
                  errors.comment ? "border-red-300 bg-red-50/30" : "border-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-primary/40 text-slate-900 text-sm font-medium transition-all leading-relaxed disabled:opacity-50`}
              />
              {errors.comment && (
                <p className="mt-1.5 text-xs text-red-500 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.comment}
                </p>
              )}
            </div>

            {/* BOTÓN CON SPINNER LOADER */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>Guardando Comentario...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Publicar Comentario
                </>
              )}
            </button>
          </form>

          {/* SECCIÓN ENLACE OCULTO BASE64 COMPARTIBLE */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
              <Link2 className="w-4 h-4" /> Tu Enlace Encriptado de Acceso Oculto
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Puedes compartir este enlace directo con las personas a las que desees permitir comentar.
            </p>
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <input
                type="text"
                readOnly
                value={typeof window !== "undefined" ? `${window.location.origin}/crear-comentario?token=${DEFAULT_SECRET_TOKEN}` : ""}
                className="w-full bg-transparent text-xs text-slate-700 font-mono outline-none"
              />
              <button
                onClick={copySecretLink}
                className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-xs rounded-xl transition-all shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" /> Copiar Enlace
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">Cargando...</div>}>
      <CreateCommentForm />
    </Suspense>
  )
}
