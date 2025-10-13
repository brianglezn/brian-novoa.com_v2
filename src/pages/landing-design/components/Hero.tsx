import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Smartphone, Zap } from 'react-feather';

export default function Hero() {
    return (
        <main className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(32,109,126,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(32,109,126,0.3),transparent_50%)]" />

            <section className="relative z-10 w-full">
                <div className="mx-auto max-w-6xl text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight text-pretty">
                        Diseño Web que
                        <br />
                        <span className="bg-gradient-to-r from-sky-900 via-sky-800 to-primary  bg-clip-text text-transparent">
                            Convierte
                        </span>{' '}
                        y Vende
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Soy Brian, un diseñador web especializado en crear experiencias digitales que no solo se ven increíbles,
                        sino que generan resultados reales para tu negocio.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                        <a
                            href="https://calendly.com/brianglezn/web-dev-30m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline-effect group inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 shadow-lg transition-colors"
                        >
                            Consulta Gratuita de Diseño
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link
                            to="/projects"
                            className="no-underline-effect inline-flex items-center justify-center rounded-xl border-2 border-primary/20 px-8 py-4 text-lg hover:bg-primary/5 hover:border-primary/40 bg-transparent text-slate-900 transition-colors"
                        >
                            Ver Portfolio
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-white/100 backdrop-blur-sm border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                                <Layers className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">Diseño Centrado en Conversión</h3>
                            <p className="text-sm text-slate-600 text-center leading-relaxed">
                                Cada elemento está diseñado para guiar a tus visitantes hacia la acción
                            </p>
                        </div>

                        <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-white/100 backdrop-blur-sm border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                                <Smartphone className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">Experiencia Mobile-First</h3>
                            <p className="text-sm text-slate-600 text-center leading-relaxed">
                                Diseños optimizados para móviles que funcionan perfectamente en todos los dispositivos
                            </p>
                        </div>

                        <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-white/100 backdrop-blur-sm border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                                <Zap className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">Velocidad y Rendimiento</h3>
                            <p className="text-sm text-slate-600 text-center leading-relaxed">
                                Sitios web rápidos que mantienen a tus usuarios comprometidos
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
