import React from "react";
import { company } from "../data/company";
import { CloseIcon, ShieldCheckIcon } from "./icons";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-dark-900 border border-gold/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-dark-card-lg relative text-cream-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-cream-400 hover:text-gold transition-colors"
          aria-label="Fechar modal"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
            <ShieldCheckIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-cream-50">
              Política de Privacidade & Termos
            </h3>
            <span className="text-xs text-gold">Conformidade com a LGPD (Lei 13.709/2018)</span>
          </div>
        </div>

        <div className="space-y-4 text-sm text-cream-300 leading-relaxed">
          <p>
            A <strong>{company.name}</strong> tem o compromisso de respeitar a privacidade e a segurança dos dados de todos os seus clientes e visitantes.
          </p>

          <h4 className="font-bold text-cream-100 text-base pt-2">1. Coleta de Informações</h4>
          <p>
            Este site tem caráter informativo e de conveniência para agendamento de serviços. Não coletamos dados sensíveis através de formulários ocultos. As interações de agendamento ocorrem de forma direta e transparente pelo aplicativo oficial WhatsApp, onde você tem controle total das mensagens enviadas.
          </p>

          <h4 className="font-bold text-cream-100 text-base pt-2">2. Uso de Cookies e Métricas</h4>
          <p>
            Podemos utilizar cookies de sessão estritamente necessários para o funcionamento técnico da página e para salvar preferências visuais (como minimizar alertas). Nenhuma informação pessoal é comercializada com terceiros.
          </p>

          <h4 className="font-bold text-cream-100 text-base pt-2">3. Direitos do Titular (LGPD)</h4>
          <p>
            Você pode, a qualquer momento, solicitar a atualização, correção ou exclusão de qualquer dado de contato mantido em nossa lista de agendamentos entrando em contato pelo nosso canal oficial de atendimento.
          </p>

          <div className="pt-4 border-t border-dark-800 text-xs text-cream-500">
            Última atualização: {new Date().toLocaleDateString("pt-BR")} • {company.name} — {company.city}/{company.state}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gold text-dark-950 font-bold text-sm hover:bg-gold-hover transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
