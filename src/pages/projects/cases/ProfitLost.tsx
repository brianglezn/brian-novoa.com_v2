import CaseLayout from './CaseLayout';
import type { CaseStudy } from './CaseLayout';
import annualReport from '../../../assets/projects/profit-lost/annualReport.png';
import dashHome from '../../../assets/projects/profit-lost/dashHome.png';
import plMovil from '../../../assets/projects/profit-lost/PL-movil.png';
import transactions from '../../../assets/projects/profit-lost/transactions.png';

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
    websiteUrl: 'https://profit-lost.com',
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
    const caseStudy = profitLostCase;
    return (
        <CaseLayout
            caseStudy={caseStudy}
            screenshots={[
                { src: dashHome, alt: 'Panel general ProfitLost' },
                { src: annualReport, alt: 'Reporte anual ProfitLost' },
                { src: transactions, alt: 'Vista de transacciones ProfitLost' },
                { src: plMovil, alt: 'Vista móvil ProfitLost' },
            ]}
            cta={{
                title: '¿Listo para transformar tu negocio?',
                text: 'Conversemos sobre cómo puedo ayudarte a alcanzar resultados similares',
                primary: { href: 'https://calendly.com/brianglezn/web-dev-30m', label: 'Agendar Consulta Gratuita' },
                secondary: { to: '/projects', label: 'Ver Más Casos' },
            }}
        />
    );
}
