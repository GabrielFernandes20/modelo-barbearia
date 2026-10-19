import React from "react";
import { company } from "../data/company";
import { BeerIcon, RazorIcon, ClockIcon, SparklesIcon } from "../components/icons";

export function Differentials() {
  const iconMap: Record<string, React.ReactNode> = {
    visagismo: <SparklesIcon className="w-6 h-6 text-gold" />,
    lounge: <BeerIcon className="w-6 h-6 text-gold" />,
    "toalha-quente": <RazorIcon className="w-6 h-6 text-gold" />,
    pontualidade: <ClockIcon className="w-6 h-6 text-gold" />,
  };

  return (
    <section id="diferenciais" className="py-24 bg-dark-900 border-b border-dark-800 relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <span>O Padrão Dom Barba</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
            Por Que Somos a Escolha de Homens Exigentes
          </h2>
          <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
            Eliminamos o estresse do salão tradicional. Aqui você encontra precisão técnica, ambiente acolhedor e atendimento sem filas.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.differentials.map((diff, index) => {
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            return (
              <div
                key={diff.id}
                className={`reveal-init ${delayClass} card-interactive flex flex-col justify-between bg-dark-950 p-6 sm:p-7 rounded-2xl border border-dark-800 hover:border-gold/40 shadow-dark-card transition-all duration-300 relative group`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-extrabold text-gold/30 group-hover:text-gold transition-colors duration-300">
                      {diff.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center group-hover:border-gold/50 group-hover:shadow-gold-glow transition-all duration-300">
                      {iconMap[diff.id] || <SparklesIcon className="w-6 h-6 text-gold" />}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-cream-50 mb-3 group-hover:text-gold transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-cream-400 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-dark-900 flex items-center gap-1.5 text-xs text-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Padrão Exclusivo</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
