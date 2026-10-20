import React from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { RazorIcon, ScissorsIcon, BeerIcon, SparklesIcon, WhatsAppIcon, CheckCircleIcon } from "../components/icons";

export function About() {
  const bookingUrl = buildWhatsAppLink(
    company.whatsappNumber,
    "Olá! Gostaria de agendar uma consultoria visagista com a equipe Dom Barba."
  );

  return (
    <section id="sobre" className="py-24 bg-dark-900 border-b border-dark-800 relative overflow-hidden">
      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Photographic Composition */}
          <div className="lg:col-span-5 relative reveal-from-left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-dark-950 shadow-dark-card-lg">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
                  alt="Interior da barbearia clássica com poltronas de couro vintage e iluminação âmbar"
                  className="w-full h-[520px] object-cover filter brightness-90 contrast-105 transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-gold/30 transition-transform duration-300 hover:-translate-y-1">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider block">
                    Nossa Missão
                  </span>
                  <p className="text-cream-200 text-sm mt-1">
                    "Proporcionar a cada homem um refúgio de autocuidado, autoestima e estilo que abre portas."
                  </p>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="ambient-float-1 absolute -bottom-6 -right-4 sm:-right-6 bg-dark-950 border border-gold/40 p-4 rounded-2xl shadow-dark-card text-center">
                <span className="font-display text-3xl font-extrabold text-gold animate-glow-text block">
                  {company.stats.experienceYears}
                </span>
                <span className="text-[11px] text-cream-300 uppercase tracking-wider">
                  De Tradição & Excelência
                </span>
              </div>

            </div>
          </div>

          {/* Right Column — Narrative & Principles */}
          <div className="lg:col-span-7 flex flex-col items-start reveal-from-right">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-4">
              <RazorIcon className="w-3.5 h-3.5 text-gold" />
              <span>Nossa Tradição</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-6">
              A Arte da Barbearia Clássica Elevada ao Mais Alto Nível
            </h2>

            <p className="text-cream-300 text-base leading-relaxed mb-6">
              A <strong>{company.name}</strong> nasceu para resgatar a nobreza dos rituais masculinos. Em um mundo acelerado e impessoal, criamos um espaço onde você não é apenas mais um número na fila.
            </p>

            <p className="text-cream-400 text-sm leading-relaxed mb-8">
              Aqui, a técnica afiada da navalha encontra a ciência moderna do <strong>visagismo facial</strong>. Avaliamos a curvatura da mandíbula, formato do crânio e ritmo do seu dia a dia para que você saia com um corte que valoriza seu rosto e é fácil de manter em casa.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="reveal-init reveal-delay-1 p-4 rounded-xl bg-dark-950 border border-dark-800 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-2 mb-1.5 text-gold font-bold text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-gold" />
                  <span>Biossegurança Total</span>
                </div>
                <p className="text-xs text-cream-400">
                  Lâminas descartáveis abertas na sua frente e toalhas higienizadas com vapor quente.
                </p>
              </div>

              <div className="reveal-init reveal-delay-2 p-4 rounded-xl bg-dark-950 border border-dark-800 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-2 mb-1.5 text-gold font-bold text-sm">
                  <BeerIcon className="w-4 h-4 text-amber-brand" />
                  <span>Lounge Bar Confortável</span>
                </div>
                <p className="text-xs text-cream-400">
                  Cerveja artesanal gelada, café espresso moído e sinuca para relaxar antes ou depois do corte.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-amber-brand to-gold text-dark-950 font-bold text-sm shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4 fill-dark-950" />
              <span>Conhecer de Perto • Agendar Horário</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
