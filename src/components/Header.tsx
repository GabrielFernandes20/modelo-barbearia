import React, { useState, useEffect } from "react";
import { company } from "../data/company";
import { buildWhatsAppLink } from "../data/whatsapp";
import { RazorIcon, WhatsAppIcon, MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links enxutos e diretos para o menu desktop (espaçamento nobre sem quebra de linha)
  const desktopNavLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Combos VIP", href: "#calculadora" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Galeria", href: "#galeria" },
    { label: "Sobre", href: "#sobre" },
  ];

  // Menu completo para navegação mobile
  const allNavLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Montar Combo VIP", href: "#calculadora" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Galeria de Cortes", href: "#galeria" },
    { label: "Nossa Barbearia", href: "#sobre" },
    { label: "Depoimentos", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
  ];

  const bookingUrl = buildWhatsAppLink(
    company.whatsappNumber,
    "Olá! Gostaria de agendar um horário na Dom Barba Club."
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-950/95 backdrop-blur-md border-b border-dark-800/80 py-3.5 shadow-dark-card"
          : "bg-gradient-to-b from-dark-950/95 to-transparent py-5"
      }`}
    >
      {/* Luxury Gold Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold via-amber-brand to-gold shadow-gold-glow transition-[width] duration-100 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="container-editorial flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group focus:outline-none">
          <div className="w-10 h-10 rounded-lg bg-dark-900 border border-gold/30 flex items-center justify-center text-gold group-hover:border-gold transition-colors duration-300 shadow-gold-glow">
            <RazorIcon className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-display text-lg font-bold tracking-wider text-cream-50 uppercase flex items-center gap-1.5">
              {company.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gold font-semibold">
              Barbearia & Lounge
            </span>
          </div>
        </a>

        {/* Desktop Navigation — Limpa, espaçada e sem quebra de linhas */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {desktopNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-300 hover:text-gold transition-colors duration-200 relative group py-1 whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-amber-brand text-dark-950 font-bold text-sm shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 fill-dark-950" />
            <span>Agendar Horário</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-cream-200 hover:text-gold transition-colors shrink-0"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/98 backdrop-blur-xl border-b border-dark-800 px-6 py-6 transition-all duration-300 animate-fade-in-up">
          <div className="flex items-center justify-between pb-3 border-b border-dark-800 mb-4">
            <span className="text-xs uppercase tracking-wider text-gold font-bold">Navegação</span>
            <div className="flex items-center gap-2 text-xs text-cream-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Aberto hoje até 20h</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {allNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-cream-200 hover:text-gold py-2 transition-colors border-b border-dark-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-2">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-luxury-shimmer w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold to-amber-brand text-dark-950 font-bold text-base shadow-gold-glow"
            >
              <WhatsAppIcon className="w-5 h-5 fill-dark-950" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
