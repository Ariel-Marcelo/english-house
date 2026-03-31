import { CheckCircle2, Quote, Sparkles, ArrowUpRight } from "lucide-react"

const testimonials = [
  {
    num: "01",
    name: "Maria Fernanda L.",
    role: "Estudiante universitaria",
    quote: "Gracias a las clases personalizadas pude pasar mi examen TOEFL con el puntaje que necesitaba para aplicar a mi maestria en Canada.",
    improvement: "B1 a C1 en 8 meses",
    width: "md:w-[30%]",
    bg: "bg-blue-50/50",
    accent: "text-blue-600"
  },
  {
    num: "02",
    name: "Carlos A.",
    role: "Profesional de TI",
    quote: "Las clases de preparación para entrevistas me dieron la confianza que necesitaba. Conseguí el trabajo remoto con una empresa americana.",
    improvement: "Entrevista aprobada en 2 meses",
    width: "md:w-[30%]",
    mt: "md:mt-12", // Desfase visual
    bg: "bg-orange-50/50",
    accent: "text-orange-600"
  },
  {
    num: "03",
    name: "Lucia M.",
    role: "Madre de familia",
    quote: "Mi hijo paso de no querer estudiar inglés a disfrutar cada clase. La metodología personalizada hace toda la diferencia.",
    improvement: "A2 a B2 en 10 meses",
    width: "md:w-[35%]",
    bg: "bg-primary/5",
    accent: "text-primary"
  },
]

const benefits = [
  "Mayor confianza al hablar en situaciones cotidianas",
  "Mejor desempeño en entrevistas y contextos profesionales",
  "Más seguridad en reuniones laborales",
  "Mejor comprensión auditiva",
  "Mayor fluidez y espontaneidad al expresarse"
]

export function Testimonials() {
  return (
      <section id="testimonios" className="bg-[#fdfdfd] py-20 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          {/* HEADER ESTILO EDITORIAL */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start mb-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <Sparkles className="h-3 w-3" />
                Resultados
              </div>
              <h2 className="text-5xl md:text-7xl font-black font-serif text-slate-900 tracking-tighter leading-[0.9] mb-8">
                Resultados que <br /> <span className="text-primary/40 text-outline">se sienten</span>
              </h2>
              <p className="text-xl font-serif italic text-slate-500 border-l-4 border-primary/20 pl-6 max-w-md leading-relaxed">
                "Porque aprender inglés no solo es saber más, es sentirse capaz de usarlo."
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <p className="text-lg text-slate-600 font-medium mb-8">
                Nuestros estudiantes destacan y experimentan cambios reales en su forma de comunicarse:
              </p>
              <ul className="grid gap-4">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-4 group">
                      <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                      <span className="text-slate-800 font-semibold tracking-tight">{benefit}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARDS ASIMÉTRICAS (Estilo Modalities)
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {testimonials.map((t) => (
                <div
                    key={t.num}
                    className={`
                relative p-10 rounded-[3rem] transition-all duration-500
                hover:shadow-2xl hover:-translate-y-2 border border-slate-100
                w-full ${t.width} ${t.mt || ''} ${t.bg}
              `}
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-start">
                  <span className={`text-6xl font-black font-serif leading-none opacity-20 ${t.accent}`}>
                    {t.num}
                  </span>
                      <Quote className={`h-8 w-8 opacity-20 ${t.accent}`} />
                    </div>

                    <p className="text-lg font-serif italic leading-relaxed text-slate-800 min-h-[100px]">
                      "{t.quote}"
                    </p>

                    <div className="space-y-4">
                      <div className="pt-6 border-t border-slate-200/60">
                        <p className="font-black text-slate-900 uppercase tracking-tight">{t.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                      </div>

                      <div className="flex items-center justify-between gap-2 bg-white/80 p-3 rounded-2xl border border-white shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Logro</span>
                        <span className={`text-[11px] font-bold ${t.accent}`}>{t.improvement}</span>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          */}

        </div>
      </section>
  )
}