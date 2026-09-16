import { CheckCircle2, Gift, Sparkles } from 'lucide-react';
import React from 'react';
import { BONUSES } from '../data/landingData';

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonuses-section" className="py-16 sm:py-24 bg-[#F8F6F2] border-b border-[#EAE4DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            Dois Materiais Extras Inclusos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#1C2024]">
            Bônus Exclusivos de Apoio Rápido
          </h2>
          <p className="mt-3 text-base text-[#525D6A]">
            Ao adquirir o Guia da Crise Sensorial hoje, você recebe gratuitamente esses dois materiais complementares:
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {BONUSES.map((bonus) => (
            <article
              key={bonus.id}
              className="relative rounded-3xl bg-white border border-[#E5DFD5] p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
            >
              {/* Free Tag */}
              <div className="absolute top-4 right-4 bg-[#1E8256] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Grátis Hoje
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] block mb-1 text-left">
                  {bonus.tag}
                </span>

                {/* Bonus Cover Image */}
                <div className="my-4 h-56 sm:h-64 flex items-center justify-center bg-gradient-to-b from-[#FAF8F5] to-[#F2EDE4] rounded-2xl p-4 overflow-hidden border border-[#EFE9E0]">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-bold text-xl text-[#1C2024] text-left">
                  {bonus.title}
                </h3>
                <p className="text-xs font-semibold text-[#64748B] text-left mt-0.5">
                  {bonus.subtitle}
                </p>
                <p className="mt-3 text-sm text-[#525D6A] leading-relaxed text-left">
                  {bonus.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 pt-4 border-t border-[#F0EBE3] text-left space-y-2">
                  {bonus.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3D4752] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8256] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Anchor */}
              <div className="mt-6 pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">
                  Preço individual normal: <del className="text-[#94A3B8]">{bonus.value}</del>
                </span>
                <span className="text-xs font-bold text-[#1E8256] uppercase tracking-wider">
                  Incluso no Pacote
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
