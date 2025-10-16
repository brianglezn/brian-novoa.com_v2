export default function Brian() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(32,109,126,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(32,109,126,0.3),transparent_50%)]" />
            <section className="relative z-10 w-full">
                <div className="mx-auto max-w-sm sm:max-w-md text-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <img
                            src="/brian.png"
                            alt="Brian G. Novoa"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-2 ring-[#206d7e]"
                            loading="eager"
                        />
                        <h1 className="text-xl md:text-2xl font-semibold text-foreground">Brian G. Novoa</h1>
                    </div>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground">Full Stack Developer</p>

                    <div className="mt-8 w-full space-y-3 md:space-y-4">
                        <a
                            href="https://bocode.es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full rounded-xl border border-gray-300 bg-white px-5 py-4 md:py-3 text-base md:text-lg text-foreground hover:border-[#206d7e] hover:text-[#206d7e] active:scale-[0.99] transition-all no-underline-effect"
                        >
                            BOCode – Desarrollo de software a medida
                        </a>
                        <a
                            href="https://www.instagram.com/brian.developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full rounded-xl border border-gray-300 bg-white px-5 py-4 md:py-3 text-base md:text-lg text-foreground hover:border-[#206d7e] hover:text-[#206d7e] active:scale-[0.99] transition-all no-underline-effect"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.linkedin.com/in/brianglezn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full rounded-xl border border-gray-300 bg-white px-5 py-4 md:py-3 text-base md:text-lg text-foreground hover:border-[#206d7e] hover:text-[#206d7e] active:scale-[0.99] transition-all no-underline-effect"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:brian@brian-novoa.com"
                            className="block w-full rounded-xl border border-gray-300 bg-white px-5 py-4 md:py-3 text-base md:text-lg text-foreground hover:border-[#206d7e] hover:text-[#206d7e] active:scale-[0.99] transition-all no-underline-effect"
                        >
                            brian@brian-novoa.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
