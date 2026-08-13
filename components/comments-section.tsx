"use client"

import React, { useEffect, useState } from "react"
import { fetchComments, CommentItem, formatCommentDate } from "@/lib/comments-service"
import { Star, Sparkles, UserCheck, ShieldCheck } from "lucide-react"

export function CommentsSection() {
  const [comments, setComments] = useState<CommentItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchComments()
        setComments(data)
      } catch (err) {
        console.error("Error al cargar comentarios:", err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  // Si ya terminó de cargar y no hay ningún comentario en Google Sheets, oculta la sección completamente
  if (!loading && comments.length === 0) {
    return null
  }

  return (
    <section id="comentarios" className="bg-slate-50/50 py-20 md:py-32 overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Opiniones Verificadas
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-serif text-slate-900 tracking-tighter leading-tight">
              Lo que opinan nuestros <br />
              <span className="text-primary">estudiantes y comunidad</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Sin comentarios anónimos. Verificación requerida.</span>
            </div>
          </div>
        </div>

        {/* CONTENIDO DE COMENTARIOS */}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-[2.5rem] bg-slate-200/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {comments.map((item) => {
              const initials = item.name
                ? item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase()
                : "EH"

              const displayDate = formatCommentDate(item.date)

              return (
                <div
                  key={item.id}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">

                    {/* ESTRELLAS Y FECHA FORMATEADA */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {[...Array(item.rating || 5)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">{displayDate}</span>
                    </div>

                    {/* TEXTO DEL COMENTARIO */}
                    <p className="text-slate-700 text-sm leading-relaxed font-serif italic pt-2">
                      "{item.comment}"
                    </p>
                  </div>

                  {/* INFO DEL AUTOR */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                      {initials}
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1">
                        <h4 className="font-black text-slate-900 text-sm tracking-tight truncate">
                          {item.name}
                        </h4>
                        <UserCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" title="Verificado" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {item.role || "Estudiante"}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}
