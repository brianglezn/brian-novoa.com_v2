import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: '¿Por qué es importante tener un diseño web profesional?',
            answer: 'Tu sitio web es tu escaparate digital 24/7. Un diseño profesional genera confianza inmediata: el 75% de los usuarios juzgan la credibilidad de una empresa por su diseño web. Un sitio mal diseñado puede hacerte perder hasta el 40% de tus visitantes en los primeros 3 segundos.',
        },
        {
            question: '¿Qué incluye un diseño web completo?',
            answer: 'Diseño visual completo, desarrollo responsive, optimización SEO, formularios de contacto, integración con redes sociales, velocidad optimizada, y guías de uso. También incluyo 1 mes de soporte gratuito y actualizaciones menores sin costo adicional.',
        },
        {
            question: '¿Cuánto cuesta un diseño web profesional?',
            answer: 'Los precios varían según la complejidad del proyecto. Landing pages empiezan desde 400€. Incluyen diseño responsive, SEO básico y 1 mes de soporte. Sin costes ocultos.',
        },
        {
            question: '¿Cuánto tiempo tarda el desarrollo?',
            answer: 'Landing pages: 1-2 semanas. Sitios corporativos: 2-3 semanas. E-commerce: 3-4 semanas. Te mantengo informado del progreso con entregas semanales y revisiones en cada etapa del proceso.',
        },
        {
            question: '¿Necesito conocimientos técnicos para gestionar mi sitio?',
            answer: 'No, para nada. Si necesitas alguna actualización dispongo de un plan de mantenimiento mensual donde puedes solicitarme los cambios menores necesarios para actualizar el contenido.',
        },
        {
            question: '¿Mi sitio funcionará en móviles?',
            answer: 'Absolutamente. Todos mis diseños son móvil primero y responsive. Tu sitio se verá y funcionará perfectamente en smartphones, tablets y escritorio. El 60% del tráfico web viene de móviles, así que es fundamental.',
        },
        {
            question: '¿Ayudas con el posicionamiento en Google?',
            answer: 'Sí, incluyo optimización SEO básica en todos mis proyectos: estructura semántica, etiquetas meta, velocidad optimizada, imágenes comprimidas y marcado de esquema. Esto mejora significativamente tu posicionamiento en Google.',
        },
        {
            question: '¿Puedo ver el progreso durante el desarrollo?',
            answer: 'Por supuesto. Trabajo con entregas semanales donde puedes ver el progreso, hacer sugerencias y aprobar cada etapa. Mantengo comunicación constante y te muestro avances en tiempo real.',
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
                        Resolvemos las dudas más comunes sobre diseño web profesional
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
