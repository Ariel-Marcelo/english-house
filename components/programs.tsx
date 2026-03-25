import {
  GraduationCap,
  Plane,
  Briefcase,
  MessageCircle,
  BookOpen,
  Languages,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const programs = [
  {
    icon: Languages,
    title: "Inglés para trabajo",
    description:
      "Reuniones, entrevistas, presentaciones y comunicación profesional.",
  },
  {
    icon: GraduationCap,
    title: "Inglés Académico",
    description:
      "Desarrollo de habilidades lingüísticas para estudios y contextos formales.",
  },
  {
    icon: Plane,
    title: "Inglés para migración",
    description:
      "Enfoque práctico en comunicación diaria, adaptación cultural y situaciones reales del día a día.",
  },
  {
    icon: Briefcase,
    title: "Conversación personalizada",
    description:
      "Fluidez, pronunciación y seguridad al hablar.",
  },
  {
    icon: MessageCircle,
    title: "Social Hour-Language Exchange",
    description:
      "Espacios guiados de práctica comunicativa en un entorno social, relajado y seguro. Aquí el objetivo es hablar, equivocarse, soltarse y ganar confianza usando el inglés dentro de una experiencia real.",
  }
]

export function Programs() {
  return (
      <section id="programas" className="bg-background py-15 md:py-23 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl">
              Tu meta define tu programa
            </h2>
          </div>

          {/* Contenedor tipo Collage / Bubbles */}
          <div className="flex flex-wrap justify-center gap-4">
            {programs.map((program, index) => (
                <div
                    key={program.title}
                    className={`
                group relative p-8 rounded-[2.5rem] transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                /* Alternamos tamaños y colores para efecto collage */
                ${index % 2 === 0 ? 'w-full md:w-[45%] bg-blue-50/50' : 'w-full md:w-[52%] bg-orange-50/50'}
                ${index === 4 ? 'md:w-[98%] bg-white' : ''} 
              `}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground font-serif">
                        {program.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  {/* Decoración sutil de burbuja */}
                  <div className="absolute -bottom-2 -right-2 h-20 w-20 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}
