import React, { useState } from "react";
import { company, type ServiceItem } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { ClockIcon, CheckCircleIcon, WhatsAppIcon, ScissorsIcon, SparklesIcon } from "../components/icons";

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todos os Serviços" },
    { id: "cabelo", label: "Cabelo & Visagismo" },
    { id: "barba", label: "Barboterapia" },
    { id: "combos", label: "Combos & VIP" },
    { id: "tratamentos", label: "Tratamentos & Selagem" },
  ];

  const filteredServices =
    activeCategory === "todos"
      ? company.services
      : company.services.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <ScissorsIcon className="w-3.5 h-3.5" />
            <span>Cardápio de Serviços</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
            Excelência da Raiz ao Fio
          </h2>
          <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
            Cada serviço é executado com ferramentas esterilizadas, cosméticos importados e respeito total ao seu tempo e perfil.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gold text-dark-950 shadow-gold-glow scale-105"
                    : "bg-dark-900 text-cream-300 border border-dark-800 hover:border-gold/40 hover:text-cream-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            const serviceBookingUrl = buildWhatsAppLink(
              company.whatsappNumber,
              `Olá! Gostaria de agendar o serviço "${service.name}" (R$ ${service.price}).`
            );

            return (
              <div
                key={service.id}
                className={`reveal-init ${delayClass} card-interactive flex flex-col justify-between bg-dark-900/90 rounded-2xl p-6 sm:p-7 border border-dark-800 hover:border-gold/50 shadow-dark-card hover:shadow-gold-glow transition-all duration-300 relative group`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-gold to-amber-brand text-dark-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <SparklesIcon className="w-3 h-3 text-dark-950" />
                    <span>{service.highlight}</span>
                  </div>
                )}

                <div>
                  {/* Top Bar: Title & Duration */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl font-bold text-cream-50 group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-cream-400 mb-4 pb-4 border-b border-dark-800">
                    <div className="flex items-center gap-1 text-gold font-mono">
                      <ClockIcon className="w-3.5 h-3.5" />
                      <span>{service.durationLabel}</span>
                    </div>
                    <span className="text-dark-700">•</span>
                    <span className="capitalize">{service.category}</span>
                  </div>

                  <p className="text-cream-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits checklist */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-cream-300">
                        <CheckCircleIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Price & Booking CTA */}
                <div className="pt-4 border-t border-dark-800 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-cream-400 block uppercase tracking-wider">
                      Valor
                    </span>
                    <span className="font-display text-2xl font-bold text-gold">
                      R$ {service.price}
                    </span>
                  </div>

                  <a
                    href={serviceBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-shimmer inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-dark-800 hover:bg-gold text-cream-200 hover:text-dark-950 font-bold text-xs border border-dark-700 hover:border-gold transition-all duration-200"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Agendar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom helper note */}
        <div className="text-center mt-12 text-xs text-cream-400 reveal-init">
          <span>Tem dúvidas sobre qual procedimento combina melhor com você? </span>
          <a
            href={buildWhatsAppLink(
              company.whatsappNumber,
              "Olá! Gostaria de uma recomendação visagista para o meu cabelo/barba."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline hover:text-gold-hover font-semibold ml-1"
          >
            Fale com nossos barbeiros visagistas pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
