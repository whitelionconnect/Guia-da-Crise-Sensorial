import {
  CheckCircle2,
  CreditCard,
  Gift,
  Lock,
  Plus,
  QrCode,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import React, { useState } from 'react';
import { CHECKOUT_URL } from '../data/landingData';
import { CtaButton } from './CtaButton';

interface PricingOfferSectionProps {
  onCheckout?: (bumpSelected: boolean) => void;
}

export const PricingOfferSection: React.FC<PricingOfferSectionProps> = ({ onCheckout }) => {
  const [includeBump, setIncludeBump] = useState(false);

  const basePrice = 37.0;
  const bumpPrice = 19.9;
  const totalPrice = includeBump ? basePrice + bumpPrice : basePrice;

  const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');

  const handleCheckoutClick = () => {
    // Trigger InitiateCheckout pixel if present
    if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'InitiateCheckout');
    }

    if (onCheckout) {
      onCheckout(includeBump);
    } else {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="comprar" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#FFFDFB] to-[#F5EFE6]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Condição Especial de Lançamento
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#1C2024]">
            Comece Hoje com o Guia da Crise Sensorial
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#525D6A]">
            Acesso vitalício instantâneo ao e-book, cards de emergência e aos dois bônus pelo menor valor já ofertado.
          </p>
        </div>

        {/* The Main Offer Box */}
        <div className="rounded-3xl bg-white border-2 border-[#E5DFD5] shadow-xl overflow-hidden">
          {/* Header highlight */}
          <div className="bg-[#1A2F5E] text-white p-6 sm:p-7 text-center relative overflow-hidden">
            <div className="inline-block bg-[#E0A96D] text-[#0A192F] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-xs">
              Pacote Completo Liberado
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Guia da Crise Sensorial + 2 Bônus Exclusivos
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-md mx-auto">
              Tudo pronto para baixar imediatamente no seu celular após o pagamento.
            </p>
          </div>

          {/* Included Items Checklist */}
          <div className="p-6 sm:p-8 bg-white space-y-3.5 border-b border-[#F0EBE3]">
            <div className="flex items-start gap-3 text-sm text-[#2D3748]">
              <CheckCircle2 className="w-5 h-5 text-[#1E8256] flex-shrink-0 mt-0.5" />
              <span><strong>E-book Guia da Crise Sensorial:</strong> O Protocolo de 3 Passos (Segundo 1 ao Minuto 10)</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#2D3748]">
              <CheckCircle2 className="w-5 h-5 text-[#1E8256] flex-shrink-0 mt-0.5" />
              <span><strong>Cards Visuais de Emergência:</strong> Para salvar na galeria do celular e consultar rápido</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#2D3748]">
              <CheckCircle2 className="w-5 h-5 text-[#1E8256] flex-shrink-0 mt-0.5" />
              <span><strong>Guia de Mapeamento de Gatilhos:</strong> Preveja o colapso sensorial antes que ele comece</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#2D3748]">
              <CheckCircle2 className="w-5 h-5 text-[#1E8256] flex-shrink-0 mt-0.5" />
              <span><strong>Checklist de Ambientes:</strong> Como proteger o quarto, a sala e saídas da sobrecarga</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#C85A32] bg-[#FAF3EF] p-2.5 rounded-xl font-medium">
              <Gift className="w-5 h-5 text-[#C85A32] flex-shrink-0 mt-0.5" />
              <span><strong>Bônus 1:</strong> Frases Prontas para a Crise (10 que acalmam e 10 que pioram)</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#C85A32] bg-[#FAF3EF] p-2.5 rounded-xl font-medium">
              <Gift className="w-5 h-5 text-[#C85A32] flex-shrink-0 mt-0.5" />
              <span><strong>Bônus 2:</strong> Checklist de Saída de Casa Sem Pânico (Mochila e Previsibilidade)</span>
            </div>
          </div>

          {/* ORDER BUMP: Kit de Rotina Visual (+R$ 9,90) */}
          <div className="p-5 sm:p-7 bg-[#FAF7F2] border-b border-[#EAE4DC]">
            <label
              htmlFor="bump-checkbox"
              className={`block cursor-pointer rounded-2xl border-2 transition-all p-4 sm:p-5 ${
                includeBump
                  ? 'border-[#1E8256] bg-[#F0FDF4] shadow-sm'
                  : 'border-dashed border-[#D2C8BC] hover:border-[#1E8256]/60 bg-white/70'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <input
                    id="bump-checkbox"
                    type="checkbox"
                    checked={includeBump}
                    onChange={(e) => setIncludeBump(e.target.checked)}
                    className="h-5 w-5 rounded mt-1 text-[#1E8256] focus:ring-[#1E8256] accent-[#1E8256] cursor-pointer"
                  />
                  <div>
                    <span className="inline-flex items-center gap-1 bg-[#1E8256]/15 text-[#1E8256] text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1">
                      <Plus className="w-3 h-3" /> Oferta Especial Opcional
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#1C2024]">
                      Sim, quero adicionar o Kit de Rotina Visual por apenas +R$ 19,90
                    </h4>
                    <p className="text-xs sm:text-sm text-[#525D6A] mt-1 leading-relaxed">
                      Cards visuais prontos para imprimir e colar na geladeira ou parede. Traz previsibilidade para a criança saber o que vem a seguir (banho, escovação, refeição, escola) e previne mais de 60% das crises diárias.
                    </p>
                  </div>
                </div>
                <span className="font-bold text-sm sm:text-base text-[#1E8256] whitespace-nowrap bg-emerald-100/70 px-2 py-1 rounded-lg">
                  + R$ 19,90
                </span>
              </div>
            </label>
          </div>

          {/* Price & CTA section */}
          <div className="p-6 sm:p-9 bg-gradient-to-br from-[#FAF5EE] to-[#F2E8DC] text-center">
            {/* Price Anchor */}
            <div className="bg-white/90 border border-[#E2DDD5] rounded-2xl p-3.5 mb-6 max-w-md mx-auto shadow-2xs">
              <p className="text-xs text-[#64748B]">
                Preço normal somando todos os materiais: <del className="font-semibold text-rose-700">R$ 147,00</del>
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#1E8256] mt-0.5">
                Economia de mais de R$ 110,00 na oferta especial de hoje
              </p>
            </div>

            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#15803D]">
              Apenas hoje por
            </p>

            <div className="mt-1 flex items-baseline justify-center gap-1.5">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#1C2024]">R$</span>
              <span className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-[#12723A] tracking-tight drop-shadow-xs">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#525D6A] mt-1">
              ou em até 4x de R$ {formatPrice(totalPrice / 4)} no cartão • Acesso Vitalício
            </p>

            {/* Big Action Button */}
            <div className="mt-6">
              <CtaButton
                id="btn-main-pricing-cta"
                onClick={handleCheckoutClick}
                text="QUERO ACESSAR O PROTOCOLO AGORA"
                price={`APENAS R$ ${formatPrice(totalPrice)}`}
                subtext="Clique para Liberar o Material Imediatamente no Celular"
                size="xl"
                pulseGlow={true}
                showMicroSecurity={false}
              />
            </div>

            {/* Security and methods trust line */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-[#525D6A]">
              <span className="flex items-center gap-1 font-medium">
                <QrCode className="w-3.5 h-3.5 text-[#1E8256]" />
                PIX Imediato
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1 font-medium">
                <CreditCard className="w-3.5 h-3.5 text-[#1E8256]" />
                Cartão de Crédito
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#1E8256]" />
                Ambiente Criptografado
              </span>
            </div>

            {/* Guarantee reminder */}
            <div className="mt-4 pt-4 border-t border-[#E5DFD5] flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#1E8256]" />
              <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
