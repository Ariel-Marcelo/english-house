import { ArrowRight, MapPin, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background py-20 md:py-32"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            <span>Presencial en Quito o virtual en todo Ecuador</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground font-serif md:text-5xl lg:text-6xl text-balance">
            Tu inglés, a tu ritmo y con un plan hecho para ti
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            Clases personalizadas para adolescentes y adultos. Evaluamos tu
            nivel, diseñamos tu plan y medimos tu progreso real.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <a href="#contacto">
                Agenda tu diagnostico gratuito
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#metodologia">Conoce como trabajamos</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" />
              <span>Clases online y presencial</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">100%</span>
              <span>Plan personalizado</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">5+</span>
              <span>Años de experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
