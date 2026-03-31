  import {
    ClipboardCheck,
    PenTool,
    BarChart3,
    RefreshCw, ArrowRight,
  } from "lucide-react"
  import {Button} from "@/components/ui/button";

  const steps = [
    {
      icon: ClipboardCheck,
      title: "Diagnóstico Inicial",
      description:
        "Realizamos una evaluación gratuita para conocer tu nivel actual y entender tu objetivo específico.",
    },
    {
      icon: PenTool,
      title: "Plan Individual",
      description:
        "Diseñamos un plan adaptado a tu nivel, tomando en cuenta tu objetivo, tu disponibilidad y tu ritmo de aprendizaje.",
    },
    {
      icon: BarChart3,
      title: "Clases enfocádas",
      description:
        "Cada sesión tiene un propósito claro y actividades alineadas a tu meta, para que sientas avances reales desde el inicio.",
    },
    {
      icon: RefreshCw,
      title: "Seguimiento Constante",
      description:
        "Adaptamos tu plan conforme avanzas para asegurar que siempre estes en el camino mas eficiente.",
    },
  ]

  export function Methodology() {
    return (
        <section id="metodologia" className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 border-l-4 border-primary pl-6">
              <h2 className="text-5xl md:text-5xl font-black font-serif text-slate-900 tracking-tighter leading-[0.9] mb-8">
                Aprendizaje <span className="text-primary/40 text-outline"> personalizado </span>  con estructura y <span className="text-primary/40 text-outline"> propósito </span>
              </h2>
            </div>

            {/* Contenedor del Camino */}
            <div className="relative grid gap-8 md:grid-cols-4 md:gap-4">

              {/* Línea decorativa de fondo (solo en desktop) */}
              <div className="absolute top-12 left-0 hidden h-0.5 w-full bg-border md:block -z-0" />

              {steps.map((step, i) => (
                  <div key={step.title} className="relative z-10 flex flex-col items-center text-center group">

                    {/* Círculo con Icono y Número */}
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-background border-4 border-primary/20 transition-all duration-300 group-hover:border-primary group-hover:scale-110 shadow-sm">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      {/* Badge con el número */}
                      <span className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg">
                  {i + 1}
                </span>
                    </div>

                    {/* Contenido */}
                    <div className="mt-6 px-4">
                      <h3 className="text-xl font-bold text-foreground font-serif">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Flecha o indicador móvil (solo visible en celular entre pasos) */}
                    {i < steps.length - 1 && (
                        <div className="mt-8 block md:hidden">
                          <div className="h-8 w-0.5 bg-primary/30" />
                        </div>
                    )}
                  </div>
              ))}
            </div>

            <div className="mt-20 flex justify-center">
              <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                <a href="#programas">
                  Conoce cómo trabajamos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
    )
  }
