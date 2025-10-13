export default function Process() {
    return (
        <section className="relative w-full px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Proceso de Diseño</h2>
                    <p className="mt-4 text-slate-600 text-lg md:text-xl">
                        Un proceso probado que garantiza diseños que convierten y generan resultados
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute top-0 bottom-0 hidden md:block md:left-[calc(4rem+1.25rem)] pointer-events-none">
                        <div className="h-full w-px bg-gradient-to-b from-primary/30 via-slate-200 to-primary/30" />
                    </div>

                    <ol className="space-y-6 md:space-y-8">
                        <li className="relative md:pl-16">
                            <div className="flex items-start gap-4">
                                <div className="relative z-10 shrink-0">
                                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-semibold shadow-sm">
                                        01
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                    <h3 className="text-xl font-semibold">Discovery & Estrategia</h3>
                                    <p className="mt-2 text-slate-600">
                                        Analizamos tu marca, audiencia y objetivos para crear una estrategia de diseño centrada en
                                        conversión.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="relative md:pl-16">
                            <div className="flex items-start gap-4">
                                <div className="relative z-10 shrink-0">
                                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-semibold shadow-sm">
                                        02
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                    <h3 className="text-xl font-semibold">Wireframes & Prototipos</h3>
                                    <p className="mt-2 text-slate-600">
                                        Creo la estructura visual y flujos de usuario antes de diseñar, asegurando una experiencia
                                        óptima.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="relative md:pl-16">
                            <div className="flex items-start gap-4">
                                <div className="relative z-10 shrink-0">
                                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-semibold shadow-sm">
                                        03
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                    <h3 className="text-xl font-semibold">Diseño Visual</h3>
                                    <p className="mt-2 text-slate-600">
                                        Desarrollo el diseño final con atención al detalle, optimizando cada elemento para
                                        conversión.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="relative md:pl-16">
                            <div className="flex items-start gap-4">
                                <div className="relative z-10 shrink-0">
                                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-semibold shadow-sm">
                                        04
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                    <h3 className="text-xl font-semibold">Desarrollo & Optimización</h3>
                                    <p className="mt-2 text-slate-600">
                                        Implemento el diseño con código limpio, optimizado para velocidad y SEO, listo para
                                        convertir.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
