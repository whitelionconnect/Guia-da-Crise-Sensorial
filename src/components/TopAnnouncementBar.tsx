import { Clock, ShieldCheck, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const TopAnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 48 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatSec = timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

  return (
    <div
      id="top-announcement-bar"
      className="bg-[#0E1F38] text-white px-3 py-2 text-xs md:text-sm font-medium border-b border-[#1E3A5F] shadow-sm relative z-40"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#A5B4FC] font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" /> Oferta Especial de Lançamento:
          </span>
          <span className="text-white/90">
            Guia Completo + 2 Bônus por apenas <strong className="text-[#34D399] font-bold">R$ 37,00</strong>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white/80 text-xs">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span>Acesso Imediato no E-mail</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#1E3A5F] px-2.5 py-0.5 rounded-full text-amber-200 font-mono">
            <Clock className="w-3 h-3 text-amber-300" />
            <span>Preço promocional encerra em {timeLeft.minutes}:{formatSec}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
