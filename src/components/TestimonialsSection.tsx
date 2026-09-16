import { CheckCircle2, MessageSquareQuote, Star } from 'lucide-react';
import React from 'react';
import { TESTIMONIALS } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-16 sm:py-24 bg-white border-b border-[#EDE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E8256]/10 text-[#1E8256] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Depoimentos Reais
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#1C2024]">
            Quem já aplicou sentiu a diferença
          </h2>
          <p className="mt-3 text-base text-[#525D6A] leading-relaxed">
            Veja o que dizem mães, pais e profissionais que transformaram os momentos mais caóticos em calma e acolhimento.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#FAF8F5] border border-[#EAE4DC] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Highlight punchy quote */}
                <p className="font-bold text-[#1C2024] text-sm sm:text-base mb-3 leading-snug">
                  "{t.highlight}"
                </p>

                {/* Full testimonial text */}
                <p className="text-xs sm:text-sm text-[#525D6A] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info with avatar */}
              <div className="mt-6 pt-4 border-t border-[#EAE4DC] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white font-bold flex items-center justify-center text-xs flex-shrink-0 shadow-2xs">
                  {t.avatarText}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-[#1C2024]">{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8256]" title="Compra Verificada" />
                  </div>
                  <p className="text-xs text-[#717E8C]">{t.role}</p>
                  <p className="text-[11px] text-[#94A3B8]">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate trust badge */}
        <div className="mt-10 max-w-xl mx-auto rounded-2xl bg-[#F4F9F5] border border-[#D1E7DD] p-4 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-[#166534] font-medium">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span>Média de satisfação 4.9 de 5 baseada em avaliações de clientes verificados.</span>
        </div>
      </div>
    </section>
  );
};
