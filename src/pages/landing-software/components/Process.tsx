export default function Process() {
    return (
        <section className="relative w-full px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Proceso de Trabajo</h2>
                    <p className="mt-4 text-slate-600 text-lg md:text-xl">
                        Un enfoque estructurado que garantiza resultados predecibles y de calidad
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
                                    <h3 className="text-xl font-semibold">Consulta Inicial</h3>
                                    <p className="mt-2 text-slate-600">
                                        Analizamos tus necesidades y objetivos de negocio para definir la mejor solución.
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
                                    <h3 className="text-xl font-semibold">Propuesta & Planificación</h3>
                                    <p className="mt-2 text-slate-600">
                                        Presento una propuesta detallada con alcance, timeline y presupuesto transparente.
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
                                    <h3 className="text-xl font-semibold">Desarrollo Iterativo</h3>
                                    <p className="mt-2 text-slate-600">
                                        Desarrollo en sprints con entregas frecuentes para que veas el progreso constante.
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
                                    <h3 className="text-xl font-semibold">Lanzamiento & Soporte</h3>
                                    <p className="mt-2 text-slate-600">
                                        Despliegue profesional y soporte continuo para garantizar el éxito de tu proyecto.
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
