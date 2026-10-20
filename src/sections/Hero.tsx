import React from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { RazorIcon, ScissorsIcon, BeerIcon, StarIcon, WhatsAppIcon, SparklesIcon, CheckCircleIcon } from "../components/icons";

export function Hero() {
  const bookingUrl = buildWhatsAppLink(
    company.whatsappNumber,
    "Olá! Gostaria de agendar um horário na Dom Barba Club."
  );

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient floating gold/amber lighting orbs */}
      <div className="ambient-float-1 absolute top-20 -left-20 w-96 h-96 bg-gold/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="ambient-float-2 absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-brand/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle vintage texture overlay / grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#221F1B_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill 1 — Stagger 1 */}
            <div className="hero-animate-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-6 shadow-gold-glow">
              <SparklesIcon className="w-3.5 h-3.5 text-gold" />
              <span>Cortes Visagistas & Barboterapia de Alto Padrão</span>
            </div>

            {/* Main Headline — Stagger 2 */}
            <h1 className="hero-animate-2 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream-50 leading-[1.12] mb-6 tracking-tight">
              Mais que um corte. <br />
              Uma experiência de <span className="text-gold-gradient">cavalheiro.</span>
            </h1>

            {/* Subtitle — Stagger 3 */}
            <p className="hero-animate-3 text-base sm:text-lg text-cream-300 leading-relaxed max-w-xl mb-8">
              Navalha clássica, toalha aquecida com vapor de ozônio e visagismo que harmoniza seu rosto ao seu estilo de vida. Desacelere da rotina em nosso lounge exclusivo com chopp artesanal gelado de cortesia.
            </p>

            {/* CTAs — Stagger 4 */}
            <div className="hero-animate-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-amber-brand to-gold text-dark-950 font-bold text-base shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5 fill-dark-950" />
                <span>Agendar Horário</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-dark-900/80 hover:bg-dark-850 text-cream-100 font-semibold text-base border border-dark-700 hover:border-gold/50 transition-all duration-300"
              >
                <ScissorsIcon className="w-4 h-4 text-gold" />
                <span>Ver Serviços & Preços</span>
              </a>
            </div>

            {/* Trust Badges — Stagger 5 */}
            <div className="hero-animate-5 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-dark-800/80 w-full text-xs text-cream-300">
              <div className="flex items-center gap-2">
                <BeerIcon className="w-4 h-4 text-gold shrink-0" />
                <span>Chopp & Café cortesia</span>
              </div>
              <div className="flex items-center gap-2">
                <RazorIcon className="w-4 h-4 text-gold shrink-0" />
                <span>Navalha & Toalha quente</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pontualidade britânica</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-4 h-4 text-gold shrink-0" />
                <span>4.9 no Google (+1.850)</span>
              </div>
            </div>

          </div>

          {/* Right Column — Visual Composition */}
          <div className="lg:col-span-5 relative hero-visual-animate">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/30 via-transparent to-amber-brand/30 blur-lg opacity-70 pointer-events-none" />

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-dark-900 shadow-dark-card-lg">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85"
                  alt="Barbeiro profissional realizando acabamento em barbearia clássica"
                  className="w-full h-[460px] object-cover object-center filter brightness-95 contrast-105"
                  loading="eager"
                />

                {/* Gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />

                {/* Bottom Card Info Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-dark-900/85 backdrop-blur-md border border-gold/25">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gold text-xs font-bold uppercase tracking-wider block">
                        Experiência Completa
                      </span>
                      <h3 className="font-display text-cream-50 text-base font-bold">
                        Corte Visagista & Barboterapia
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-cream-400 block">A partir de</span>
                      <span className="text-gold font-bold font-mono text-lg">R$ 55</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Social Proof Badge 1 */}
              <div className="absolute -top-5 -right-3 sm:-right-5 bg-dark-900/95 backdrop-blur-md border border-gold/40 p-3.5 rounded-2xl shadow-dark-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                  <StarIcon className="w-5 h-5 text-gold" fill="#D4AF37" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-cream-50 text-sm">4.9 / 5.0</span>
                    <span className="text-gold text-xs">★★★★★</span>
                  </div>
                  <span className="text-[11px] text-cream-400 block">+1.850 avaliações no Google</span>
                </div>
              </div>

              {/* Floating Badge 2 — Chopp cortesia */}
              <div className="ambient-float-2 absolute -bottom-5 -left-3 sm:-left-6 bg-dark-900/95 backdrop-blur-md border border-gold/40 py-2.5 px-4 rounded-2xl shadow-dark-card flex items-center gap-2.5">
                <BeerIcon className="w-5 h-5 text-amber-brand" />
                <div className="text-left">
                  <span className="text-cream-50 text-xs font-bold block">Chopp Artesanal</span>
                  <span className="text-[10px] text-gold uppercase tracking-wider">Cortesia para clientes</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Indicador animado de rolagem */}
        <div className="mt-10 lg:mt-14 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <a
            href="#servicos"
            aria-label="Rolar para explorar serviços"
            className="group flex flex-col items-center gap-2 text-cream-400 hover:text-gold transition-colors"
          >
            <span className="text-[11px] font-medium uppercase tracking-widest text-cream-400 group-hover:text-gold transition-colors">
              Role para explorar
            </span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-dark-700 group-hover:border-gold p-1 transition-colors">
              <div className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce-subtle" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
