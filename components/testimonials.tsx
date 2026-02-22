import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Maria Fernanda L.",
    role: "Estudiante universitaria",
    quote:
      "Gracias a las clases personalizadas pude pasar mi examen TOEFL con el puntaje que necesitaba para aplicar a mi maestria en Canada.",
    improvement: "B1 a C1 en 8 meses",
  },
  {
    name: "Carlos A.",
    role: "Profesional de TI",
    quote:
      "Las clases de preparación para entrevistas me dieron la confianza que necesitaba. Conseguí el trabajo remoto con una empresa americana.",
    improvement: "Entrevista aprobada en 2 meses",
  },
  {
    name: "Lucia M.",
    role: "Madre de familia",
    quote:
      "Mi hijo paso de no querer estudiar inglés a disfrutar cada clase. La metodología personalizada hace toda la diferencia.",
    improvement: "A2 a B2 en 10 meses",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Resultados y Casos de Exito
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance">
            Historias reales de nuestros estudiantes
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Cada estudiante tiene una historia única. Estos son algunos de los
            resultados que hemos logrado juntos.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border/50 bg-card"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-foreground leading-relaxed italic">
                  {'"' + t.quote + '"'}
                </p>

                {/* Stars */}
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                  <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t.improvement}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
