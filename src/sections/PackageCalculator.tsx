import React, { useState, useMemo } from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { WhatsAppIcon, SparklesIcon, CheckCircleIcon, ClockIcon, BeerIcon, CrownIcon } from "../components/icons";

interface ComboOption {
  id: string;
  name: string;
  category: string;
  durationMinutes: number;
  price: number;
  tag?: string;
}

const COMBO_OPTIONS: ComboOption[] = [
  { id: "corte", name: "Corte Masculino & Visagismo", category: "Cabelo", durationMinutes: 45, price: 60, tag: "Mais Pedido" },
  { id: "barba", name: "Barboterapia com Toalha Quente", category: "Barba", durationMinutes: 40, price: 55, tag: "Experiência" },
  { id: "selagem", name: "Alinhamento Térmico & Selagem", category: "Tratamento", durationMinutes: 50, price: 85 },
  { id: "sobrancelha", name: "Design de Sobrancelha Masculina", category: "Olhar", durationMinutes: 15, price: 25 },
  { id: "camuflagem", name: "Camuflagem de Fios Brancos", category: "Coloração", durationMinutes: 25, price: 50 },
  { id: "hidratacao", name: "Hidratação Profunda Mentolada", category: "Tratamento", durationMinutes: 20, price: 40 },
  { id: "massagem", name: "Massagem Craniana Antiestresse", category: "Relax", durationMinutes: 15, price: 30, tag: "Revitalizante" },
  { id: "acabamento", name: "Contorno Milimétrico na Navalha", category: "Barba", durationMinutes: 20, price: 35 },
];

