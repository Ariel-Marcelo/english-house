import { Heart, Award, Target, Sparkles } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Enfoque Personalizado",
    description:
      "Cada estudiante es único. Adaptamos cada aspecto de la enseñanza a tus necesidades y ritmo.",
  },
  {
    icon: Award,
    title: "Excelencia Académica",
    description:
      "Nos comprometemos con los mas altos estándares de calidad en cada clase y material que ofrecemos.",
  },
  {
    icon: Heart,
    title: "Pasión por Enseñar",
    description:
      "Creemos que la educación transforma vidas. Esa pasión se refleja en cada interacción con nuestros estudiantes.",
  },
  {
    icon: Sparkles,
    title: "Resultados Medibles",
    description:
      "No solo enseñamos, medimos. Cada estudiante puede ver su progreso con indicadores claros y objetivos.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre Nosotros
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance">
              Mas que una academia, somos tu aliado en el aprendizaje
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Con más de 5 años de experiencia enseñando inglés personalizado,
              hemos ayudado a decenas de estudiantes a alcanzar sus metas
              académicas y profesionales. Nos especializamos en crear experiencias
              de aprendizaje únicas que realmente funcionan.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Nuestra filosofía es simple: conocerte, entender tus objetivos y
              diseñarte un camino claro para llegar a ellos. Sin clases
              genéricas, sin perder tiempo.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">
                  Años de experiencia
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">
                  Estudiantes satisfechos
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">
                  Alcanzan sus metas
                </p>
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
