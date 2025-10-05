import { useNavigate, Link } from 'react-router-dom';
import annualReport from '../../../assets/projects/profit-lost/annualReport.png';
import dashHome from '../../../assets/projects/profit-lost/dashHome.png';
import plMovil from '../../../assets/projects/profit-lost/PL-movil.png';
import transactions from '../../../assets/projects/profit-lost/transactions.png';

type Result = { value: string; label: string; description: string };
type Challenge = { title: string; description: string; points: string[] };
type Solution = { title: string; description: string; points: string[] };
type TechnologyGroup = { category: string; items: string[] };
type Testimonial = { quote: string; author: string; position: string; company: string };

type CaseStudy = {
    slug: string;
    title: string;
    subtitle: string;
    client: string;
    duration: string;
    team: string;
    industry: string;
    image?: string;
    results: Result[];
    challenge: Challenge;
    solution: Solution;
    technologies: TechnologyGroup[];
    testimonial?: Testimonial;
};

const profitLostCase: CaseStudy = {
    slug: 'profit-lost',
    title: 'ProfitLost',
    subtitle:
        'Aplicación para tomar el control de tus finanzas personales: ve tus gastos e ingresos en tiempo real, crea presupuestos, fija metas de ahorro y decide con datos, no con suposiciones.',
    client: 'ProfitLost',
    duration: '8 meses (MVP)',
    team: 'BOCode',
    industry: 'Fintech / Gestión Financiera',
    image: annualReport,
    results: [
        { value: '20%', label: 'Más ahorro', description: 'tras 3 meses usando presupuestos y metas' },
        { value: '100%', label: 'Visibilidad', description: 'de tus gastos por categorías en tiempo real' },
        { value: '5m', label: 'Tiempo diario', description: 'para registrar, revisar y planificar tu dinero' },
        { value: 'Seguro', label: 'Tus datos', description: 'cifrados y bajo tu control' },
    ],
    challenge: {
        title: 'Ordenar el dinero del día a día sin complicaciones',
        description:
            'Necesitas ver en qué se va tu dinero, crear hábitos de ahorro y tomar mejores decisiones sin hojas de cálculo ni procesos complejos.',
        points: [
            'Clasificar gastos automáticamente por categorías',
            'Crear presupuestos mensuales fáciles de seguir',
            'Evitar sobre‑gastos con alertas simples y oportunas',
        ],
    },
    solution: {
        title: 'Una app clara para presupuestos, metas y control diario',
        description:
            'Experiencia simple para registrar, entender y planificar tu dinero con estadísticas útiles y recomendaciones según tus hábitos.',
        points: [
            'Panel con balance, tendencias y categorías',
            'Presupuestos y metas de ahorro con progreso',
            'Alertas de sobregasto y recordatorios',
            'Importación/registro rápido de movimientos',
        ],
    },
    technologies: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'CSS Modules'] },
        { category: 'Backend', items: ['NestJS', 'Express'] },
        { category: 'Base de datos', items: ['PostgreSQL'] },
        { category: 'Infraestructura', items: ['Docker', 'CI/CD', 'Cloudinary'] },
    ],
    testimonial: {
        quote: 'Por fin entiendo a dónde se va mi dinero. En pocos minutos a la semana mantengo el control y estoy ahorrando más que nunca.',
        author: 'Usuaria de ProfitLost',
        position: 'Finanzas personales',
        company: 'Cuenta individual',
    },
};

