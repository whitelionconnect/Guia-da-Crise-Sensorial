import { ArrowRight, CheckCircle2, Ear, Eye, Layers, RefreshCw, Shirt, Sparkles, Users } from 'lucide-react';
import React, { useState } from 'react';
import { CHECKOUT_URL } from '../data/landingData';

const TRIGGERS = [
  {
    id: 'auditory',
    icon: Ear,
    label: 'Barulho e Sons Altos',
    examples: 'Liquidificador, buzinas, shopping, sala de aula cheia ou música alta',
    resolution: 'No Guia, você aprende a barreira atenuadora de 60 segundos e como proteger o nervo vago sem usar a força.',
    guideModule: 'Módulo 2: Sobrecarga Auditiva & Atenuação Rápida',
  },
  {
    id: 'visual',
    icon: Eye,
    label: 'Luzes e Telas',
    examples: 'Luzes brancas de supermercado, telas piscando ou sol forte',
    resolution: 'Descubra como criar um túnel de repouso visual imediato e desarmar a hiperestimulação ocular.',
    guideModule: 'Módulo 2: Gatilhos Visuais & Ajuste Lumínico',
  },
  {
    id: 'tactile',
    icon: Shirt,
    label: 'Roupas, Toques e Etiquetas',
    examples: 'Costuras, tecidos sintéticos, cortes de cabelo ou abraços inesperados',
    resolution: 'Aprenda a pressão profunda regulatória e as técnicas de toque proprioceptivo aceito.',
    guideModule: 'Módulo 3: Hipersensibilidade Tátil & Conforto',
  },
  {
    id: 'routine',
    icon: RefreshCw,
    label: 'Mudança Repentina de Rotina',
    examples: 'Mudar de trajeto, trocar de atividade ou atrasos imprevistos',
    resolution: 'Como usar a previsibilidade relâmpago de 3 passos para evitar o pânico da quebra de expectativa.',
    guideModule: 'Módulo 1 & Bônus: Antecipação e Previsibilidade',
  },
  {
    id: 'crowd',
    icon: Users,
    label: 'Multidões e Lugares Cheios',
    examples: 'Festas de aniversário, mercados, aeroportos e parques',
    resolution: 'A rota de fuga digna: como retirar a criança de cena com respeito e sem parecer "fuga desordenada".',
    guideModule: 'Módulo 4: Gerenciamento em Público sem Constrangimento',
  },
];

interface TriggerDiagnosticQuizProps {
  onCtaClick?: () => void;
}

export const TriggerDiagnosticQuiz: React.FC<TriggerDiagnosticQuizProps> = ({ onCtaClick }) => {
  const [selectedId, setSelectedId] = useState<string>('auditory');

  const selectedTrigger = TRIGGERS.find((t) => t.id === selectedId) || TRIGGERS[0];

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="trigger-quiz" className="py-14 sm:py-20 bg-white border-b border-[#EAE4DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interativo • Personalizado
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1C2024] leading-tight">
            Qual é a situação mais difícil com o seu filho hoje?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#525D6A]">
            Selecione o principal gatilho abaixo para ver como o Guia da Crise Sensorial soluciona o seu caso específico:
          </p>
        </div>

        {/* Trigger buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {TRIGGERS.map((trigger) => {
            const IconComponent = trigger.icon;
            const isSelected = selectedId === trigger.id;
            return (
              <button
                key={trigger.id}
                id={`btn-trigger-${trigger.id}`}
                onClick={() => setSelectedId(trigger.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1C2024] text-white shadow-md scale-105'
                    : 'bg-[#F4EFEA] text-[#475569] hover:bg-[#EAE3DA] border border-[#E2DDD5]'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#F59E0B]' : 'text-[#64748B]'}`} />
                <span>{trigger.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tailored Solution Card */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#FFF9F5] to-[#FAF3EC] border-2 border-[#EAD8CB] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8D9CE]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center font-bold">
                <selectedTrigger.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                  Gatilho Selecionado
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#1C2024]">
                  {selectedTrigger.label}
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#1E8256]/10 text-[#1E8256] self-start sm:self-center">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solução no Protocolo
            </span>
          </div>

          <div className="mt-5 space-y-3">
            <div>
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                Cenários comuns:
              </span>
              <p className="text-sm text-[#475569] mt-0.5 font-medium">
                {selectedTrigger.examples}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#E8D9CE] shadow-2xs">
              <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider block mb-1">
                Como o Guia resolve:
              </span>
              <p className="text-sm sm:text-base text-[#1C2024] font-medium leading-relaxed">
                {selectedTrigger.resolution}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#1E8256]">
                <Layers className="w-3.5 h-3.5" />
                <span>Incluído no {selectedTrigger.guideModule}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#E8D9CE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-[#525D6A] text-center sm:text-left">
              Aprenda a prevenir esse gatilho hoje mesmo por apenas <strong>R$ 37,00</strong>
            </span>
            <button
              id="btn-quiz-cta"
              onClick={handleCta}
              className="relative overflow-hidden w-full sm:w-auto rounded-full bg-gradient-to-r from-[#12723A] via-[#16A34A] to-[#15803D] text-white px-7 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wide shadow-lg border-t border-emerald-300/40 border-b-2 border-[#0E582D] transition-all hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer animate-pulse-glow"
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
                <span>Acessar o Guia Agora — R$ 37,00</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
