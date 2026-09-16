import {
  Check,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import React, { useState } from 'react';
import { CHECKOUT_URL, HERO_CAROUSEL } from '../data/landingData';
import { CtaButton } from './CtaButton';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCheckout = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_CAROUSEL.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_CAROUSEL.length) % HERO_CAROUSEL.length);
  };

  const currentItem = HERO_CAROUSEL[activeIndex];

  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-gradient-to-b from-[#FFFBF7] via-[#FAF6F0] to-[#F5EFE6]">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(200,90,50,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-5">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Guia Prático para Mães & Pais Atípicos</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#1C2024] leading-[1.12] tracking-tight">
            Como atravessar a <span className="text-[#C85A32] italic">crise sensorial</span> do seu filho em menos de 10 minutos
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#525D6A] leading-relaxed max-w-2xl mx-auto">
            Sem travar, sem gritar e sem se desesperar com os olhares na rua. Um protocolo simples de 3 passos para desarmar a sobrecarga e devolver a calma à sua família.
          </p>

          {/* Key Quick Benefit Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#2E3842]">
            <span className="inline-flex items-center gap-1.5 bg-white/90 border border-[#E2DDD5] px-3 py-1.5 rounded-full shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Menos de 10 minutos
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 border border-[#E2DDD5] px-3 py-1.5 rounded-full shadow-2xs">
              <Check className="w-3.5 h-3.5 text-[#1E8256]" />
              Sem julgamentos ou termos difíceis
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 border border-[#E2DDD5] px-3 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              Cards rápidos para salvar no celular
            </span>
          </div>
        </div>

        {/* Carousel & Mockup Preview Card */}
        <div className="mt-9 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white/95 border border-[#E8E2D9] p-4 sm:p-7 shadow-xl shadow-stone-300/40">
            {/* Top Carousel Nav & Badges */}
            <div className="flex items-center justify-between gap-2 pb-4 mb-3 border-b border-[#F0EBE3]">
              <div className="flex items-center gap-2">
                <span className="bg-[#1E8256]/10 text-[#1E8256] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {currentItem.badge}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#4B5563] truncate">
                  {currentItem.label}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#6B7280]">
                <span>{activeIndex + 1} de {HERO_CAROUSEL.length}</span>
              </div>
            </div>

            {/* Carousel Image Stage */}
            <div className="relative h-64 sm:h-96 md:h-[440px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#FAF8F5] to-[#F2EDE4]">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                loading="eager"
                decoding="async"
                className="max-h-full max-w-full object-contain p-2 transition-all duration-300 drop-shadow-md"
              />

              {/* Prev / Next controls */}
              <button
                id="btn-carousel-prev"
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1C2024] shadow-md border border-[#E2DDD5] flex items-center justify-center transition hover:scale-105 active:scale-95"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                id="btn-carousel-next"
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1C2024] shadow-md border border-[#E2DDD5] flex items-center justify-center transition hover:scale-105 active:scale-95"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation Indicators */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {HERO_CAROUSEL.map((item, index) => (
                <button
                  key={item.src}
                  id={`btn-carousel-thumb-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-[#C85A32]'
                      : 'w-2.5 bg-[#D1C7BA] hover:bg-[#B8ACA0]'
                  }`}
                  aria-label={`Ver ${item.label}`}
                />
              ))}
            </div>

            {/* Hero Main Action Callout */}
            <div className="mt-6 pt-5 border-t border-[#F0EBE3] flex flex-col items-center">
              <CtaButton
                id="btn-hero-cta"
                onClick={handleCheckout}
                text="QUERO ACESSAR O PROTOCOLO AGORA"
                price="APENAS R$ 37,00"
                subtext="Acesso Vitalício Imediato • 2 Bônus Inclusos • 7 Dias de Garantia"
                size="lg"
                pulseGlow={true}
              />

              {/* Social rating line */}
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#4B5563]">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>4.9/5 estrelas por mais de 3.400 famílias atípicas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
