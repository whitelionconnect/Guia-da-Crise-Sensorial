import { ArrowRight, Lock, Sparkles, Zap } from 'lucide-react';
import React from 'react';

interface CtaButtonProps {
  id?: string;
  onClick?: () => void;
  text?: string;
  subtext?: string;
  price?: string;
  size?: 'md' | 'lg' | 'xl';
  pulseGlow?: boolean;
  className?: string;
  showMicroSecurity?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  id = 'cta-button',
  onClick,
  text = 'QUERO ACESSAR O PROTOCOLO AGORA',
  subtext = 'Acesso Imediato no Celular • Garantia de 7 Dias',
  price,
  size = 'lg',
  pulseGlow = true,
  className = '',
  showMicroSecurity = true,
}) => {
  const sizeClasses = {
    md: 'py-3.5 px-6 text-sm sm:text-base',
    lg: 'py-4 sm:py-5 px-7 sm:px-9 text-base sm:text-lg',
    xl: 'py-5 sm:py-6 px-8 sm:px-10 text-lg sm:text-xl',
  }[size];

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <button
        id={id}
        onClick={onClick}
        className={`group relative w-full max-w-xl cursor-pointer overflow-hidden rounded-2xl sm:rounded-full bg-gradient-to-r from-[#12723A] via-[#16A34A] to-[#15803D] text-white font-extrabold uppercase tracking-wide shadow-xl transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 border-t border-emerald-300/40 border-b-4 border-[#0E582D] ${sizeClasses} ${
          pulseGlow ? 'animate-pulse-glow' : ''
        }`}
        style={{
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.35)',
        }}
      >
        {/* Shimmer light sweep animation */}
        <span
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-shimmer"
          style={{ willChange: 'transform' }}
        />

        {/* Content layout */}
        <span className="relative z-10 flex flex-col items-center justify-center gap-0.5 sm:gap-1">
          <span className="flex items-center justify-center gap-2 sm:gap-3 text-center leading-tight">
            {/* Pulsing indicator icon */}
            <span className="relative flex h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-80" />
              <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-amber-400 shadow-xs" />
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center leading-tight">
              <span className="tracking-tight sm:tracking-normal drop-shadow-sm font-black">
                {text}
              </span>

              {price && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-300 text-stone-950 font-black text-sm sm:text-base tracking-normal shadow-sm border border-amber-400/40">
                  {price}
                </span>
              )}
            </div>

            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1.5" />
          </span>

          {subtext && (
            <span className="text-[11px] sm:text-xs font-semibold normal-case tracking-normal text-emerald-100/90 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{subtext}</span>
            </span>
          )}
        </span>
      </button>

      {showMicroSecurity && (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-[#525D6A] font-medium">
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
            Envio Automático por E-mail
          </span>
          <span className="text-stone-300">•</span>
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#16A34A]" />
            Checkout 100% Criptografado
          </span>
          <span className="text-stone-300">•</span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#16A34A]" />
            Satisfação Garantida
          </span>
        </div>
      )}
    </div>
  );
};
