import React, { useState, useRef, useCallback, useEffect } from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { WhatsAppIcon, SparklesIcon, RazorIcon } from "../components/icons";

interface Transformation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  beforeImg: string;
  afterImg: string;
}

const TRANSFORMATIONS: Transformation[] = [
  {
    id: "fade-visagismo",
    title: "Corte Fade & Harmonização Visagista",
    subtitle: "Ajuste de volume, transição suave na zero e valorização do maxilar",
    description:
      "Ajustamos a curvatura do degradê de acordo com o crânio e a barba, eliminando o aspecto pesado das laterais e trazendo uma presença imponente e moderna.",
    tag: "Degradê Visagista",
    beforeImg: "https://images.unsplash.com/photo-1517832606589-7929c3922966?auto=format&fit=crop&w=900&q=80",
    afterImg: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "barboterapia-escultura",
    title: "Barboterapia & Alinhamento na Navalha",
    subtitle: "Tratamento de foliculite, toalha quente e desenho milimétrico",
    description:
      "Abertura dos poros com vapor de ozônio, hidratação da raiz com óleos essenciais e raspagem sem atrito ou irritação. A barba ganha densidade visual e alinhamento cirúrgico.",
    tag: "Barboterapia",
    beforeImg: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    afterImg: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "combo-imperial-transf",
    title: "Transformação Completa: Combo Imperial",
    subtitle: "Cabelo alinhado, barba tratada e sobrancelha masculina equilibrada",
    description:
      "A renovação completa da imagem em uma única sessão de 75 minutos. Imagem profissional, confiante e pronta para fechar negócios ou eventos importantes.",
    tag: "Combo Imperial",
    beforeImg: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
    afterImg: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  },
];

export function BeforeAfter() {
  const [activeItem, setActiveItem] = useState<Transformation>(TRANSFORMATIONS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const bookingUrl = buildWhatsAppLink(
    company.whatsappNumber,
    `Olá! Vi o resultado do "${activeItem.title}" no site e gostaria de agendar um horário com o mesmo padrão.`
  );

  return (
    <section id="transformacao" className="py-24 bg-dark-900 border-y border-dark-800 relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <RazorIcon className="w-3.5 h-3.5" />
            <span>Antes e Depois Interativo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
            O Poder de Uma Imagem Alinhada
          </h2>
          <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
            Arraste o cursor para comparar a transformação de cada detalhe. O visagismo correto redefine sua presença.
          </p>

          {/* Procedure selector pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {TRANSFORMATIONS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeItem.id === item.id
                    ? "bg-gold text-dark-950 shadow-gold-glow scale-105"
                    : "bg-dark-950 text-cream-300 border border-dark-800 hover:border-gold/40 hover:text-cream-100"
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Component */}
        <div className="max-w-4xl mx-auto reveal-init">
          <div className="bg-dark-950 rounded-2xl border border-dark-800 overflow-hidden shadow-dark-card-lg p-4 sm:p-6">
            
            {/* Visual Slider Frame */}
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className={`relative w-full h-[360px] sm:h-[480px] rounded-xl overflow-hidden select-none border border-gold/20 transition-all ${
                isDragging ? "cursor-grabbing" : "cursor-ew-resize"
              }`}
            >
              {/* AFTER Image (Full background) */}
              <img
                src={activeItem.afterImg}
                alt={`Depois — ${activeItem.title}`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-dark-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 text-gold text-xs font-bold pointer-events-none">
                DEPOIS (Finalizado)
              </div>

              {/* BEFORE Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImg}
                  alt={`Antes — ${activeItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale contrast-125"
                  style={{
                    width: containerRef.current?.getBoundingClientRect().width || "100%",
                  }}
                />
                <div className="absolute top-4 left-4 bg-dark-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-dark-700 text-cream-300 text-xs font-bold pointer-events-none">
                  ANTES
                </div>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-cream-50 to-gold pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center pulse handle */}
                <div className="animate-pulse-handle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
                  <div className="flex items-center gap-0.5 text-xs font-bold">
                    <span>‹</span>
                    <span>›</span>
                  </div>
                </div>
              </div>

              {/* Instruction pill at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark-950/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-dark-800 text-[11px] text-cream-300 pointer-events-none flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5 text-gold" />
                <span>Arraste para comparar</span>
              </div>
            </div>

            {/* Transformation Info & Details */}
            <div className="mt-6 pt-6 border-t border-dark-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold font-bold">
                  {activeItem.subtitle}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-cream-50 mt-1 mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed max-w-2xl">
                  {activeItem.description}
                </p>
              </div>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold to-amber-brand text-dark-950 font-bold text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 fill-dark-950" />
                <span>Quero Esse Resultado</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
