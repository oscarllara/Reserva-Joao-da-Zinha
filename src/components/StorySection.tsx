"use client";

import React from 'react';

const StorySection = () => {
  return (
    <section id="historia" className="py-24 bg-[#fdfbf7] px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop" 
              alt="Natureza preservada" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-emerald-900 text-white p-8 rounded-2xl hidden lg:block max-w-xs shadow-xl">
            <p className="text-sm italic font-light">
              "João não apenas viveu — ele cultivou. Não apenas existiu — ele preservou."
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight">
            Um homem que se tornou <span className="text-emerald-800 italic">paisagem</span>
          </h2>
          
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
            <p>
              Há homens que passam pelo mundo como o vento, sem deixar rastro. E há aqueles que, como João da Zinha, escolhem criar raízes profundas.
            </p>
            <p>
              Naturalista por essência, ele via em cada folha um poema e em cada tronco uma biblioteca de séculos. Entre silêncios e o som do riacho, ele desenhou este refúgio.
            </p>
            <p>
              Esta Reserva não nasceu de cercas ou limites, mas de um cuidado silencioso que atravessou décadas. Aqui, a natureza não é uma lembrança distante, mas uma presença viva que pulsa no ritmo do coração de quem a protegeu.
            </p>
          </div>

          <div className="pt-4">
            <div className="h-px w-24 bg-emerald-800/30 mb-6" />
            <p className="text-stone-500 italic">O legado de um homem que amava a terra.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;