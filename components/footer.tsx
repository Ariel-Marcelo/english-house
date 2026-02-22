import { BookOpen, MapPin, Phone } from "lucide-react"

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Programas", href: "#programas" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Planes", href: "#planes" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-bold font-serif">
                English Academy
              </span>
            </div>
            <p className="mt-3 text-sm opacity-70 leading-relaxed">
              Clases personalizadas de inglés para adolescentes y adultos.
              Presencial en Quito o virtual en todo Ecuador.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold">Enlaces</h4>
            <ul className="mt-3 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <ul className="mt-3 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="h-4 w-4 shrink-0" />
                +593 963 951 325
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4 shrink-0" />
                Quito, Ecuador
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-sm opacity-50">
          <p>
            {"2026 English Academy. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
