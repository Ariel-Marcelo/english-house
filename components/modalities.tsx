import {User, Users, Coffee, Milestone} from "lucide-react"
import Image from "next/image";

const learningOptions = [
    {
        num: "01",
        title: "1 a 1",
        subtitle: "Personalizado",
        description: "Cada sesión se adapta a tu ritmo, objetivos y disponibilidad real.",
        icon: User,
        bg: "bg-blue-50/40",
        width: "md:w-[28%]"
    },
    {
        num: "02",
        title: "Mini grupos",
        subtitle: "Máximo 4",
        description: "Grupos reducidos entre 3 o 4 personas. Se fomenta la interacción y la práctica constante.",
        icon: Users,
        bg: "bg-orange-50/40",
        width: "md:w-[28%]",
        mt: "md:mt-8"
    },
    {
        num: "03",
        title: "Social Hour",
        subtitle: "Exchange",
        description: "Espacios sociales guiados donde el inglés se practica de forma natural y espontánea.",
        icon: Coffee,
        bg: "bg-primary/5",
        width: "md:w-[38%]",
        featured: true
    }
]

export function Modalities() {
    return (
        <section
            id="modalities"
            className="relative min-h-[90vh] flex flex-col justify-center content-start py-16 bg-black overflow-hidden scroll-mt-20"
        >
            {/* FONTO TOTALMENTE NÍTIDO */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/social-groups.jpg"
                    alt="Clases de inglés"
                    fill
                    className="object-cover  object-top opacity-40"
                    priority
                />
                {/* Gradiente sólido para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/90"/>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 z-10 w-full">
                {/* TEXTO HERO */}
                <div className="mb-14 border-l-4 border-primary pl-6">
                    <h1 className="text-5xl md:text-7xl font-black font-serif text-white tracking-tighter leading-none">
                        En Get Together,
                    </h1>
                    <p className="text-xl md:text-3xl font-extralight font-serif text-white/80 italic tracking-tight">
                        el inglés no solo se estudia. Se vive y se comparte.
                    </p>
                </div>

                {/* CARDS NÍTIDAS (Sin backdrop-blur) */}
                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                    {learningOptions.map((option) => (
                        <div
                            key={option.num}
                            className={`
                group relative p-8 rounded-[2.5rem] transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-1
                /* Usamos colores con 90% de opacidad para que sean nítidos */
                border border-white/10
                w-full ${option.width} ${option.mt || ''}
                ${option.num === "01" ? 'bg-[#1e1e1e]/90' : ''}
                ${option.num === "02" ? 'bg-[#1e1e1e]/90' : ''}
                ${option.num === "03" ? 'bg-[#1e1e1e]/95 border-primary/30' : ''}
              `}
                        >
                            <div className="flex flex-col gap-5">
                                <div className="flex justify-between items-center">
                  <span className={`text-5xl font-black font-serif leading-none ${
                      option.num === "01" ? 'text-blue-500' :
                          option.num === "02" ? 'text-orange-500' : 'text-primary'
                  }`}>
                    {option.num}
                  </span>
                                    <option.icon className="h-6 w-6 text-white/50"/>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white font-serif leading-tight">
                                        {option.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                                        {option.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resto del footer... */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Milestone className="h-6 w-6 text-primary shrink-0"/>
                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-2xl italic">
                            "Al completar tu proceso recibirás un certificado interno emitido por Get Together que respalda el cumplimiento de los objetivos trabajados y el recorrido dentro de nuestro English Studio."
                        </p>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
            CERTIFICADO GET TOGETHER
          </span>
                </div>
            </div>
        </section>
    )
}