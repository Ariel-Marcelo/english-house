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
      <div className="absolute inset-y-0 left-0 z-[1] hidden lg:block w-full pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full fill-white"
        >
          {/* Tablet path (md) */}
          <path d="M 0,0 L 100,0 C 80,35 90,75 55,100 L 0,100 Z" className="lg:hidden" />
          {/* Small laptop path (lg) */}
          <path d="M 0,0 L 75,0 C 65,35 75,75 40,100 L 0,100 Z" className="hidden lg:block xl:hidden" />
          {/* Large desktop path (xl+) */}
          <path d="M 0,0 L 50,0 C 40,35 50,75 25,100 L 0,100 Z" className="hidden xl:block" />
        </svg>
      </div>

      {/* Logo in top-left */}
      <div className="absolute left-0 top-0 z-10 hidden md:block">
        <div className="relative h-[20vh] w-[35vw] max-w-sm lg:max-w-md xl:max-w-lg">
          <Image
              src="/logo.png"
              alt="Get Together English Studio Logo"
              fill
              className="object-contain object-left"
              priority
          />
        </div>
      </div>

      <div className="relative max-w-7xl px-6 z-10">
        <div className="flex flex-col items-start text-left pt-[5vh] md:max-w-xl lg:max-w-2xl">
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
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a
                  href={`https://wa.me/593963951325?text=${encodeURIComponent("Hola! quiero conocer los cursos de Get Together")}`}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Agenda tu diagnóstico gratuito
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#metodologia">Conoce como trabajamos
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-3 text-sm text-muted-foreground max-w-xl">
            <Button variant="outline" size="sm" asChild className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all font-normal">
              <a href="#contacto">
                <ClipboardCheck className="h-4 w-4 text-primary shrink-0" />
                <span>Diagnóstico inicial gratuito</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all font-normal">
              <a href="#metodologia">
                <PenTool className="h-4 w-4 text-primary shrink-0" />
                <span>Plan de estudio personalizado</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all font-normal">
              <a href="#proceso">
                <UsersIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Seguimiento continuo</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all font-normal">
              <a href="#planes">
                <Clock1Icon className="h-4 w-4 text-primary shrink-0" />
                <span>Horarios flexibles</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all font-normal">
              <a href="#planes">
                <Monitor className="h-4 w-4 text-primary shrink-0" />
                <span>Modalidad presencial o virtual</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all font-normal">
              <a href="#nosotros">
                <HeartHandshake className="h-4 w-4 text-primary shrink-0" />
                <span>Ambiente cálido y seguro</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
