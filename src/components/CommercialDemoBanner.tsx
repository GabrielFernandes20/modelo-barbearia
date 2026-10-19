import React, { useState } from "react";
import { company } from "../data/company";
import { SparklesIcon, CloseIcon, ChevronDownIcon } from "./icons";

export function CommercialDemoBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border-b border-gold/30 text-xs py-2 px-4 relative z-50 text-cream-200 shadow-md">
      <div className="container-editorial flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 text-[11px] font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3 h-3 text-gold" />
            Demonstração Comercial
          </span>
          <span className="hidden sm:inline text-cream-400">|</span>
          <span className="truncate">
            Este modelo de alta conversão para <strong>Barbearias & Lounges</strong> está pronto para personalização.
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gold hover:text-gold-hover underline underline-offset-2 font-medium flex items-center gap-1"
          >
            <span>{isOpen ? "Recolher info" : "Ver detalhes"}</span>
            <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-cream-500 hover:text-cream-200 p-1"
            aria-label="Dispensar aviso"
          >
            <CloseIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="container-editorial pt-3 pb-2 text-xs text-cream-300 border-t border-dark-800 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-dark-950/80 p-3 rounded-lg border border-dark-800">
              <span className="text-gold font-bold block mb-1">⚡ Totalmente Parametrizável</span>
              <p className="text-cream-400">
                Altere o nome da barbearia, serviços, fotos, endereço e número do WhatsApp no arquivo único <code className="text-gold">src/data/company.ts</code>.
              </p>
            </div>
            <div className="bg-dark-950/80 p-3 rounded-lg border border-dark-800">
              <span className="text-gold font-bold block mb-1">🎯 Foco em Agendamento Rápido</span>
              <p className="text-cream-400">
                Cada serviço e o simulador interativo de combos geram links diretos para o WhatsApp já com a mensagem pronta.
              </p>
            </div>
            <div className="bg-dark-950/80 p-3 rounded-lg border border-dark-800">
              <span className="text-gold font-bold block mb-1">✨ Animações de Alto Padrão</span>
              <p className="text-cream-400">
                Scroll reveal suave, slider interativo de antes e depois, luz ambiente âmbar e microinterações táteis.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
