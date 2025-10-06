import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinkBase =
        'no-underline-effect px-4 py-2.5 text-slate-700 hover:text-slate-900 transition-all duration-300 ease-out relative group';

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="h-16 sm:h-18 flex items-center justify-between">
                    <Link to="/" className="no-underline-effect inline-flex items-center gap-2 group">
                        <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-sky-900 via-sky-800 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-sky-700 transition-all duration-300">
                            Brian G. Novoa
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-slate-900 font-semibold' : ''}`}
                        >
                            {({ isActive }) => (
                                <>
                                    Inicio
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-sky-600 rounded-full" />
                                    )}
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-sky-600 rounded-full group-hover:w-8 transition-all duration-300" />
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-slate-900 font-semibold' : ''}`}
                        >
                            {({ isActive }) => (
                                <>
                                    Proyectos
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-sky-600 rounded-full" />
                                    )}
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-sky-600 rounded-full group-hover:w-8 transition-all duration-300" />
                                </>
                            )}
                        </NavLink>
                        <a
                            href="https://calendly.com/brianglezn/web-dev-30m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline-effect ml-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-sky-600 hover:from-primary/90 hover:to-sky-500 text-white px-5 py-2.5 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Agenda una llamada
                        </a>
                    </nav>

                    <button
                        aria-label="Abrir menú"
                        className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl border border-slate-200 hover:bg-gradient-to-r hover:from-primary/8 hover:to-sky-50 hover:border-primary/20 text-slate-700 hover:text-slate-900 transition-all duration-300 group"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {mobileOpen && (
                    <div className="lg:hidden pb-6 pt-2">
                        <div className="flex flex-col gap-3">
                            <NavLink
                                to="/"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `no-underline-effect px-4 py-3 flex items-center gap-3 group transition-all duration-300 ${
                                        isActive ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-sky-600 rounded-full shadow-sm" />
                                        )}
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            Inicio
                                        </span>
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/projects"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `no-underline-effect px-4 py-3 flex items-center gap-3 group transition-all duration-300 ${
                                        isActive ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-sky-600 rounded-full shadow-sm" />
                                        )}
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            Proyectos
                                        </span>
                                    </>
                                )}
                            </NavLink>
                            <a
                                href="https://calendly.com/brianglezn/web-dev-30m"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline-effect px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-sky-600 text-white text-center font-medium hover:from-primary/90 hover:to-sky-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                Agenda una llamada
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
