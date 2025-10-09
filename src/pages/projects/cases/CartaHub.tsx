import CaseLayout from './CaseLayout';
import type { CaseStudy } from './CaseLayout';
import home from '../../../assets/projects/cartahub/home.png';
import menu from '../../../assets/projects/cartahub/menu.png';
import qr from '../../../assets/projects/cartahub/qr.png';
import restaurant from '../../../assets/projects/cartahub/restaurant.png';
import user from '../../../assets/projects/cartahub/user.png';

const cartaHubCase: CaseStudy = {
    slug: 'cartahub',
    title: 'CartaHub',
    subtitle:
        'Plataforma para digitalizar la carta de restaurantes: gestiona menús por categorías, crea QRs, soporta múltiples idiomas y comparte tu carta online en segundos.',
    client: 'CartaHub',
    duration: '2 meses (MVP)',
    team: 'BGN',
    industry: 'Hostelería / SaaS',
    image: home,
    websiteUrl: 'https://cartahub.es',
    results: [
        { value: '70%', label: 'Tiempo ahorrado', description: 'en cambios de carta y precios' },
        { value: 'QR', label: 'Menú digital', description: 'acceso inmediato desde cualquier mesa' },
        { value: 'Autogestión', label: 'Sin fricción', description: 'el restaurante controla su contenido' },
    ],
    challenge: {
        title: 'Actualizar menús rápido y sin errores',
        description:
            'Los restaurantes necesitan modificar platos, precios e idiomas con frecuencia sin depender de terceros ni procesos complejos.',
        points: [
            'Gestión de categorías y platos intuitiva',
            'Soporte para varios idiomas',
            'Compartir carta con QR y enlace público',
        ],
    },
    solution: {
        title: 'Panel claro para gestionar tu carta digital',
        description:
            'Una interfaz simple para añadir/editar platos, organizar categorías, configurar idiomas y generar QRs listos para imprimir.',
        points: [
            'CRUD de platos y categorías con etiquetas alérgenos',
            'Generación de QR con descarga y enlace corto',
            'URL pública personalizable y vista previa',
            'Control de idiomas por plato y por carta',
        ],
    },
    technologies: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'CSS Modules'] },
        { category: 'Backend', items: ['Node.js', 'Express'] },
        { category: 'Base de datos', items: ['MongoDB'] },
        { category: 'Infraestructura', items: ['Docker', 'CI/CD', 'Cloudinary'] },
    ],
};

export default function CartaHub() {
    const caseStudy = cartaHubCase;
    return (
        <CaseLayout
            caseStudy={caseStudy}
            screenshots={[
                { src: menu, alt: 'Gestión del menú' },
                { src: qr, alt: 'Generador de QR' },
                { src: restaurant, alt: 'Gestión del restaurante' },
                { src: user, alt: 'Ajustes y soporte' },
            ]}
            cta={{
                title: '¿Listo para digitalizar tu carta?',
                text: 'Conversemos sobre cómo puedo ayudarte a implementarlo en tu negocio',
                primary: { href: 'https://calendly.com/brianglezn/web-dev-30m', label: 'Agendar Consulta Gratuita' },
                secondary: { to: '/projects', label: 'Ver Más Casos' },
            }}
        />
    );
}
