import { ArrowRight, Lock } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { CHECKOUT_URL } from '../data/landingData';

interface StickyMobileBarProps {
  onCtaClick?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onCtaClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar when user scrolls past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  if (!visible) return null;

  return (
    <div
      id="sticky-mobile-cta"
      className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#EAE4DC] p-3 shadow-2xl md:hidden transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <span className="text-[10px] uppercase font-extrabold text-[#15803D] block leading-tight">
            Apenas
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-[#1C2024]">R$</span>
            <span className="text-2xl font-black text-[#12723A] leading-tight">37,00</span>
          </div>
          <span className="text-[10px] text-[#1E8256] font-semibold flex items-center gap-0.5">
            <Lock className="w-2.5 h-2.5" /> Acesso Imediato
          </span>
        </div>

        <button
          id="btn-sticky-mobile-cta"
          onClick={handleClick}
          className="relative flex-1 group overflow-hidden rounded-full bg-gradient-to-r from-[#12723A] via-[#16A34A] to-[#15803D] text-white px-4 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wide shadow-lg border-t border-emerald-300/40 border-b-2 border-[#0E582D] active:scale-95 active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer animate-pulse-glow"
        >
          {/* Shimmer sweep */}
          <span
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-shimmer"
            style={{ willChange: 'transform' }}
          />

          <span className="relative z-10 flex items-center gap-1.5 text-center">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span>Acessar Agora</span>
            <span className="bg-amber-300 text-stone-950 font-black px-1.5 py-0.5 rounded text-[11px]">R$ 37,00</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
};
