import React from 'react';
import { CHECKOUT_URL } from '../data/landingData';
import { CtaButton } from './CtaButton';

interface FinalCtaSectionProps {
  onCtaClick?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  const handleCheckout = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="final-cta-section" className="py-16 sm:py-24 bg-[#F5EFE6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-[#1A2F5E] shadow-2xl text-white">
          {/* Emotional Banner Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <img
              src="/reconexao.jpg"
              alt="Mãe e filho abraçados em um momento calmo e afetuoso"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F5E] via-[#1A2F5E]/40 to-transparent" />
          </div>

          {/* Call to action copy */}
          <div className="p-6 sm:p-10 text-center relative z-10 -mt-8 sm:-mt-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Um plano para o próximo momento difícil.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
              Tenha o material disponível para consultar quando precisar, sem desespero, sem julgamentos e com total respeito ao cérebro do seu filho.
            </p>

            <div className="mt-7 w-full sm:max-w-lg mx-auto">
              <CtaButton
                id="btn-final-cta"
                onClick={handleCheckout}
                text="QUERO ACESSAR O PROTOCOLO AGORA"
                price="R$ 37,00"
                subtext="Pagamento Seguro Cakto • Garantia de 7 Dias"
                size="lg"
                pulseGlow={true}
                showMicroSecurity={false}
              />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-[#717E8C] max-w-xl mx-auto leading-relaxed">
          Aviso: Este material possui finalidade educativa e prática de apoio familiar e não substitui o diagnóstico, avaliação ou acompanhamento de médicos, terapeutas ocupacionais ou psicólogos.
        </p>
      </div>
    </section>
  );
};

