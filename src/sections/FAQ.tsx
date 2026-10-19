import React, { useState } from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { ChevronDownIcon, WhatsAppIcon } from "../components/icons";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const bookingUrl = buildWhatsAppLink(
    company.whatsappNumber,
    "Olá! Tenho uma dúvida sobre os serviços da barbearia que não encontrei no FAQ."
  );

  return (
    <section id="faq" className="py-24 bg-dark-900 border-b border-dark-800 relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
            Perguntas & Respostas
          </h2>
          <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
            Transparência em cada etapa do seu atendimento. Se precisar de algo a mais, nossa recepção está a um clique no WhatsApp.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4 reveal-init">
          {company.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-dark-950 border border-dark-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-dark-900/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-cream-100 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-dark-900 flex items-center justify-center text-gold shrink-0 border border-dark-800 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold text-dark-950" : ""
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-cream-400 leading-relaxed border-t border-dark-900 pt-4 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="text-center mt-12 reveal-init">
          <p className="text-sm text-cream-400 mb-4">
            Ainda tem alguma dúvida específica sobre o seu caso?
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-950 border border-gold/40 text-gold hover:bg-gold hover:text-dark-950 font-bold text-xs transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Falar com o Barbeiro pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
