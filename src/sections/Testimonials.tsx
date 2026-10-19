import React from "react";
import { company } from "../data/company";
import { StarIcon, CheckCircleIcon } from "../components/icons";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-dark-950 border-b border-dark-800 relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <StarIcon className="w-3.5 h-3.5 text-gold" fill="#D4AF37" />
            <span>Avaliações Verificadas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
            Mais de 1.850 clientes avaliam nosso atendimento com nota 4.9 no Google. A satisfação deles é nossa melhor credencial.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-3 mt-6 px-4 py-2 rounded-full bg-dark-900 border border-gold/30 text-xs">
            <div className="flex items-center text-gold">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-gold" fill="#D4AF37" />
              ))}
            </div>
            <span className="font-bold text-cream-50">4.9 de 5.0 estrelas</span>
            <span className="text-cream-500">•</span>
            <span className="text-cream-400">Google Avaliações</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.testimonials.map((test, index) => {
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            return (
              <div
                key={test.id}
                className={`reveal-init ${delayClass} card-interactive flex flex-col justify-between bg-dark-900 p-6 rounded-2xl border border-dark-800 hover:border-gold/40 shadow-dark-card transition-all duration-300`}
              >
                <div>
                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gold gap-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-gold" fill="#D4AF37" />
                      ))}
                    </div>
                    <span className="text-[11px] text-cream-500 font-mono">{test.timeAgo}</span>
                  </div>

                  {/* Comment */}
                  <p className="text-cream-300 text-sm leading-relaxed mb-6 italic">
                    "{test.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-dark-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-sm font-bold text-cream-50">
                      {test.name}
                    </h4>
                    <span className="text-xs text-cream-400 block">{test.role}</span>
                  </div>

                  <span className="text-[11px] bg-dark-950 text-gold px-2.5 py-1 rounded-full border border-dark-800 font-medium">
                    {test.service}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
