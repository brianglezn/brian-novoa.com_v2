import { CheckCircle, Layers, Smartphone, Search, Users } from 'react-feather';

export default function Services() {
    return (
        <section className="relative w-full px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Servicios de Diseño Web</h2>
                    <p className="mt-4 text-slate-600 text-lg md:text-xl">
                        Diseños web profesionales que convierten visitantes en clientes y aumentan tus ventas
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <Layers className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">Diseño de Landing Pages</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Páginas de aterrizaje optimizadas para conversión que transforman visitantes en clientes potenciales.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Diseño centrado en conversión
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Copy persuasivo y efectivo
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Formularios optimizados
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Llamadas a la acción estratégicas
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <Smartphone className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">Diseño Responsive</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Sitios web que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta escritorio.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Enfoque Mobile-first
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Navegación intuitiva
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Interfaces táctiles amigables
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Compatibilidad entre navegadores
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <Search className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">Optimización SEO Visual</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Diseños que no solo se ven bien, sino que también ayudan a tu sitio a posicionarse mejor en Google.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Estructura amigable para SEO
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Velocidad de carga optimizada
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Marcado de esquema integrado
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Etiquetas meta optimizadas
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <Users className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">UX/UI Design</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Experiencias de usuario excepcionales que mantienen a tus visitantes comprometidos y regresando.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Mapeo del recorrido del usuario
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Wireframes y prototipos
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Pruebas de usabilidad
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Accesibilidad web (WCAG)
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
