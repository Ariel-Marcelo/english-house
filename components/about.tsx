import { Heart, Award, Target, Sparkles } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Enfoque Personalizado",
    description: "Cada estudiante es único. Adaptamos la enseñanza a tus necesidades y ritmo.",
  },
  {
    icon: Award,
    title: "Excelencia Académica",
    description: "Altos estándares de calidad en cada clase y material que ofrecemos.",
  },
  {
    icon: Heart,
    title: "Pasión por Enseñar",
    description: "Creemos que la educación transforma vidas y se nota en cada interacción.",
  },
  {
    icon: Sparkles,
    title: "Resultados Medibles",
    description: "Medimos el progreso con indicadores claros para asegurar tu avance.",
  },
]

export function About() {
  return (
      <section id="nosotros" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-black">
        {/* IMAGEN DE FONDO CON OVERLAY */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/hero.png" // Asegúrate de tener esta imagen en public/
              alt="About Get Together"
              fill
              className="object-cover opacity-50"
              priority
          />
          {/* Gradiente para asegurar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:bg-gradient-to-r" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 z-10 w-full">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LADO IZQUIERDO: TEXTO PRINCIPAL */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
                <Sparkles className="h-3 w-3" />
                Sobre Nosotros
              </div>

              <h2 className="text-4xl md:text-6xl font-black font-serif text-white tracking-tighter leading-[0.9] mb-8">
                Un equipo comprometido con <span className="text-primary italic font-light">tu progreso.</span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl font-light text-slate-300 leading-relaxed font-serif italic">
                <p>
                  Somos un centro especializado en clases personalizadas de inglés para niños, adolescentes y adultos.
                </p>
                <p>
                  Trabajamos con atención individual o en grupos muy reducidos, asegurando un acompañamiento real y avances visibles.
                </p>
              </div>

              {/* STATS ESTILO MODALITIES */}
              <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-10">
                <div>
                  <p className="text-4xl font-black text-white tracking-tighter">5+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">Años Exp.</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white tracking-tighter">100+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">Estudiantes</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white tracking-tighter">95%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">Éxito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}