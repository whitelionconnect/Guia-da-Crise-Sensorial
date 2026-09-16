import { AlertOctagon, ArrowRight, CheckCircle2, Clock, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';
import React from 'react';
import cessacaoImg from '../assets/images/cessacao_estimulos_1789561151805.jpg';
import descompressaoImg from '../assets/images/descompressao_sensorial_1789561169893.jpg';
import reconexaoImg from '../assets/images/reconexao_afetiva_1789561190281.jpg';
import { CHECKOUT_URL, PROTOCOL_STEPS } from '../data/landingData';

interface ProtocolTimelineProps {
  onCtaClick?: () => void;
}

const STEP_MEDIA: Record<string, { img: string; tag: string; caption: string }> = {
  '01': {
    img: cessacaoImg,
    tag: 'Passo 1 • 0 a 60 Segundos',
    caption: 'Cessação imediata: corte de luzes, telas e ruídos para criar um refúgio seguro.',
  },
  '02': {
    img: descompressaoImg,
    tag: 'Passo 2 • 1 a 5 Minutos',
    caption: 'Descompressão sensorial: ancoragem e regulação profunda do sistema nervoso.',
  },
  '03': {
    img: reconexaoImg,
    tag: 'Passo 3 • 5 a 10 Minutos',
    caption: 'Reconexão afetiva: acolhimento, afeto seguro e prevenção do efeito rebote.',
  },
};

export const ProtocolTimelineSection: React.FC<ProtocolTimelineProps> = ({ onCtaClick }) => {
  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="protocol-steps" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E8256]/10 text-[#1E8256] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            Método Passo a Passo
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1C2024] leading-tight">
            O Protocolo de 3 Passos: Do Segundo 1 ao Minuto 10
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525D6A] leading-relaxed">
            Nada de teorias longas de 300 páginas que você nunca vai ler. É um roteiro cirúrgico desenhado para a hora do caos.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="mt-12 space-y-6">
          {PROTOCOL_STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white border border-[#E5DFD5] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Step number badge header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F0EBE3]">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center font-display text-xl font-bold flex-shrink-0 shadow-sm">
                    {step.number}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] flex items-center gap-1">
                      <Zap className="w-3 h-3" /> {step.timeRange}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-[#1C2024]">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1E8256]/10 text-[#1E8256] self-start sm:self-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Testado no Mundo Real
                </div>
              </div>

              {/* Step body with Image and Details */}
              <div className="mt-5 grid md:grid-cols-12 gap-6 items-center">
                {/* Step Image */}
                <div className="md:col-span-5 overflow-hidden rounded-2xl border border-[#E5DFD5] bg-stone-100 relative group aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] shadow-xs">
                  <img
                    src={STEP_MEDIA[step.number]?.img}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {STEP_MEDIA[step.number]?.tag}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 text-white text-[11px] sm:text-xs font-medium">
                    {STEP_MEDIA[step.number]?.caption}
                  </div>
                </div>

                {/* Step Content */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <p className="text-base text-[#475467] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Action vs Avoid cards */}
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] p-3.5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803D] block mb-0.5">
                          O Que Fazer (Ação Correta)
                        </span>
                        <p className="text-xs sm:text-sm text-[#166534] font-medium leading-snug">
                          {step.keyAction}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#FFF1F2] border border-[#FFE4E6] p-3.5 flex items-start gap-2.5">
                      <AlertOctagon className="w-4 h-4 text-[#E11D48] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#BE123C] block mb-0.5">
                          O Que Evitar (Piora Tudo)
                        </span>
                        <p className="text-xs sm:text-sm text-[#9F1239] leading-snug">
                          {step.avoidTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA box inside timeline */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#1A2F5E] to-[#0E1F38] text-white p-6 sm:p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left gap-6 shadow-xl">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
              <HeartHandshake className="w-4 h-4" /> Chega de tentar adivinhar no escuro
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              Tenha o passo a passo completo no seu celular por apenas R$ 37,00
            </h4>
            <p className="text-sm text-white/80 mt-1 max-w-xl">
              Acesso vitalício instantâneo, cards de bolso e os 2 bônus inclusos.
            </p>
          </div>
          <button
            id="btn-timeline-cta"
            onClick={handleCta}
            className="relative overflow-hidden mt-5 sm:mt-0 whitespace-nowrap rounded-full bg-gradient-to-r from-[#12723A] via-[#16A34A] to-[#15803D] text-white px-7 py-4 text-base font-extrabold uppercase tracking-wide shadow-xl border-t border-emerald-300/40 border-b-2 border-[#0E582D] transition-all hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer mx-auto sm:mx-0 animate-pulse-glow"
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-shimmer"
              style={{ willChange: 'transform' }}
            />

            <span className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span>Quero o Protocolo — R$ 37,00</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