export function PackageCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["corte", "barba"]);

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = useMemo(() => {
    return COMBO_OPTIONS.filter((opt) => selectedIds.includes(opt.id));
  }, [selectedIds]);

  const totalMinutes = useMemo(() => {
    return selectedItems.reduce((acc, curr) => acc + curr.durationMinutes, 0);
  }, [selectedItems]);

  const rawPrice = useMemo(() => {
    return selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  }, [selectedItems]);

  // Desconto de combo inteligente: 10% de desconto a partir de 2 serviços
  const discountPercent = selectedItems.length >= 2 ? 10 : 0;
  const discountValue = Math.round((rawPrice * discountPercent) / 100);
  const finalPrice = rawPrice - discountValue;

  const durationFormatted = useMemo(() => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) return `${minutes} min`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}min`;
  }, [totalMinutes]);

  const whatsappMessage = useMemo(() => {
    if (selectedItems.length === 0) {
      return `Olá! Gostaria de montar um combo personalizado na ${company.name}.`;
    }
    const names = selectedItems.map((s) => s.name).join(" + ");
    return `Olá! Montei meu combo VIP no site:\n✂️ Serviços: ${names}\n⏱️ Duração estimada: ${durationFormatted}\n💰 Valor com desconto de combo: R$ ${finalPrice}\n\nGostaria de ver horários livres nesta semana!`;
  }, [selectedItems, durationFormatted, finalPrice]);

  const bookingUrl = buildWhatsAppLink(company.whatsappNumber, whatsappMessage);

  return (
    <section id="calculadora" className="py-24 bg-dark-950 border-b border-dark-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-brand/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <CrownIcon className="w-3.5 h-3.5 text-gold" />
            <span>Simulador de Estilo Personalizado</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
            Monte Seu Combo & Ganhe Vantagens
          </h2>
          <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
            Selecione os procedimentos que você deseja fazer na mesma sessão. Quanto mais serviços você combina, maior sua conveniência e desconto.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal-init">
          
          {/* Options Grid (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {COMBO_OPTIONS.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className={`flex flex-col justify-between text-left p-4 rounded-xl border transition-all duration-200 active:scale-[0.98] ${
                    isSelected
                      ? "border-gold bg-dark-900 shadow-gold-glow ring-1 ring-gold/40"
                      : "border-dark-800 bg-dark-900/60 hover:border-dark-700 hover:bg-dark-900"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2 w-full">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cream-400">
                      {item.category}
                    </span>
                    {item.tag && (
                      <span className="text-[10px] bg-gold/15 text-gold px-2 py-0.5 rounded-full font-bold">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-sm font-bold text-cream-50 mb-3">
                    {item.name}
                  </h4>

                  <div className="flex items-center justify-between text-xs w-full pt-2 border-t border-dark-800">
                    <div className="flex items-center gap-1 text-cream-400 font-mono">
                      <ClockIcon className="w-3.5 h-3.5 text-gold" />
                      <span>{item.durationMinutes} min</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gold font-mono">R$ {item.price}</span>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                          isSelected
                            ? "bg-gold border-gold text-dark-950 font-bold"
                            : "border-dark-700 bg-dark-800 text-transparent"
                        }`}
                      >
                        ✓
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Live Summary Card (5 columns) */}
          <div className="lg:col-span-5 bg-dark-900 border border-gold/30 rounded-2xl p-6 sm:p-7 shadow-dark-card-lg sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-dark-800 mb-5">
              <span className="font-display text-base font-bold text-cream-50 uppercase tracking-wider">
                Resumo da Sua Sessão
              </span>
              <span className="text-xs text-gold font-semibold">
                {selectedItems.length} {selectedItems.length === 1 ? "serviço" : "serviços"}
              </span>
            </div>

            {/* Selected items list */}
            {selectedItems.length === 0 ? (
              <div className="text-center py-8 text-cream-400 text-sm">
                Selecione ao menos um serviço ao lado para ver o cálculo.
              </div>
            ) : (
              <div className="space-y-3 mb-6 max-h-48 overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-dark-800/60">
                    <span className="text-cream-200 font-medium">{item.name}</span>
                    <span className="text-gold font-mono font-semibold">R$ {item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-2.5 pt-4 border-t border-dark-800 text-xs">
              <div className="flex items-center justify-between text-cream-400">
                <span className="flex items-center gap-1">
                  <ClockIcon className="w-3.5 h-3.5 text-gold" />
                  <span>Tempo total estimado:</span>
                </span>
                <span className="font-mono text-cream-200 font-bold">{durationFormatted}</span>
              </div>

              {discountPercent > 0 && (
                <div className="flex items-center justify-between text-emerald-400 font-semibold">
                  <span>Desconto de Combo ({discountPercent}%):</span>
                  <span>- R$ {discountValue}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-cream-400">
                <span className="flex items-center gap-1">
                  <BeerIcon className="w-3.5 h-3.5 text-amber-brand" />
                  <span>Chopp artesanal ou café:</span>
                </span>
                <span className="text-emerald-400 font-bold uppercase text-[10px] tracking-wider">
                  Cortesia inclusa
                </span>
              </div>

              <div className="pt-4 border-t border-dark-800 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-cream-400 block uppercase tracking-wider">
                    Total Final
                  </span>
                  {discountPercent > 0 && (
                    <span className="text-xs text-cream-500 line-through">R$ {rawPrice}</span>
                  )}
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-bold text-gold">
                    R$ {finalPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div className="mt-6 pt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-luxury-shimmer w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm shadow-gold-glow transition-all duration-200 ${
                  selectedItems.length === 0
                    ? "bg-dark-800 text-cream-500 pointer-events-none"
                    : "bg-gradient-to-r from-gold via-amber-brand to-gold text-dark-950 hover:shadow-gold-glow-lg hover:scale-[1.02] active:scale-95"
                }`}
              >
                <WhatsAppIcon className="w-4 h-4 fill-dark-950" />
                <span>Agendar Este Combo no WhatsApp</span>
              </a>
              <span className="text-[11px] text-cream-400 text-center block mt-2">
                Você escolhe o dia e horário diretamente no WhatsApp.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
