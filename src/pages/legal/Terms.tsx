export default function Terms() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Términos y Condiciones</h1>
                <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceptación de los términos</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Al acceder y utilizar los servicios de BOCode, aceptas estar sujeto a estos términos y condiciones. Si
                            no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descripción de los servicios</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            BOCode proporciona servicios de desarrollo de software, incluyendo:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Desarrollo de aplicaciones web personalizadas</li>
                            <li>Desarrollo de aplicaciones móviles</li>
                            <li>Sistemas de gestión (CRM/ERP)</li>
                            <li>APIs e integraciones</li>
                            <li>Diseño web y UX/UI</li>
                            <li>Consultoría tecnológica</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Obligaciones del cliente</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">El cliente se compromete a:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Proporcionar información precisa y completa</li>
                            <li>Colaborar de manera efectiva durante el desarrollo</li>
                            <li>Realizar los pagos según lo acordado</li>
                            <li>Respetar los derechos de propiedad intelectual</li>
                            <li>No utilizar nuestros servicios para actividades ilegales</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propiedad intelectual</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Todos los derechos de propiedad intelectual del código desarrollado, diseños y documentación creados
                            específicamente para el cliente serán transferidos al cliente una vez completado el pago total del
                            proyecto.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Pagos y facturación</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Los términos de pago se definirán en cada propuesta y/o contrato, pudiendo variar según el tipo de
                            proyecto y la relación con el cliente. Algunas modalidades habituales incluyen:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Pago por hitos: distribución del presupuesto según entregables acordados</li>
                            <li>Pago 50% al inicio y 50% a la entrega cuando así se acuerde expresamente</li>
                            <li>Pago íntegro a la entrega cuando así se acuerde expresamente</li>
                            <li>Suscripción o mantenimiento mensual para evolutivos y soporte</li>
                            <li>Los pagos vencidos pueden resultar en la suspensión temporal del trabajo</li>
                            <li>Los precios incluyen IVA salvo que se indique lo contrario</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitación de responsabilidad</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            BOCode no será responsable de daños indirectos, incidentales, especiales o consecuentes que puedan
                            resultar del uso de nuestros servicios, incluyendo pero no limitado a pérdida de datos, pérdida de
                            beneficios o interrupción del negocio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modificaciones</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las
                            modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Ley aplicable</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta por los tribunales
                            competentes de Vigo, Galicia.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contacto</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Para cualquier pregunta sobre estos términos y condiciones, puedes contactarnos en:
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
