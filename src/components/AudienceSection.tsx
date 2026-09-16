import { CheckCircle2, HeartHandshake } from 'lucide-react';
import React from 'react';
import { AUDIENCE_TARGETS } from '../data/landingData';

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience-section" className="py-14 sm:py-20 bg-white border-y border-[#EDE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C85A32]">
            Público
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#1C2024]">
            Para quem é este guia?
          </h2>
          <p className="mt-3 text-base text-[#525D6A] leading-relaxed">
            Se você convive com uma criança que passa por crises de sobrecarga e se sente impotente sem saber o que fazer na hora, este material é para você.
          </p>
        </div>

        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE_TARGETS.map((target, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] p-5 shadow-2xs hover:bg-[#F5EFE7] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#C85A32]/15 text-[#C85A32] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-[15px] font-semibold text-[#1C2024]">
                {target}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#717E8C] flex items-center justify-center gap-2">
          <HeartHandshake className="w-4 h-4 text-[#C85A32]" />
          <span>Não é necessário nenhum tipo de formação técnica para aplicar com segurança.</span>
        </div>
      </div>
    </section>
  );
};
