import {
  ArrowRight,
  ClipboardCheck,
  Clock1Icon,
  HeartHandshake,
  MessageCircle,
  Monitor,
  PenTool,
  UsersIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
      <section
          id="inicio"
          className="relative min-h-[90vh] flex items-center overflow-hidden bg-white"
      >
        {/* Background Image con Overlay Gradiente Suave */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/hero.png"
              alt="Clases de inglés personalizadas"
              fill
              className="object-cover object-center"
              priority
          />
          {/* Gradiente que limpia el área del texto y logo a la izquierda */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 lg:via-white/80 lg:to-transparent" />
        </div>

        {/* Area del Logo - Posición fija con espacio protegido */}
        <div className="absolute top-0 left-0 z-20 p-8 md:p-6 lg:pl-10">
          <div className="relative h-16 w-44 md:h-20 md:w-56 lg:h-34 lg:w-82">
            <Image
                src="/logo.png"
                alt="Get Together Logo"
                fill
                className="object-contain object-left"
                priority
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10 w-full pt-32 md:pt-40">
          <div className="max-w-2xl lg:max-w-3xl">

            {/* Título Principal - Tamaño ajustado y estilo editorial */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif text-slate-900 tracking-tighter leading-[0.9] mb-6">
              Tu inglés, <br />
              <span className="text-primary italic font-light">a tu ritmo.</span>
            </h1>

            <p className="max-w-lg text-lg md:text-xl font-serif italic text-slate-600 leading-relaxed border-l-4 border-primary/20 pl-6 mb-10 font-bold">
              Un plan hecho a tu medida para niños, adolescentes y adultos. Presencial en Puembo o virtual en todo el país.
            </p>

            {/* CTAs con mejor espaciado */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="h-14 px-8 rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all" asChild>
                <a
                    href={`https://wa.me/593963951325?text=${encodeURIComponent("Hola! quiero conocer los cursos de Get Together")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Agenda tu diagnóstico
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base font-bold text-slate-700 bg-white/50 backdrop-blur-sm border-slate-200" asChild>
                <a href="#metodologia">
                  Cómo trabajamos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators - Más sutiles para no sobrecargar */}
            <div className="flex flex-wrap gap-2 max-w-2xl opacity-90">
              {[
                { icon: ClipboardCheck, label: "Diagnóstico gratuito" },
                { icon: PenTool, label: "Plan personalizado" },
                { icon: UsersIcon, label: "Seguimiento continuo" },
                { icon: Clock1Icon, label: "Horarios flexibles" },
                { icon: Monitor, label: "Presencial o Virtual" },
                { icon: HeartHandshake, label: "Ambiente cálido" },
              ].map((item, idx) => (
                  <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/60 bg-white/40 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-slate-500"
                  >
                    <item.icon className="h-3 w-3 text-primary opacity-70" />
                    {item.label}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}