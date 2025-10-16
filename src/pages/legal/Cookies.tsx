export default function Cookies() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Política de Cookies</h1>
                <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. ¿Qué son las cookies?</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                            web. Nos ayudan a hacer que nuestro sitio web funcione de manera más eficiente y a proporcionar
                            información sobre cómo se utiliza el sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tipos de cookies que utilizamos</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies estrictamente necesarias</h3>
                                <p className="text-muted-foreground leading-relaxed mb-2">
                                    Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                    <li>Cookies de sesión para mantener la navegación</li>
                                    <li>Cookies de seguridad para proteger contra ataques</li>
                                    <li>Cookies de preferencias de idioma</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies de rendimiento</h3>
                                <p className="text-muted-foreground leading-relaxed mb-2">
                                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                    <li>Google Analytics (anónimo)</li>
                                    <li>Métricas de rendimiento del sitio</li>
                                    <li>Estadísticas de uso</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies de funcionalidad</h3>
                                <p className="text-muted-foreground leading-relaxed mb-2">
                                    Mejoran la funcionalidad del sitio web y personalizan tu experiencia.
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                    <li>Preferencias de usuario</li>
                                    <li>Configuraciones de accesibilidad</li>
                                    <li>Recordar formularios completados</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies de terceros</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Nuestro sitio web puede contener cookies de terceros, incluyendo:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>
                                <strong>Google Analytics:</strong> Para analizar el tráfico del sitio web
                            </li>
                            <li>
                                <strong>Google Fonts:</strong> Para cargar fuentes web
                            </li>
                            <li>
                                <strong>Hostinger:</strong> Para el hosting y análisis de rendimiento
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cómo gestionar las cookies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Puedes controlar y gestionar las cookies de varias maneras:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>
                                <strong>Configuración del navegador:</strong> La mayoría de navegadores te permiten rechazar o
                                aceptar cookies
                            </li>
                            <li>
                                <strong>Herramientas de privacidad:</strong> Utiliza herramientas como Ghostery o uBlock Origin
                            </li>
                            <li>
                                <strong>Modo incógnito:</strong> Navega en modo privado para limitar el seguimiento
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Instrucciones por navegador</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Chrome</h3>
                                <p className="text-muted-foreground text-sm">
                                    Configuración → Privacidad y seguridad → Cookies y otros datos del sitio
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Firefox</h3>
                                <p className="text-muted-foreground text-sm">
                                    Opciones → Privacidad y seguridad → Cookies y datos del sitio
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Safari</h3>
                                <p className="text-muted-foreground text-sm">
                                    Preferencias → Privacidad → Gestionar datos de sitios web
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Edge</h3>
                                <p className="text-muted-foreground text-sm">
                                    Configuración → Cookies y permisos del sitio → Cookies y datos almacenados
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Consecuencias de desactivar cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Si desactivas las cookies, algunas funcionalidades de nuestro sitio web pueden no funcionar
                            correctamente. Esto puede incluir la pérdida de preferencias personalizadas y una experiencia de
                            navegación menos fluida.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Actualizaciones de esta política</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Podemos actualizar esta política de cookies ocasionalmente. Te recomendamos revisar esta página
                            periódicamente para estar informado sobre cualquier cambio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contacto</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:
                        </p>
                        <div className="bg-card p-4 rounded-lg mt-4">
                            <p className="text-foreground font-medium">Email: brian@brian-novoa.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
