import React, { useState, useMemo, useEffect, useCallback } from "react";
import { company, type GalleryItem } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { ScissorsIcon, WhatsAppIcon, CloseIcon, SparklesIcon } from "../components/icons";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: "todos", label: "Todos os Trabalhos" },
    { id: "fade", label: "Cortes Fade & Degradê" },
    { id: "barba", label: "Barboterapia" },
    { id: "classico", label: "Penteados Clássicos" },
    { id: "lounge", label: "Lounge & Ambiente" },
  ];

  const filteredGallery = useMemo(() => {
    if (activeFilter === "todos") return company.gallery;
    return company.gallery.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const selectedImage = selectedIndex !== null ? filteredGallery[selectedIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % filteredGallery.length);
  }, [selectedIndex, filteredGallery.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + filteredGallery.length) % filteredGallery.length);
  }, [selectedIndex, filteredGallery.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section id="galeria" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-dark-800 reveal-init">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
              <ScissorsIcon className="w-3.5 h-3.5" />
              <span>Galeria de Estilos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50">
              Galeria de Cortes & Atmosfera
            </h2>
            <p className="mt-3 text-cream-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Trabalhos executados em nossos clientes e detalhes do espaço projetado para o seu conforto.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-900 border border-dark-800 hover:border-gold/50 text-cream-300 hover:text-gold text-xs font-semibold transition-colors"
            >
              <span>Ver mais no Instagram</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 my-8 reveal-init">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id);
                setSelectedIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === tab.id
                  ? "bg-gold text-dark-950 shadow-gold-glow scale-105"
                  : "bg-dark-900 text-cream-300 border border-dark-800 hover:border-gold/40 hover:text-cream-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => {
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className={`reveal-init ${delayClass} card-interactive relative group rounded-2xl overflow-hidden cursor-pointer border border-dark-800 hover:border-gold/60 bg-dark-900 shadow-dark-card aspect-[4/3]`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes("photo-1503951914875-452162b0f3f1")) {
                      target.src = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80";
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-cream-50 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-dark-900/90 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <span>⊕</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in-up">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 p-2 text-cream-400 hover:text-gold transition-colors z-50"
            aria-label="Fechar visualização"
          >
            <CloseIcon className="w-6 h-6" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-900/80 border border-dark-700 text-cream-200 hover:text-gold hover:border-gold transition-colors"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-900/80 border border-dark-700 text-cream-200 hover:text-gold hover:border-gold transition-colors"
            aria-label="Próximo"
          >
            ›
          </button>

          <div className="max-w-3xl w-full bg-dark-950 border border-gold/30 rounded-2xl overflow-hidden shadow-dark-card-lg">
            <div className="relative aspect-[16/10] max-h-[65vh]">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-dark-900 border-t border-dark-800">
              <div>
                <span className="text-xs text-gold uppercase font-bold tracking-wider">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="font-display text-lg font-bold text-cream-50">
                  {selectedImage.title}
                </h3>
              </div>

              <a
                href={buildWhatsAppLink(
                  company.whatsappNumber,
                  `Olá! Gostei muito desse estilo "${selectedImage.title}" que vi na galeria do site. Gostaria de agendar um horário para fazer algo parecido!`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-amber-brand text-dark-950 font-bold text-xs shadow-gold-glow"
              >
                <WhatsAppIcon className="w-4 h-4 fill-dark-950" />
                <span>Quero Esse Estilo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
