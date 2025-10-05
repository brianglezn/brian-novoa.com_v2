import { ArrowRight, Calendar } from 'react-feather';

export default function CTA() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.12),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_55%)]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                    ¿Listo para Transformar tu Negocio?
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-95 text-pretty leading-relaxed max-w-2xl mx-auto">
                    Agenda una consulta gratuita de 30 minutos. Analizaremos tu proyecto y te daré una propuesta clara y sin
                    compromiso.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16">
                    <a
                        href="https://calendly.com/brianglezn/web-dev-30m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 text-base sm:text-lg px-5 sm:px-6 md:px-8 py-4 md:py-5 rounded-xl bg-white text-primary font-semibold shadow-xl hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 no-underline-effect"
                    >
                        Agendar Consulta Gratuita
                        <Calendar className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                        <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-10 md:pt-12 border-t border-white/20">
                    <div className="group">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1.5 sm:mb-2 transform transition-transform">
                            +20
                        </p>
                        <p className="opacity-90 text-base sm:text-lg">Proyectos Completados</p>
                    </div>
                    <div className="group">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1.5 sm:mb-2 transform transition-transform">
                            4+
                        </p>
                        <p className="opacity-90 text-base sm:text-lg">Años de Experiencia</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
