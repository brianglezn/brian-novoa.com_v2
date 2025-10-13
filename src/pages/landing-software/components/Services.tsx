import { CheckCircle, Code, Database, Link as LinkIcon, Layout } from 'react-feather';

export default function Services() {
    return (
        <section className="relative w-full px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Servicios de Desarrollo</h2>
                    <p className="mt-4 text-slate-600 text-lg md:text-xl">
                        Soluciones tecnológicas completas que impulsan tu negocio hacia el siguiente nivel
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <Layout className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">Aplicaciones Web Personalizadas</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Desarrollo de plataformas web a medida que se adaptan perfectamente a tus procesos de negocio.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Diseño centrado en conversión
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Optimización de rendimiento
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Responsive y accesible
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> SEO optimizado
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <Database className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">Sistemas de Gestión (CRM/ERP)</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Soluciones empresariales que automatizan y optimizan tus operaciones diarias.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Automatización de procesos
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Reportes en tiempo real
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Gestión de clientes
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Integración con herramientas existentes
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <LinkIcon className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">APIs & Integraciones</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Conecta tus sistemas y servicios para crear un ecosistema digital eficiente.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Pasarelas de pago seguras
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Gestión de inventario
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Panel de administración
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Analytics integrado
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 rounded-xl bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </span>
                            <h3 className="text-xl font-semibold">Diseño web</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Interfaces modernas y enfocadas en conversión para potenciar tus resultados.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Componentes UI reutilizables
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Animaciones sutiles y microinteracciones
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Guías de estilo coherentes
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-primary" /> Accesibilidad AA
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
