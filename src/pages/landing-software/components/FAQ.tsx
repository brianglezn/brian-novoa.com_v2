import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: '¿Cuánto puedo ahorrar automatizando?',
            answer: 'El ahorro es exponencial desde el primer día. Mis clientes reducen costes operativos hasta un 80% y recuperan su inversión en solo 6-8 semanas. Una empresa mediana ahorra entre 60.000€ y 120.000€ anuales, mientras que las pequeñas empresas ven ahorros de 15.000€ a 50.000€. Además, cada hora liberada vale oro para tu crecimiento.',
        },
        {
            question: '¿Por qué automatizar mi empresa ahora?',
            answer: 'La automatización ya no es opcional, es supervivencia. Mientras tus competidores siguen perdiendo tiempo en tareas repetitivas, tú puedes liderar el mercado. Automatizar te da ventaja competitiva inmediata: reduce errores humanos, aumenta la satisfacción del cliente y te permite escalar sin límites. Es la diferencia entre crecer o quedarte atrás.',
        },
        {
            question: '¿Qué procesos puedo automatizar?',
            answer: 'Prácticamente todo lo que consume tu tiempo y recursos. Desde facturación automática y gestión de inventarios hasta atención al cliente 24/7 y reportes financieros instantáneos. No importa tu sector: retail, servicios, manufactura o tecnología. Analizo tu negocio completo y automatizo los procesos que más impacto tienen en tu rentabilidad.',
        },
        {
            question: '¿Cuánto cuesta automatizar mi empresa?',
            answer: 'Menos de lo que gastas mensualmente en procesos manuales. Mis soluciones empiezan desde 499€/mes y se pagan solas desde el primer mes. Sin costes ocultos, sin sorpresas. Ofrezco planes flexibles que crecen contigo.',
        },
        {
            question: '¿Cuánto tiempo tarda la implementación?',
            answer: 'La mayoría de automatizaciones están funcionando en menos de 2 semanas. Sistemas complejos como gestión completa de inventarios pueden tomar 4 semanas o más. Te mantengo informado del progreso en cada paso.',
        },
        {
            question: '¿Necesito conocimientos técnicos?',
            answer: 'Para nada. Mis soluciones están diseñadas para ser intuitivas y fáciles de usar. Te proporciono formación completa y soporte continuo.',
        },
        {
            question: '¿Qué pasa si mi empresa crece?',
            answer: 'Perfecto, es exactamente lo que queremos. Mis automatizaciones escalan contigo automáticamente. Si necesitas más funcionalidades o procesos adicionales, las añadimos sin problemas. Tu inversión inicial se multiplica con el crecimiento.',
        },
        {
            question: '¿Ofreces soporte técnico?',
            answer: 'Sí, soporte completo incluido. Resuelvo cualquier problema en menos de 24 horas y estoy disponible para consultas. También realizo mantenimiento preventivo para que todo funcione perfectamente.',
        },
        {
            question: '¿Puedo probar antes de comprometerme?',
            answer: 'Por supuesto. Ofrezco una consulta gratuita de 30 minutos donde analizo tus procesos y te muestro exactamente qué se puede automatizar. Sin compromiso, sin presión. Solo información valiosa para tu decisión.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-[#f7f7f7]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0b2438] mb-4">Preguntas Frecuentes</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Resolvemos las dudas más comunes sobre automatización empresarial
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center transition-all duration-300 hover:bg-gray-50"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="text-lg font-semibold text-[#0b2438] pr-4 flex-1">{faq.question}</h3>
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-300 flex-shrink-0 ${
                                        openIndex === index
                                            ? 'bg-[#206d7e] text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-[#206d7e] hover:text-white'
                                    }`}
                                >
                                    {openIndex === index ? '−' : '+'}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-8 pb-6 border-t border-gray-100">
                                    <p className="pt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
