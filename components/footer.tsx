import {BookOpen, HeartPlus, Mail, MapPin, Phone} from "lucide-react"

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Programas", href: "#programas" },
  { label: "Modalidades", href: "#modalities" },
  { label: "Resultados", href: "#testimonios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-bold font-serif">
                Get Together
              </span>
            </div>
            <p className="mt-3 text-sm opacity-70 leading-relaxed">
              Clases personalizadas de inglés para niños,  adolescentes y adultos.
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
                <MapPin className="h-4 w-4 shrink-0" />
                Vía Férrea N5-22 y 25 de Julio (Ciclovía Chaquiñan de Puembo) Quito, Ecuador
              </li>
              <li className="flex items-center  text-sm opacity-70">
                <a href="https://wa.me/593963951325" className="flex gap-2" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 shrink-0" />
                  +593 963 951 325
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="h-4 w-4 shrink-0" />
                get.together.es@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <HeartPlus className="h-4 w-4 shrink-0" />
                Redes Sociales
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-sm opacity-50">
          <p>
            {"2026 Get Together. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
