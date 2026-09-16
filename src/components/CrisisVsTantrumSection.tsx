import { AlertTriangle, CheckCircle, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import React from 'react';
import birraImg from '../assets/images/birra_comum_1789561109650.jpg';
import criseImg from '../assets/images/crise_sensorial_1789561128776.jpg';
import { TANTRUM_VS_MELTDOWN } from '../data/landingData';

export const CrisisVsTantrumSection: React.FC = () => {
  return (
    <section id="tantrum-vs-crisis" className="py-14 sm:py-20 bg-white border-y border-[#EDE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EBF3FF] text-[#1E56A0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Entendimento Fundamental
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1C2024] leading-tight">
            Seu filho <span className="text-[#C85A32] underline decoration-[#C85A32]/30">não está sendo malcriado</span>. Ele está em colapso sensorial.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525D6A] leading-relaxed">
            Tratar uma crise sensorial como se fosse birra comum é o motivo número 1 pelo qual o colapso dura 30, 40 minutos e termina em sofrimento para toda a família.
          </p>
        </div>

        {/* Side-by-side comparison cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
          {/* Tantrum Card (Birra) */}
          <div className="rounded-3xl bg-[#FBF9F7] border border-[#E8E2D8] p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1C2024]">Birra Comum</h3>
                    <p className="text-xs text-[#717E8C]">Comportamento intencional</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
                  Tem controle
                </span>
              </div>

              {/* Image representation for Birra Comum */}
              <div className="mt-4 overflow-hidden rounded-2xl border border-[#E8E2D8] bg-stone-100 aspect-[16/10] relative group shadow-xs">
                <img
                  src={birraImg}
                  alt="Criança em birra comum com comportamento intencional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-amber-800/80 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Birra Comportamental
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 text-white text-[11px] sm:text-xs font-medium">
                  Comportamento intencional para testar limites ou obter algo específico.
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {TANTRUM_VS_MELTDOWN.map((item, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-semibold text-[#3D4752] block text-xs uppercase tracking-wide mb-1">
                      {item.criteria}
                    </span>
                    <p className="text-[#5A6675] bg-white/70 rounded-xl p-3 border border-[#EAE4DC] leading-relaxed">
                      {item.tantrum}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D8] text-xs text-[#6E7B8B] italic">
              💡 A birra requer limites firmes e coerência, mas a criança permanece no controle biológico das suas ações.
            </div>
          </div>

          {/* Sensory Crisis Card (Crise Sensorial) */}
          <div className="rounded-3xl bg-gradient-to-br from-[#FFF8F5] to-[#FDF1EB] border-2 border-[#C85A32]/40 p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-orange-900/5 relative">
            <div className="absolute -top-3.5 right-6 bg-[#C85A32] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-white" />
              Onde o Guia atua
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F5DDD2]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#C85A32]/15 text-[#C85A32] flex items-center justify-center font-bold">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#C85A32]">Crise Sensorial (Overload)</h3>
                    <p className="text-xs text-[#8A4A2B]">Sobrecarga do sistema nervoso</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#C85A32]/10 text-[#C85A32] rounded-full border border-[#C85A32]/30">
                  Perda total de controle
                </span>
              </div>

              {/* Image representation for Crise Sensorial */}
              <div className="mt-4 overflow-hidden rounded-2xl border-2 border-[#C85A32]/40 bg-orange-100 aspect-[16/10] relative group shadow-sm">
                <img
                  src={criseImg}
                  alt="Criança em crise sensorial e sobrecarga neurológica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#C85A32] text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  Crise Sensorial (Meltdown)
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 text-white text-[11px] sm:text-xs font-medium">
                  Colapso involuntário: excesso de ruído, luz ou estímulos acumulados.
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {TANTRUM_VS_MELTDOWN.map((item, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-semibold text-[#8A3F1F] block text-xs uppercase tracking-wide mb-1">
                      {item.criteria}
                    </span>
                    <p className="text-[#3A2419] bg-white rounded-xl p-3 border border-[#F4C8B5] font-medium leading-relaxed shadow-2xs">
                      {item.meltdown}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F5DDD2] text-xs text-[#8A3F1F] font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#1E8256] flex-shrink-0" />
              <span>O Protocolo de 3 Passos foi desenvolvido exatamente para desarmar esta dor neurológica.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
