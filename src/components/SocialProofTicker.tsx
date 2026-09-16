import { CheckCircle2, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { RECENT_BUYERS } from '../data/landingData';

export const SocialProofTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Cycle every 8 seconds
    const cycleInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_BUYERS.length);
        setIsVisible(true);
      }, 500);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentBuyer = RECENT_BUYERS[currentIndex];

  return (
    <div
      id="social-proof-ticker"
      className={`fixed bottom-20 md:bottom-6 left-4 z-40 max-w-sm transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#E2DDD5] flex items-center gap-3 relative">
        <div className="w-9 h-9 rounded-full bg-[#EBF7F0] text-[#1E8256] flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-inner">
          <CheckCircle2 className="w-5 h-5 text-[#1E8256]" />
        </div>
        <div className="pr-4 text-left">
          <p className="text-xs font-semibold text-[#1C2024]">
            {currentBuyer.name} <span className="text-[#64748B] font-normal">({currentBuyer.city})</span>
          </p>
          <p className="text-[11px] text-[#475569] leading-tight">
            Acabou de baixar o <span className="font-semibold text-[#C85A32]">Guia da Crise Sensorial</span>
          </p>
          <span className="text-[10px] text-[#94A3B8] block mt-0.5">{currentBuyer.time}</span>
        </div>
        <button
          id="btn-dismiss-toast"
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-[#94A3B8] hover:text-[#475569] p-0.5 rounded-full"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
