import { Check, User, Users, MapPin, Monitor, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    title: "Clases 1 a 1",
    description: "Atención totalmente personalizada con un profesor dedicado.",
    features: [
      "Plan 100% a tu medida",
      "Horarios flexibles",
      "Seguimiento individual",
      "Materiales personalizados",
      "Reportes de progreso",
    ],
    highlight: true,
  },
  {
    title: "Mini Grupos",
    subtitle: "Max. 3 personas",
    description:
      "Aprende en un grupo reducido con atención casi individual.",
    features: [
      "Grupos de máximo 3 estudiantes",
      "Interacción y práctica entre pares",
      "Plan adaptado al grupo",
      "Horarios coordinados",
      "Seguimiento grupal e individual",
    ],
    highlight: false,
  },
]

const modalities = [
  {
    icon: MapPin,
    title: "Presencial",
    description: "Clases en persona en Quito",
  },
  {
    icon: Monitor,
    title: "Online",
    description: "Virtual desde cualquier lugar de Ecuador",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Adaptamos las clases a tu agenda",
  },
]

export function Plans() {
  return (
    <section id="planes" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Planes y Modalidades
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance">
            Elige la modalidad que mejor se adapte a ti
          </h2>
        </div>

        {/* Plan cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={`relative overflow-hidden transition-shadow hover:shadow-lg ${
                plan.highlight
                  ? "border-primary shadow-md"
                  : "border-border/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-3">
                  {plan.highlight ? (
                    <User className="h-6 w-6 text-primary" />
                  ) : (
                    <Users className="h-6 w-6 text-primary" />
                  )}
                  <div>
                    <CardTitle className="text-xl text-foreground">{plan.title}</CardTitle>
                    {plan.subtitle && (
                      <p className="text-sm text-muted-foreground">
                        {plan.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-6 w-full"
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <a href="#contacto">Consultar disponibilidad</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modalities */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {modalities.map((m) => (
            <div
              key={m.title}
              className="flex flex-col items-center text-center rounded-xl bg-background p-6 border border-border/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <m.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{m.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
