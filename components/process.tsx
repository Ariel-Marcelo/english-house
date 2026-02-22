import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Evaluamos tu nivel actual, tus metas y tu disponibilidad para crear la base de tu plan personalizado.",
  },
  {
    step: "02",
    title: "Diseño del plan",
    description:
      "Creamos un programa único con objetivos claros, cronograma y los recursos adecuados para ti.",
  },
  {
    step: "03",
    title: "Clases personalizadas",
    description:
      "Sesiones dinámicas enfocadas en tus necesidades reales, con un profesor dedicado a tu progreso.",
  },
  {
    step: "04",
    title: "Seguimiento y medición",
    description:
      "Monitoreamos tu avance con métricas claras y reportes periódicos de tu rendimiento.",
  },
  {
    step: "05",
    title: "Evaluación de resultados",
    description:
      "Medimos el progreso alcanzado y ajustamos el plan para la siguiente etapa de tu aprendizaje.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Proceso de Trabajo
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance">
            Cinco pasos hacia tu meta
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Un proceso estructurado y transparente desde el primer dia hasta que
            alcances tus objetivos.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-8" />

            <div className="flex flex-col gap-10">
              {steps.map((item, i) => (
                <div key={item.step} className="relative flex gap-6 md:gap-8">
                  {/* Circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm md:h-16 md:w-16 md:text-base">
                    {item.step}
                  </div>
                  {/* Content */}
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>
                    {i === steps.length - 1 && (
                      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Resultados medibles garantizados</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
