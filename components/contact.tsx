"use client"

import {MessageCircle, CheckCircle2, Clock, MapPin, Sparkles, ArrowRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import Image from "next/image"

export function Contact() {
    return (
        <section id="contacto"
                 className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-slate-50/50">

            {/* IMAGEN DE FONDO CLARA */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/puembo.jpg"
                    alt="Contact Get Together"
                    fill
                    className="object-cover opacity-20 grayscale-[20%]"
                    priority
                />
                {/* Overlay degradado para suavizar los bordes y asegurar legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50/80"/>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 z-10 w-full">
                <div className="grid gap-12 lg:grid-cols-12 items-start">

                    {/* LADO IZQUIERDO: TEXTO EDITORIAL (5 cols) */}
                    <div className="lg:col-span-5">
                        <a href="https://wa.me/593963951325" target="_blank" rel="noopener noreferrer">
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
                                <Sparkles className="h-3 w-3"/>
                                Empieza hoy
                            </div>
                        </a>


                        <h2 className="text-5xl md:text-7xl font-black font-serif text-slate-900 tracking-tighter leading-[0.85] mb-8">
                            Agenda tu <br/>
                            <span className="text-primary italic font-light">diagnóstico.</span>
                        </h2>

                        <p className="text-xl font-serif italic text-slate-600 leading-relaxed border-l-4 border-primary/20 pl-6 mb-10">
                            El diagnóstico nos permite diseñar un plan realista, acorde a tu ritmo, tu objetivo y tu
                            disponibilidad.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Evaluamos tu nivel",
                                "Definimos tu objetivo",
                                "Te recomendamos un plan personalizado"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary"/>
                                    <span className="font-bold text-slate-700 tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LADO DERECHO: INFO CARDS (7 cols) */}
                    <div className="lg:col-span-7 grid gap-6 md:grid-cols-2">

                        {/* CARD PRINCIPAL WHATSAPP */}
                        <div
                            className="md:col-span-2 p-10 rounded-[3rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-black font-serif text-slate-900 mb-2">¿Listo para
                                    hablar?</h3>
                                <p className="text-slate-500 text-sm font-medium">Agenda tu cita directamente por
                                    WhatsApp.</p>
                            </div>
                            <Button size="lg"
                                    className="h-16 px-10 rounded-full text-base font-bold group shadow-lg shadow-primary/20"
                                    asChild>
                                <a href="https://wa.me/593963951325" target="_blank" rel="noopener noreferrer">
                                    Agendar por WhatsApp
                                    <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform"/>
                                </a>
                            </Button>
                        </div>

                        {/* CARD DETALLES SESIÓN */}
                        <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 backdrop-blur-md">
                            <div
                                className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Clock className="h-6 w-6 text-primary"/>
                            </div>
                            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">Duración</h4>
                            <p className="text-lg font-serif italic text-slate-600">Aproximadamente 30 minutos.</p>
                        </div>

                        {/* CARD MODALIDAD */}
                        <div className="group p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-6">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center  group-hover:bg-primary group-hover:text-white transition-colors">
                                    <a
                                        href="https://maps.app.goo.gl/uTiDmJZd3epSwFmX8?g_st=aw" // Reemplaza con tu link real de Google Maps
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MapPin className="h-6 w-6" />
                                    </a>

                                </div>
                                {/* Enlace sutil a Maps */}
                                <a
                                    href="https://maps.app.goo.gl/uTiDmJZd3epSwFmX8?g_st=aw" // Reemplaza con tu link real de Google Maps
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    Ver Mapa <ArrowRight className="h-3 w-3" />
                                </a>
                            </div>

                            <h4 className="font-black text-white uppercase tracking-tight mb-2">Modalidad</h4>
                            <p className="text-sm leading-relaxed text-slate-300 mb-6">
                                Presencial en <span className="text-white font-bold">Puembo-Ecuador</span> o <span className="text-white font-bold">Virtual</span> en todo el país.
                            </p>

                            {/* Botón de acción secundario dentro de la tarjeta */}
                            <Button
                                variant="link"
                                className="p-0 h-auto text-white/50 hover:text-white text-xs font-bold uppercase tracking-tighter"
                                asChild
                            >
                                <a
                                    href="https://maps.app.goo.gl/uTiDmJZd3epSwFmX8?g_st=aw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Puembo, Pichincha — Ecuador
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}