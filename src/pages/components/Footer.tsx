import { GitHub, Instagram, Linkedin } from 'react-feather';

export default function Footer() {
    return (
        <footer className="w-full bg-[#f7f7f7] text-[#0b2438] border-t border-gray-300">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl font-semibold text-[#206d7e]">Brian G. Novoa</h3>
                        <p className="mt-3 text-gray-600">
                            Full Stack Developer especializado en crear soluciones de software a medida que impulsan el
                            crecimiento empresarial.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-[#206d7e]">Servicios</h4>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>Aplicaciones Web Personalizadas</li>
                            <li>Sistemas de Gestión (CRM/ERP)</li>
                            <li>APIs & Integraciones</li>
                            <li>Diseño web</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-[#206d7e]">Contacto</h4>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>
                                <a href="mailto:brian@brian-novoa.com" className="hover:text-[#206d7e] transition-colors">
                                    brian@brian-novoa.com
                                </a>
                            </li>
                            <li>España</li>
                            <li className="pt-4">
                                <div className="flex items-center gap-4 text-gray-600">
                                    <a
                                        href="https://www.linkedin.com/in/brianglezn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn de Brian González Novoa"
                                        className="hover:text-[#206d7e] transition-colors no-underline-effect"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/brianglezn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub de Brian González Novoa"
                                        className="hover:text-[#206d7e] transition-colors no-underline-effect"
                                    >
                                        <GitHub size={20} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/brian.developer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram de Brian González Novoa"
                                        className="hover:text-[#206d7e] transition-colors no-underline-effect"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-300 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p>© 2025 BGN. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-6">
                        <a href="/legal/privacy" className="text-sm text-gray-600 hover:text-[#206d7e] transition-colors">
                            Política de Privacidad
                        </a>
                        <a href="/legal/terms" className="text-sm text-gray-600 hover:text-[#206d7e] transition-colors">
                            Términos y Condiciones
                        </a>
                        <a href="/legal/cookies" className="text-sm text-gray-600 hover:text-[#206d7e] transition-colors">
                            Política de Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
