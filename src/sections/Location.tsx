import React, { useState } from "react";
import { company } from "../data/company";
import { MapPinIcon, ClockIcon, PhoneIcon, CheckCircleIcon } from "../components/icons";

export function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = `${company.address.street}, ${company.address.neighborhood}, ${company.address.city} - ${company.address.state}`;
    navigator.clipboard?.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    `${company.address.street}, ${company.address.city}, ${company.address.state}`
  )}`;

  return (
    <section id="localizacao" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <MapPinIcon className="w-3.5 h-3.5" />
            <span>Localização Privilegiada</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
            Como Chegar à Dom Barba
          </h2>
          <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
            Localizado no coração de {company.city}, em avenida de fácil acesso com estacionamento conveniado gratuito para nossos clientes.
          </p>
        </div>

        {/* Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Info Card (5 cols) */}
          <div className="reveal-from-left lg:col-span-5 bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-8 shadow-dark-card space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4 pb-6 border-b border-dark-800">
              <div className="w-10 h-10 rounded-xl bg-dark-950 border border-gold/40 flex items-center justify-center text-gold shrink-0 transition-transform duration-300 hover:scale-110">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gold uppercase tracking-wider font-bold block">
                    Endereço
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="text-xs px-2.5 py-1 rounded-full border border-dark-700 bg-dark-950 text-cream-300 hover:text-gold hover:border-gold/50 transition-all active:scale-95 flex items-center gap-1"
                    aria-label="Copiar endereço completo"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1 text-gold font-semibold animate-toast-slide">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-gold" />
                        <span>Copiado!</span>
                      </span>
                    ) : (
                      <span>Copiar</span>
                    )}
                  </button>
                </div>
                <p className="text-cream-100 font-semibold text-base">{company.address.street}</p>
                <p className="text-cream-400 text-sm">
                  {company.address.neighborhood} — {company.address.city}, {company.address.state}
                </p>
                <p className="text-xs text-cream-400 mt-2 bg-dark-950 p-2.5 rounded-lg border border-dark-800">
                  🅿️ {company.address.reference}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 pb-6 border-b border-dark-800">
              <div className="w-10 h-10 rounded-xl bg-dark-950 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div className="w-full">
                <span className="text-xs text-gold uppercase tracking-wider font-bold block mb-2">
                  Dias & Horários
                </span>
                <div className="space-y-1.5 text-xs">
                  {company.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-cream-300">
                      <span className="font-medium">{h.days}:</span>
                      <span className="text-gold font-mono">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 rounded-xl bg-gold text-dark-950 font-bold text-xs hover:bg-gold-hover transition-colors shadow-gold-glow"
              >
                Abrir no Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 rounded-xl bg-dark-950 border border-dark-700 hover:border-gold/50 text-cream-200 font-bold text-xs transition-colors"
              >
                Traçar Rota no Waze
              </a>
            </div>

          </div>

          {/* Right: Map / Visual Location Representation (7 cols) */}
          <div className="reveal-from-right lg:col-span-7 bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden shadow-dark-card-lg relative aspect-[16/10] min-h-[340px]">
            {/* Visual stylised map background */}
            <div className="absolute inset-0 bg-dark-950">
              <iframe
                title="Mapa de Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.123456789!2d-46.84!3d-23.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiUyA0NsKwNTAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 filter invert contrast-125 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Pin overlay card */}
            <div className="absolute top-6 left-6 bg-dark-950/95 backdrop-blur-md border border-gold/40 p-4 rounded-xl shadow-dark-card max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-display text-sm font-bold text-cream-50">{company.name}</span>
              </div>
              <p className="text-xs text-cream-400">{company.address.street}</p>
              <span className="text-[10px] text-gold font-semibold uppercase mt-1 block">Estacionamento Grátis</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
