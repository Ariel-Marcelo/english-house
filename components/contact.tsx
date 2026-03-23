"use client"

import { useState } from "react"
import { Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Agenda tu Diagnostico
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance">
            Da el primer paso hoy
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Completa el formulario y te contactaremos para agendar tu evaluación
            diagnostica gratuita. Conoceremos tu nivel y tus metas para
            diseñarte un plan a tu medida.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Card className="lg:col-span-3 border-border/50">
            <CardContent className="pt-6">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Te contactaremos pronto para agendar tu diagnostico gratuito.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                  <div className="flex flex-col gap-5">
                    <img src="/contact-us.jpg" alt="contact-us"/>
                  </div>
              )}
            </CardContent>
          </Card>

          {/* WhatsApp & Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Contacto directo por WhatsApp
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Si prefieres escribirnos directamente? Envía un mensaje por
                  WhatsApp y te responderemos lo antes posible.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 w-full gap-2"
                >
                  <a
                    href="https://wa.me/593963951325"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    +593 963 951 325
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Que incluye el diagnostico?
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Evaluación completa de tu nivel actual
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Identificación de fortalezas y areas de mejora
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Recomendación del programa ideal para ti
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Sin costo y sin compromiso
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Redes Sociales
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Próximamente estaremos en redes sociales. Por ahora, contáctanos
                  directamente por WhatsApp o el formulario.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
