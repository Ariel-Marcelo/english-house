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
      <section
          id="nosotros"
          className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-black"
      >
        {/* IMAGEN DE FONDO CON OVERLAY */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/locales_idiomas.jpg"
              alt="About Get Together"
              fill
              className="object-cover opacity-60"
              priority
          />

          {/* 🔥 Gradientes tipo fuego */}
          {/* Gradiente horizontal principal */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b0f05]/95 via-[#F36C21]/60 via-[#FF8A3D]/40 to-transparent" />

          {/* Gradiente vertical para profundidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-[#FFD166]/20" />

          {/* Glow radial (efecto antorcha) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#F36C21_0%,transparent_60%)] opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 z-10 w-full">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LADO IZQUIERDO: TEXTO */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F36C21]/20 border border-[#F36C21]/30 text-[#F36C21] text-xs font-black uppercase tracking-[0.2em] mb-6">
                <Sparkles className="h-3 w-3" />
                Sobre Nosotros
              </div>

              <h2 className="text-4xl md:text-6xl font-black font-serif text-white tracking-tighter leading-[0.9] mb-8">
                Un equipo comprometido con{" "}
                <span className="text-white italic font-light">
                tu progreso.
              </span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl font-light text-slate-300 leading-relaxed font-serif italic">
                <p>
                  Somos un centro especializado en clases personalizadas de inglés
                  para niños, adolescentes y adultos.
                </p>
                <p>
                  Trabajamos con atención individual o en grupos muy reducidos,
                  asegurando un acompañamiento real y avances visibles.
                </p>
              </div>

              {/* STATS */}
              <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-10">
                <div>
                  <p className="text-4xl font-black text-white tracking-tighter">
                    5+
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F36C21] mt-1">
                    Años Exp.
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white tracking-tighter">
                    100+
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F36C21] mt-1">
                    Estudiantes
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white tracking-tighter">
                    95%
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F36C21] mt-1">
                    Éxito
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}