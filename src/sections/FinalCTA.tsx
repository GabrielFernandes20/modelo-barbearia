import React from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { WhatsAppIcon, SparklesIcon, BeerIcon, ClockIcon, RazorIcon } from "../components/icons";

export function FinalCTA() {
  const bookingUrl = buildWhatsAppLink(
    company.whatsappNumber,
    "Olá! Gostaria de agendar meu horário para esta semana na Dom Barba Club."
  );

  return (
    <section className="py-24 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="ambient-float-1 absolute top-10 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="ambient-float-2 absolute bottom-10 right-1/4 w-96 h-96 bg-amber-brand/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-editorial relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-dark-950/90 border border-gold/40 p-8 sm:p-14 text-center shadow-dark-card-lg relative reveal-scale overflow-hidden">
          
          {/* Subtle gold corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/60 rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/60 rounded-br-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Horários Limitados para Esta Semana</span>
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream-50 leading-tight mb-6 animate-glow-text">
            Sua Melhor Versão Começa Na Próxima Cadeira.
          </h2>

          <p className="text-cream-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Chega de cortes apressados e esperas intermináveis. Garanta seu momento exclusivo de autocuidado com chopp artesanal e navalha afiada.
          </p>

          {/* Direct CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-gold via-amber-brand to-gold text-dark-950 font-extrabold text-base shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 fill-dark-950" />
              <span>Garantir Meu Horário no WhatsApp</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-cream-400 pt-6 border-t border-dark-800">
            <span className="reveal-init reveal-delay-1 flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-gold" />
              <span>Agendamento em 60 segundos</span>
            </span>
            <span className="reveal-init reveal-delay-2 flex items-center gap-1.5">
              <BeerIcon className="w-3.5 h-3.5 text-amber-brand" />
              <span>Chopp artesanal de boas-vindas</span>
            </span>
            <span className="reveal-init reveal-delay-3 flex items-center gap-1.5">
              <RazorIcon className="w-3.5 h-3.5 text-gold" />
              <span>Garantia de satisfação</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
