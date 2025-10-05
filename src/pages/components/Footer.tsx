import { GitHub, Instagram, Linkedin } from 'react-feather';

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-slate-200">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl font-semibold">Brian G. Novoa</h3>
                        <p className="mt-3 text-slate-400">
                            Full Stack Developer especializado en crear soluciones de software a medida que impulsan el
                            crecimiento empresarial.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Servicios</h4>
                        <ul className="mt-4 space-y-2 text-slate-400">
                            <li>Aplicaciones Web Personalizadas</li>
                            <li>Sistemas de Gestión (CRM/ERP)</li>
                            <li>APIs & Integraciones</li>
                            <li>Diseño web</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Contacto</h4>
                        <ul className="mt-4 space-y-2 text-slate-400">
                            <li>
                                <a href="mailto:brian@brian-novoa.com" className="hover:text-white">
                                    brian@brian-novoa.com
                                </a>
                            </li>
                            <li>España</li>
                            <li className="pt-4">
                                <div className="flex items-center gap-4 text-slate-400">
                                    <a
                                        href="https://www.linkedin.com/in/brianglezn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn de Brian González Novoa"
                                        className="hover:text-white no-underline-effect"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/brianglezn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub de Brian González Novoa"
                                        className="hover:text-white no-underline-effect"
                                    >
                                        <GitHub size={20} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/brian.developer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram de Brian González Novoa"
                                        className="hover:text-white no-underline-effect"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500">
                    © 2025 BGN. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
