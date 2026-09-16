import { Heart, Quote } from 'lucide-react';
import React from 'react';

export const StoryWhySection: React.FC = () => {
  return (
    <section id="why-this-guide" className="py-16 sm:py-24 bg-[#0D2137] text-white relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#1A3A5E] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mb-6">
          <Quote className="w-6 h-6" />
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#E0A96D] block mb-2">
          Origem & Propósito
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-white">
          Por que este guia foi criado
        </h2>

        <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-white/90">
          <p className="font-medium text-white">
            Eu não sou terapeuta. Não sou psicóloga.
          </p>

          <p>
            Mas já estive presente em momentos que nunca esqueci.
          </p>

          <p>
            Vi pais olhando para o próprio filho em crise — no mercado, na escola, em casa — completamente travados. Sem saber se deviam falar, se deviam tocar, se deviam esperar. Vi o desespero de quem ama profundamente mas não sabe o que fazer naquele momento.
          </p>

          <div className="p-5 rounded-2xl bg-white/10 border-l-4 border-[#E0A96D] my-4 italic text-white/95 text-lg">
            “Meu cérebro desligou. Eu só fiquei olhando com o coração aos pedaços enquanto todos me julgavam.”
          </div>

          <p>
            Ouvi relatos de dezenas de mães que descreveram aquela sensação com exatamente as mesmas palavras. E percebi que o problema <strong>nunca foi falta de amor</strong>. Era falta de um roteiro claro para aquele momento específico — os primeiros minutos da crise sensorial.
          </p>

          <p>
            Existe muito conteúdo técnico e acadêmico sobre autismo na internet. Mas quase nada que respondesse à pergunta aflita que esses pais fazem na hora H: <em>“O que eu faço exatamente agora?”</em>
          </p>

          <p className="pt-2 text-white font-medium">
            Foi por isso que esse guia foi criado. Para ser a resposta prática que faltava — sem jargão clínico, sem teoria prolixa. Só o que fazer, passo a passo, do <strong>segundo 1 ao minuto 10</strong>.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E0A96D]/20 text-[#E0A96D] flex items-center justify-center">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <p className="text-xs sm:text-sm text-white/80">
            Criado com empatia profunda para trazer paz e acolhimento à sua casa.
          </p>
        </div>
      </div>
    </section>
  );
};
