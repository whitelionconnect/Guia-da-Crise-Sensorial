import { BookOpen, Check, Compass, Home, Sparkles } from 'lucide-react';
import React from 'react';
import { DELIVERABLES, GUIDE_TOPICS } from '../data/landingData';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Sparkles,
  Compass,
  Home,
};

export const ProductContentsSection: React.FC = () => {
  return (
    <section id="product-contents" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C85A32]">
            O que você vai receber
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#1C2024]">
            Tudo o que você precisa na ponta dos dedos
          </h2>
          <p className="mt-3 text-base text-[#525D6A] leading-relaxed max-w-2xl mx-auto">
            Materiais digitais em alta resolução pensados para consulta imediata na hora do sufoco e para organizar a rotina em casa.
          </p>
        </div>

        {/* 4 Deliverables Cards */}
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {DELIVERABLES.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || BookOpen;
            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 sm:p-7 border border-[#EAE4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center font-bold">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF4EF] text-[#C85A32] border border-[#EAD6CB]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-bold text-lg sm:text-xl text-[#1C2024]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#525D6A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F5EFE8] flex items-center gap-1.5 text-xs font-semibold text-[#1E8256]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Download instantâneo em PDF</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What you will find inside bullet list */}
        <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#FFF9F5] to-[#FBF4EE] border border-[#EADCCF] p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-[#E8D9CD]">
            <div className="w-9 h-9 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center font-bold text-sm">
              ★
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-[#1C2024]">
                Dentro do Guia Completo você vai encontrar:
              </h3>
              <p className="text-xs sm:text-sm text-[#717E8C]">
                10 respostas práticas para os momentos mais desgastantes do seu dia a dia
              </p>
            </div>
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3.5">
            {GUIDE_TOPICS.map((topic, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm sm:text-[14.5px] text-[#3D4752] leading-relaxed bg-white/70 p-3 rounded-2xl border border-[#EBE3D9]"
              >
                <div className="w-5 h-5 rounded-full bg-[#1E8256]/15 text-[#1E8256] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
