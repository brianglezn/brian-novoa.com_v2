export default function Privacy() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Política de Privacidad</h1>
                <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Información que recopilamos</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Recopilamos información que nos proporcionas directamente, como cuando:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Te pones en contacto con nosotros a través de formularios o correo electrónico</li>
                            <li>Solicitas información sobre nuestros servicios</li>
                            <li>Contratas nuestros servicios de desarrollo de software</li>
                            <li>Navegas por nuestro sitio web (datos de uso anónimos)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Cómo utilizamos tu información</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos la información recopilada para:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Proporcionar y mejorar nuestros servicios de desarrollo de software</li>
                            <li>Responder a tus consultas y solicitudes</li>
                            <li>Comunicarnos contigo sobre proyectos y servicios</li>
                            <li>Mejorar la funcionalidad y experiencia de nuestro sitio web</li>
                            <li>Cumplir con obligaciones legales y contractuales</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Compartir información</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                            <li>Cuando sea necesario para proporcionar nuestros servicios</li>
                            <li>Con tu consentimiento explícito</li>
                            <li>Para cumplir con obligaciones legales</li>
                            <li>Para proteger nuestros derechos y la seguridad</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Seguridad de los datos</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                            personal contra acceso no autorizado, alteración, divulgación o destrucción.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Tus derechos</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">Tienes derecho a:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Acceder a tu información personal</li>
                            <li>Rectificar datos inexactos</li>
                            <li>Solicitar la eliminación de tus datos</li>
                            <li>Limitar el procesamiento de tus datos</li>
                            <li>Portabilidad de datos</li>
                            <li>Oponerte al procesamiento</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Puedes configurar tu
                            navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contacto</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
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
