"use client";

import React, { useState } from 'react';
import { Book, Wine as WineIcon } from 'lucide-react';
import StoreSection from './Store/StoreSection';

const Passions = () => {
  const [activeTab, setActiveTab] = useState<'books' | 'wines' | null>(null);

  return (
    <section id="paixoes" className="py-24 bg-stone-100 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Fragmentos de uma Vida</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            João habitava muitos mundos. Além das trilhas, ele encontrava refúgio nas páginas e celebrava o tempo em cada taça.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Livros */}
          <div 
            className={`group relative overflow-hidden rounded-3xl p-12 shadow-sm transition-all duration-500 cursor-pointer ${activeTab === 'books' ? 'bg-emerald-900 text-white' : 'bg-white text-stone-800'}`}
            onClick={() => setActiveTab(activeTab === 'books' ? null : 'books')}
          >
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${activeTab === 'books' ? 'bg-white/10 text-white' : 'bg-emerald-50 text-emerald-800'}`}>
                <Book size={32} />
              </div>
              <h3 className="text-3xl font-serif mb-6">A Biblioteca da Floresta</h3>
              <p className={`text-lg mb-8 font-light leading-relaxed ${activeTab === 'books' ? 'text-emerald-100' : 'text-stone-600'}`}>
                Nos livros, João viajava sem sair do lugar. Explore os títulos que moldaram seu pensamento.
              </p>
              <button className="font-semibold flex items-center gap-2">
                {activeTab === 'books' ? 'Fechar Acervo' : 'Explorar Acervo'} <span>{activeTab === 'books' ? '↑' : '↓'}</span>
              </button>
            </div>
          </div>

          {/* Vinhos */}
          <div 
            className={`group relative overflow-hidden rounded-3xl p-12 shadow-sm transition-all duration-500 cursor-pointer ${activeTab === 'wines' ? 'bg-red-950 text-white' : 'bg-white text-stone-800'}`}
            onClick={() => setActiveTab(activeTab === 'wines' ? null : 'wines')}
          >
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${activeTab === 'wines' ? 'bg-white/10 text-white' : 'bg-red-50 text-red-800'}`}>
                <WineIcon size={32} />
              </div>
              <h3 className="text-3xl font-serif mb-6">O Vinho e o Tempo</h3>
              <p className={`text-lg mb-8 font-light leading-relaxed ${activeTab === 'wines' ? 'text-red-100' : 'text-stone-600'}`}>
                No vinho, ele celebrava o essencial. Sabores que guardthink
The previous response was cut off while updating `src/components/Passions.tsx`. I need to complete that file and then update `src/components/Legacy.tsx` to include the `scroll-mt-20` class for consistent navigation behavior.

Looking at the previous output:
`<dyad-write path="src/components/Passions.tsx" description="Adicionando margem de rolagem na seção de Paixões.">`
...
`No vinho, ele celebrava o essencial. Sabores que guard`

I will continue from `guard` and finish the file, then proceed to the next file.

Wait, I should check if there are other files mentioned in the plan.
Plan:
1. `src/globals.css` (Done)
2. `src/components/Hero.tsx` (Done)
3. `src/components/StorySection.tsx` (Done)
4. `src/components/Passions.tsx` (Interrupted)
5. `src/components/Legacy.tsx` (Not started)

I will finish `Passions.tsx` and then write `Legacy.tsx`.am o silêncio da terra e a paciência das estações.
              </p>
              <button className="font-semibold flex items-center gap-2">
                {activeTab === 'wines' ? 'Fechar Rótulos' : 'Descobrir Rótulos'} <span>{activeTab === 'wines' ? '↑' : '↓'}</span>
              </button>
            </div>
          </div>
        </div>

        {activeTab && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-stone-200" />
              <h4 className="font-serif text-2xl text-stone-800">
                {activeTab === 'books' ? 'Nossa Biblioteca' : 'Nossa Adega'}
              </h4>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <StoreSection type={activeTab} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Passions;