import elhabitodehabitarnos from '../../assets/projects/web-design/elhabitodehabitarnos.png';
import globalthermo from '../../assets/projects/web-design/globalthermo.png';
import labarveria from '../../assets/projects/web-design/labarveria.png';
import refrigeraciontransporte from '../../assets/projects/web-design/refrigeraciontransporte.png';
import annualReport from '../../assets/projects/profit-lost/annualReport.png';
import cartahubRestaurant from '../../assets/projects/cartahub/restaurant.png';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const navigate = useNavigate();
    const projects = [
        {
            title: 'ProfitLost',
            summary:
                'Plataforma de control financiero para personas y empresas que quieren entender y optimizar sus finanzas. Visualiza ingresos y gastos en tiempo real, genera reportes automáticos y toma decisiones basadas en datos.',
            link: '/projects/profit-lost',
            imageAlt: 'ProfitLost dashboard preview',
            imageSrc: annualReport,
            technologies: ['React', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Express', 'Docker', 'Cloudinary'],
        },
        {
            title: 'CartaHub',
            summary:
                'Sistema digital para la gestión completa de restaurantes. Crea menús con QR, administra pedidos y mantén tu carta actualizada en varios idiomas desde una plataforma sencilla e intuitiva.',
            link: '/carthub',
            imageAlt: 'CartaHub gestión del restaurante',
            imageSrc: cartahubRestaurant,
            technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Docker', 'Cloudinary'],
        },
        {
            title: 'LaBarveria',
            summary:
                'Sitio web moderno para una barbería en Villaviciosa. Diseñado para reflejar su estilo y facilitar la reserva de citas online de forma rápida y sencilla.',
            link: 'https://labarveria.com/',
            imageAlt: 'LaBarveria homepage',
            imageSrc: labarveria,
            technologies: [],
        },
        {
            title: 'ERN',
            summary:
                'Web corporativa para una empresa especializada en soluciones de refrigeración del transporte. Presenta servicios, proyectos y contacto con una imagen profesional y cuidada.',
            link: 'https://refrigeraciontransporte.es/',
            imageAlt: 'ERN homepage',
            imageSrc: refrigeraciontransporte,
            technologies: [],
        },
        {
            title: 'El hábito de habitarnos',
            summary:
                'Sitio web profesional para un proyecto de acompañamiento personal. Un espacio digital claro y cercano que transmite confianza y facilita el contacto con los clientes.',
            link: 'https://elhabitodehabitarnos.com/',
            imageAlt: 'El hábito de habitarnos homepage',
            imageSrc: elhabitodehabitarnos,
            technologies: [],
        },
        {
            title: 'Global Thermo',
            summary:
                'Página web corporativa para una empresa de refrigeración industrial. Muestra su experiencia, servicios y proyectos con un diseño limpio y orientado a la conversión.',
            link: 'https://globalthermo.es/',
            imageAlt: 'Global Thermo homepage',
            imageSrc: globalthermo,
            technologies: [],
        },
    ];

    return (
        <main className="w-full px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary cursor-pointer"
                        aria-label="Volver atrás"
                    >
                        <span aria-hidden>←</span>
                        Volver
                    </button>
                </div>
                <header className="mb-10 text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold">Proyectos</h1>
                    <p className="text-slate-600 mt-2">Aplicaciones y sitios web creados a medida para cada cliente.</p>
                </header>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p) => {
                            const isExternal = /^https?:\/\//.test(p.link);
                            return (
                                <article
                                    key={p.title}
                                    className="group rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 p-4 md:p-5 flex flex-col gap-4 w-full"
                                >
                                    <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden bg-slate-100">
                                        {p.imageSrc ? (
                                            <img src={p.imageSrc} alt={p.imageAlt} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full grid place-items-center text-primary/80 font-semibold">
                                                {p.title}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{p.summary}</p>
                                    </div>
                                    {isExternal ? (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            Ver sitio
                                            <span aria-hidden>↗</span>
                                        </a>
                                    ) : (
                                        <a href={p.link} className="inline-flex items-center gap-2 text-primary hover:underline">
                                            Ver más
                                            <span aria-hidden>→</span>
                                        </a>
                                    )}
                                    {Array.isArray(p.technologies) && p.technologies.length > 0 && (
                                        <ul className="flex flex-wrap gap-2">
                                            {p.technologies.map((t: string) => (
                                                <li key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
}