export default function ProfitLost() {
    const navigate = useNavigate();
    const caseStudy = profitLostCase;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-5" />
                <div className="max-w-5xl mx-auto relative">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors mb-8 group cursor-pointer"
                        aria-label="Volver"
                    >
                        <span className="h-4 w-4 group-hover:-translate-x-1 transition-transform" aria-hidden>
                            ←
                        </span>
                        Volver
                    </button>

                    <div className="mb-6">
                        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                            {caseStudy.industry}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{caseStudy.title}</h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl">{caseStudy.subtitle}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div>
                            <div className="text-sm text-slate-500 mb-1">Cliente</div>
                            <div className="font-semibold">{caseStudy.client}</div>
                        </div>
                        <div>
                            <div className="text-sm text-slate-500 mb-1">Duración</div>
                            <div className="font-semibold">{caseStudy.duration}</div>
                        </div>
                        <div>
                            <div className="text-sm text-slate-500 mb-1">Equipo</div>
                            <div className="font-semibold">{caseStudy.team}</div>
                        </div>
                        <div>
                            <div className="text-sm text-slate-500 mb-1">Industria</div>
                            <div className="font-semibold">{caseStudy.industry}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="px-6 -mt-6 md:-mt-8 mb-16 md:mb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                        <img
                            src={caseStudy.image || ''}
                            alt={caseStudy.title}
                            className="w-full h-[340px] md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="px-6 mb-16 md:mb-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Resultados Obtenidos</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {caseStudy.results.map((result) => (
                            <div
                                key={result.label}
                                className="p-6 text-center border rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{result.value}</div>
                                <div className="font-semibold mb-2">{result.label}</div>
                                <div className="text-sm text-slate-600">{result.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="px-6 mb-16 md:mb-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Vistas de la Aplicación</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                            <img src={dashHome} alt="Panel general ProfitLost" className="w-full h-64 md:h-72 object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                            <img src={annualReport} alt="Reporte anual ProfitLost" className="w-full h-64 md:h-72 object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                            <img
                                src={transactions}
                                alt="Vista de transacciones ProfitLost"
                                className="w-full h-64 md:h-72 object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white md:col-span-2">
                            <img src={plMovil} alt="Vista móvil ProfitLost" className="w-full h-80 md:h-96 object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section className="px-6 mb-16 md:mb-20 bg-slate-100/60 py-16 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{caseStudy.challenge.title}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.challenge.description}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-primary">Principales Desafíos:</h3>
                            <ul className="space-y-3">
                                {caseStudy.challenge.points.map((point) => (
                                    <li key={point} className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="h-2 w-2 rounded-full bg-rose-500" />
                                        </div>
                                        <span className="text-slate-700 leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="px-6 mb-16 md:mb-20 py-16 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="order-2 md:order-1">
                            <h3 className="font-semibold mb-4 text-primary">Características Implementadas:</h3>
                            <ul className="space-y-3">
                                {caseStudy.solution.points.map((point) => (
                                    <li key={point} className="flex gap-3">
                                        <span className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden>
                                            ✔
                                        </span>
                                        <span className="text-slate-700 leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{caseStudy.solution.title}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.solution.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="px-6 mb-16 md:mb-20 bg-slate-100/60 py-16 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Stack Tecnológico</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudy.technologies.map((tech) => (
                            <div key={tech.category} className="p-6 border rounded-xl">
                                <h3 className="font-semibold mb-4 text-primary">{tech.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item) => (
                                        <span
                                            key={item}
                                            className="inline-flex items-center rounded border px-2 py-1 text-sm text-slate-700"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {caseStudy.testimonial && (
                <section className="px-6 mb-16 md:mb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-white border border-primary/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-6 right-6 h-16 w-16 text-primary/10 select-none" aria-hidden>
                                “
                            </div>
                            <div className="relative">
                                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                                    "{caseStudy.testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-bold text-lg">
                                            {caseStudy.testimonial.author.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{caseStudy.testimonial.author}</div>
                                        <div className="text-sm text-slate-600">
                                            {caseStudy.testimonial.position} en {caseStudy.testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Conversemos sobre cómo puedo ayudarte a alcanzar resultados similares
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="https://calendly.com/brianglezn/web-dev-30m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl no-underline-effect"
                        >
                            Agendar Consulta Gratuita
                        </Link>
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 no-underline-effect"
                        >
                            Ver Más Casos
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
