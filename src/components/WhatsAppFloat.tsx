import React, { useState } from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultUrl = buildWhatsAppLink(
    company.whatsappNumber,
    "Olá! Gostaria de agendar um horário na Dom Barba Club."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge on hover / attention */}
      <div
        className={`hidden md:flex items-center gap-2 bg-dark-900/95 backdrop-blur-md text-cream-100 text-xs font-semibold py-2 px-3.5 rounded-full border border-gold/40 shadow-dark-card transition-all duration-300 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Agende agora via WhatsApp</span>
      </div>

      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 fill-white group-hover:rotate-6 transition-transform duration-300" />

        {/* Status dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-dark-950" />
      </a>
    </div>
  );
}
