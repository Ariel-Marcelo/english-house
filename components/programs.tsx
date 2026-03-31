import {
  GraduationCap,
  Plane,
  Briefcase,
  MessageCircle,
  Languages,
  ArrowRight,
  Sparkles
} from "lucide-react"

const programs = [
  {
    icon: Languages,
    title: "Inglés para trabajo",
    description: "Reuniones, entrevistas y comunicación profesional.",
    bg: "bg-blue-50/40",
    accent: "text-blue-600",
    order: "order-1"
  },
  {
    icon: GraduationCap,
    title: "Inglés Académico",
    description: "Habilidades lingüísticas para estudios superiores.",
    bg: "bg-slate-50",
    accent: "text-slate-600",
    order: "order-2"
  },
  {
    icon: Plane,
    title: "Inglés para migración",
    description: "Enfoque práctico en comunicación diaria y adaptación cultural.",
    bg: "bg-orange-50/40",
    accent: "text-orange-600",
    order: "order-3"
  },
  {
    icon: Briefcase,
    title: "Conversación personalizada",
    description: "Sesiones enfocadas en tu fluidez y seguridad al hablar.",
    bg: "bg-primary/5",
    accent: "text-primary",
    order: "order-4"
  },
  {
    icon: MessageCircle,
    title: "Social Hour - Language Exchange",
    description: "Espacios guiados de práctica en un entorno social y relajado. El objetivo es hablar, equivocarse y ganar confianza usando el inglés dentro de una experiencia real y segura.",
    bg: "bg-white border-2 border-primary/10",
    accent: "text-primary",
    featured: true,
    order: "lg:order-5"
  }
]

export function Programs() {
  return (
      <section id="programas" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* HEADER */}
          <div className="mb-12 border-l-4 border-primary pl-6">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 tracking-tight leading-none">
              Tu meta define <span className="text-primary">tu programa.</span>
            </h2>
            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-lg font-serif italic text-slate-500">
                Pregunta por nuestro servicio de nivelación académica y preparación para suficiencia B2
              </p>
              <a
                  href="#contacto"
                  className="text-sm font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-all flex items-center gap-2"
              >
                Contactanos <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* GRID ASIMÉTRICO */}
          {/* Mobile: 1 col | Tablet/Small Laptop: 2 cols | Large Laptop: 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

            {programs.map((program) => (
                <div
                    key={program.title}
                    className={`
                group relative p-8 rounded-[2rem] transition-all duration-300
                hover:shadow-lg border border-slate-100/60 flex flex-col
                ${program.bg}
                ${program.order}
                ${program.featured ? 'lg:col-start-3 lg:row-start-1 lg:row-span-2' : ''}
              `}
                >
                  <div className="flex flex-col h-full">
                    <div className={`p-3 w-fit rounded-xl bg-white shadow-sm mb-6 ${program.accent}`}>
                      <program.icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 font-serif leading-tight">
                        {program.title}
                      </h3>
                      <p className={`mt-3 leading-relaxed text-slate-600 ${program.featured ? 'text-base' : 'text-sm'}`}>
                        {program.description}
                      </p>
                    </div>

                    {program.featured && (
                        <div className="mt-8 pt-6 border-t border-primary/10">
                          <div className="flex items-center gap-2 text-primary mb-2">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Experiencia Inmersiva</span>
                          </div>
                          <p className="text-xs italic text-slate-400">
                            "Nuestro espacio favorito para soltarse y ganar seguridad."
                          </p>
                        </div>
                    )}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}