import { Check, ShieldCheck } from 'lucide-react';
import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="guarantee-section" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white border border-[#EAE4DC] p-7 sm:p-10 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            <div className="w-20 h-20 rounded-3xl bg-[#1E8256]/15 text-[#1E8256] flex items-center justify-center flex-shrink-0 shadow-inner">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C85A32]">
                Risco Zero Para Você
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#1C2024]">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#525D6A] leading-relaxed">
                Baixe o material, leia no seu celular e comece a aplicar as orientações. Se por qualquer motivo você entender que o Guia não trouxe mais segurança para o seu dia a dia, basta solicitar o reembolso na plataforma em até 7 dias.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[#1E8256] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> 100% do valor devolvido
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Sem perguntas ou burocracia
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Processado com segurança pela Cakto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
