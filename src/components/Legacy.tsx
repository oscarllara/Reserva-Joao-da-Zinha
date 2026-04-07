"use client";

import React from 'react';
import { SITE_CONFIG } from '@/constants/config';

const Legacy = () => {
  return (
    <section id="legado" className="relative py-32 bg-emerald-950 text-white overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-100 to-transparent opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12 inline-block">
          <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-serif italic">JZ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-2">João da Zinha</h2>
          <p className="text-emerald-400/80 tracking-widest text-sm uppercase">
            16 de Fevereiro de 1964 — 07 de Setembro de 2024
          </p>
        </div>

        <blockquote className="text-2xl md:text-4xl font-serif italic mb-16 leading-relaxed text-stone-200">
          "Algumas vidas não terminam. Apenas se transformam em paisagem. E enquanto houver árvores crescendo aqui, ele nunca terá partido."
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div>
            <p className="text-3xl font-serif mb-1">{SITE_CONFIG.legacyStats.treesPlanted}</p>
            <p className="text-emerald-400/60 text-sm uppercase tracking-wider">Árvores Plantadas</p>
          </div>
          <div>
            <p className="text-3xl font-serif mb-1">{SITE_CONFIG.legacyStats.booksCataloged}</p>
            <p className="text-emerald-400/60 text-sm uppercase tracking-wider">Livros Catalogados</p>
          </div>
          <div>
            <p className="text-3xl font-serif mb-1">{SITE_CONFIG.legacyStats.memories}</p>
            <p className="text-emerald-400/60 text-sm uppercase tracking-wider">Memórias Vivas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;