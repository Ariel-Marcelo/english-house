import {
  ArrowRight,
  ClipboardCheck,
  Clock1Icon,
  HeartHandshake,
  MapPin, MessageCircle,
  Monitor,
  PenTool,
  Smartphone,
  UsersIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background py-16 md:py-24"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.png"
          alt="Clases de inglés personalizadas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/65" />
      </div>

      {/* White decorative background for logo with curved edge */}
      <div className="absolute inset-y-0 left-0 z-[1] hidden md:block w-full pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full fill-white"
        >
          <path d="M 0,0 L 50,0 C 40,35 50,75 25,100 L 0,100 Z" />
        </svg>
      </div>

      {/* Logo in top-left */}
      <div className="absolute left-0 top-0 z-10 hidden md:block">
        <div className="relative h-[25vh] w-[40vw]">
          <Image
            src="/logo.png"
            alt="Get Together English Studio Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="flex flex-col items-start text-left pt-[5vh] max-w-2xl">
          {/* Badge
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            <span>Presencial en Quito o virtual en todo Ecuador</span>
          </div>*/}

          {/* Heading */}
          <h6 className="text-4xl font-bold leading-tight tracking-tight text-foreground font-serif md:text-3xl lg:text-4xl text-balance">
            Tu inglés, a tu ritmo y con un plan hecho para ti
          </h6>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-sm text-pretty max-w-lg">
            Clases personalizadas para niños, adolescentes y adultos. Presencial en Puembo-Ecuador o virtual a cualquier parte del país.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row gap-1">
            <Button size="lg" asChild className="gap-1">
              <a href="#contacto">
                Agenda tu diagnóstico gratuito
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#metodologia">Conoce como trabajamos
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 gap-4 text-sm text-muted-foreground max-w-md">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-primary shrink-0" />
              <span>Diagnóstico inicial gratuito</span>
            </div>
            <div className="flex items-center gap-3">
              <PenTool className="h-5 w-5 text-primary shrink-0" />
              <span>Plan de estudio personalizado</span>
            </div>
            <div className="flex items-center gap-3">
              <UsersIcon className="h-5 w-5 text-primary shrink-0" />
              <span>Seguimiento continuo</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock1Icon className="h-5 w-5 text-primary shrink-0" />
              <span>Horarios flexibles</span>
            </div>
            <div className="flex items-center gap-3">
              <Monitor className="h-5 w-5 text-primary shrink-0" />
              <span>Modalidad presencial o virtual</span>
            </div>
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-5 w-5 text-primary shrink-0" />
              <span>Ambiente cálido y seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
