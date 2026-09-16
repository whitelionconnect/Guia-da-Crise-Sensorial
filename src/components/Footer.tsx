import { Heart, Lock, ShieldCheck } from 'lucide-react';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer-section" className="bg-[#0A1828] text-white/70 py-12 border-t border-white/10 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div>
            <span className="font-display text-lg font-bold text-white block">
              Guia da Crise Sensorial
            </span>
            <p className="text-white/60 mt-1 max-w-sm text-xs">
              Protocolo prático para acolher, proteger e desarmar colapsos sensoriais com dignidade e afeto.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
              <Lock className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Checkout Seguro Cakto</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Garantia 7 Dias</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-white/50 text-[11px]">
          <p>
            © {new Date().getFullYear()} Guia da Crise Sensorial. Todos os direitos reservados.
          </p>
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> para apoiar famílias atípicas em todo o Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};
