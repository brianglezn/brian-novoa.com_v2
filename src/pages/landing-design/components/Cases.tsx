import profitLost from '../../../assets/projects/profit-lost/landing.png';
import labarveria from '../../../assets/projects/web-design/labarveria.png';
import refrigeraciontransporte from '../../../assets/projects/web-design/refrigeraciontransporte.png';
import { Link } from 'react-router-dom';

export default function Cases() {
    const cases = [
        {
            title: 'La Barvería',
            summary:
                'Diseño web para barbería moderna con sistema de reservas online. Diseño UX/UI centrado en conversión con reservas integradas, galería de trabajos y diseño móvil primero.',
            link: '/projects',
            imageAlt: 'La Barvería diseño web barbería',
            imageSrc: labarveria,
        },
        {
            title: 'Profit&Lost',
            summary:
                'Plataforma de control financiero para personas que quieren tener el control total de su dinero. Visualiza gastos e ingresos en tiempo real, genera reportes automáticos y toma decisiones con datos, no con suposiciones. Desarrollada con dashboards personalizados y reportes exportables para optimizar la gestión financiera.',
            link: '/projects',
            imageAlt: 'Profit-lost.com diseño web corporativo',
            imageSrc: profitLost,
        },
        {
            title: 'ERN',
            summary:
                'Sitio web para empresa de refrigeración industrial con catálogo de productos y formularios de contacto optimizados. Diseño profesional que transmite confianza y expertise técnico. ',
            link: '/projects',
            imageAlt: 'ERN diseño web industrial',
            imageSrc: refrigeraciontransporte,
        },
    ];

    return (
        <section className="w-full px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Casos de Diseño Web</h2>
                    <p className="text-slate-600 mt-2">Diseños que convierten visitantes en clientes reales.</p>
                </header>

                <div className="grid grid-cols-1 gap-6">
                    {cases.map((c) => (
                        <article
                            key={c.title}
                            className="group rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 p-4 md:p-5 flex flex-col md:flex-row items-start gap-4 w-full"
                        >
                            <div className="w-full md:w-64 h-46 md:h-56 rounded-lg overflow-hidden mb-3 md:mb-0 bg-slate-100 flex-shrink-0">
                                {c.imageSrc ? (
                                    <img src={c.imageSrc} alt={c.imageAlt} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full grid place-items-center text-primary/80 font-semibold">
                                        {c.title}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                                <p className="text-slate-600 mb-3 leading-relaxed">{c.summary}</p>
                                <Link to={c.link} className="inline-flex items-center gap-2 text-primary">
                                    Ver más
                                    <span aria-hidden>→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
