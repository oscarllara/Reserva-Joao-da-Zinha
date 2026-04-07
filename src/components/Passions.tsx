"use client";

import React from 'react';
import { Book, Wine as WineIcon } from 'lucide-react';

const Passions = () => {
  return (
    <section id="paixoes" className="py-24 bg-stone-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Fragmentos de uma Vida</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            João habitava muitos mundos. Além das trilhas, ele encontrava refúgio nas páginas e celebrava o tempo em cada taça.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Livros */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-12 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Book size={120} className="text-emerald-900" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-emerald-800">
                <Book size={32} />
              </div>
              <h3 className="text-3xl font-serif text-stone-800 mb-6">A Biblioteca da Floresta</h3>
              <p className="text-stone-600 text-lg mb-8 font-light leading-relaxed">
                Nos livros, João viajava sem sair do lugar. Suas leituras eram como as árvores: cresciam lentas, mas alcançavam o céu. Explore os títulos que moldaram seu pensamento.
              </p>
              <button className="text-emerald-800 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Explorar Acervo <span>→</span>
              </button>
            </div>
          </div>

          {/* Vinhos */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-12 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <WineIcon size={120} className="text-red-900" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 text-red-800">
                <WineIcon size={32} />
              </div>
              <h3 className="text-3xl font-serif text-stone-800 mb-6">O Vinho e o Tempo</h3>
              <p className="text-stone-600 text-lg mb-8 font-light leading-relaxed">
                No vinho, ele celebrava o essencial. Sabores que guardam o silêncio da terra e a paciência das estações. Descubra a seleção especial da Reserva.
              </p>
              <button className="text-red-800 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Descobrir Rótulos <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions;