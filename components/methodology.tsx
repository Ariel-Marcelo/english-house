import {
  ClipboardCheck,
  PenTool,
  BarChart3,
  RefreshCw,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Evaluación diagnóstica inicial",
    description:
      "Analizamos tu nivel actual, tus fortalezas y las areas donde necesitas mejorar con una evaluación completa.",
  },
  {
    icon: PenTool,
    title: "Diseño de plan individual",
    description:
      "Creamos un plan de estudio único basado en tus objetivos, tu disponibilidad y tu estilo de aprendizaje.",
  },
  {
    icon: BarChart3,
    title: "Seguimiento y métricas de progreso",
    description:
      "Medimos tu avance con indicadores claros para que veas resultados reales en cada etapa.",
  },
  {
    icon: RefreshCw,
    title: "Ajustes continuos",
    description:
      "Adaptamos tu plan conforme avanzas para asegurar que siempre estes en el camino mas eficiente.",
  },
]

export function Methodology() {
  return (
    <section id="metodologia" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestra Metodología
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance">
            Enseñanza personalizada que se adapta a ti
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            No creemos en clases genéricas. Cada estudiante recibe un plan
            diseñado exclusivamente para alcanzar sus metas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Card
              key={step.title}
              className="border-border/50 bg-background transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {"0" + (i + 1)}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
