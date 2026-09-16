import { ChevronDown, HelpCircle } from 'lucide-react';
import React, { useState } from 'react';
import { FAQS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-white border-t border-[#EDE7DF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E8256]/10 text-[#1E8256] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#1C2024]">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#525D6A]">
            Tudo o que você precisa saber antes de garantir o seu acesso.
          </p>
        </div>

        <div className="divide-y divide-[#EAE4DC] rounded-3xl bg-[#FAF8F5] border border-[#EAE4DC] px-5 sm:px-8 shadow-xs">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8256] rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#1C2024] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-[#E0D8CE] flex items-center justify-center text-[#1C2024] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1E8256] text-white border-[#1E8256]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-6 text-sm sm:text-[15px] text-[#525D6A] leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
