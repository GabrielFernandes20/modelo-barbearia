import React from "react";
import { useSeo } from "./hooks/useSeo";
import { useAutoScrollReveal } from "./hooks/useScrollReveal";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { PackageCalculator } from "./sections/PackageCalculator";
import { Differentials } from "./sections/Differentials";
import { Gallery } from "./sections/Gallery";
import { About } from "./sections/About";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Location } from "./sections/Location";

function App() {
  useSeo();
  useAutoScrollReveal();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark-950 text-cream-100 flex flex-col overflow-x-hidden selection:bg-gold selection:text-dark-950">
        {/* Accessibility skip link */}
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-dark-950 shadow-lg font-bold"
        >
          Pular para o conteúdo principal
        </a>

        <Header />

        <main className="flex-grow">
          <Hero />
          <Services />
          <PackageCalculator />
          <Differentials />
          <Gallery />
          <About />
          <Testimonials />
          <FAQ />
          <FinalCTA />
          <Location />
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </ErrorBoundary>
  );
}

export default App;
