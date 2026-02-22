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
    title: "Nivelación en Lengua Extranjera",
    description:
      "Refuerza y consolida tu base de inglés para alcanzar el nivel que necesitas.",
  },
  {
    icon: GraduationCap,
    title: "Inglés Académico",
    description:
      "Preparación para entornos académicos, ensayos, presentaciones y lectura crítica.",
  },
  {
    icon: Plane,
    title: "Inglés para Estudios en el Exterior",
    description:
      "Preparate para vivir y estudiar en el extranjero con confianza y fluidez.",
  },
  {
    icon: Briefcase,
    title: "Preparación para Entrevistas Laborales",
    description:
      "Domina el inglés profesional para destacar en entrevistas de trabajo.",
  },
  {
    icon: MessageCircle,
    title: "Conversación Intensiva",
    description:
      "Mejora tu fluidez y confianza al hablar con sesiones enfocadas en la práctica oral.",
  },
  {
    icon: BookOpen,
    title: "Clases para Adolescentes",
    description:
      "Programas personalizados y dinámicos diseñados para el ritmo de aprendizaje juvenil.",
  },
]

export function Programs() {
  return (
    <section id="programas" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Programas Personalizados
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance">
            Un programa para cada objetivo
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Divide tu aprendizaje según tus metas especificas. Cada programa
            esta diseñado para llevarte del punto A al punto B de la forma mas
            eficiente.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="group border-border/50 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
