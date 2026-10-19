import React, { useState } from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { RazorIcon, ScissorsIcon, WhatsAppIcon, MapPinIcon, PhoneIcon, ClockIcon } from "./icons";
import { PrivacyModal } from "./PrivacyModal";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const bookingUrl = buildWhatsAppLink(
    company.whatsappNumber,
    "Olá! Gostaria de tirar uma dúvida sobre os serviços da Dom Barba Club."
  );

  return (
    <footer className="bg-dark-900 border-t border-dark-800 text-cream-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-dark-800">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-dark-950 border border-gold/40 flex items-center justify-center text-gold shadow-gold-glow">
                <RazorIcon className="w-5 h-5 text-gold" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-cream-50 uppercase">
                {company.name}
              </span>
            </div>
            <p className="text-sm text-cream-400 leading-relaxed">
              Tradição, navalha clássica, visagismo e a verdadeira experiência de cavalheiro. Mais do que cortar o cabelo, um momento para desacelerar e cuidar da sua imagem.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center text-cream-300 hover:text-gold hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center text-cream-300 hover:text-gold hover:border-gold transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-base font-bold text-cream-100 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Cardápio de Serviços
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-gold transition-colors">
                  Simulador de Combos VIP
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-gold transition-colors">
                  Diferenciais & Lounge Bar
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-gold transition-colors">
                  Portfólio & Cortes
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-gold transition-colors">
                  Avaliações 5 Estrelas
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-base font-bold text-cream-100 uppercase tracking-wider flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-gold" />
              <span>Horário de Atendimento</span>
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              {company.hours.map((h, i) => (
                <div key={i} className="flex flex-col border-b border-dark-800 pb-1.5">
                  <span className="text-cream-200 font-medium">{h.days}</span>
                  <span className="text-gold font-mono text-xs">{h.hours}</span>
                </div>
              ))}
              <span className="text-xs text-cream-500 pt-1">
                Atendimento com hora marcada para pontualidade absoluta.
              </span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-base font-bold text-cream-100 uppercase tracking-wider flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-gold" />
              <span>Onde Estamos</span>
            </h4>
            <div className="flex flex-col gap-2 text-sm text-cream-300">
              <p>{company.address.street}</p>
              <p>{company.address.neighborhood} — {company.address.city}/{company.address.state}</p>
              <p className="text-xs text-gold">{company.address.reference}</p>
              <div className="pt-2">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-hover font-semibold underline underline-offset-4"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>{company.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-500">
          <p>© {currentYear} {company.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-cream-300 transition-colors underline"
            >
              Política de Privacidade & Termos
            </button>
            <span className="text-dark-700">•</span>
            <span className="text-cream-400">Design Masculino Premium</span>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
