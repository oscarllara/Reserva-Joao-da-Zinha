"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center scale-105 animate-pulse-slow"
        style={{ animationDuration: '20s' }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Onde a terra <span className="italic">respira</span> memórias
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 font-light italic mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          "E o tempo aprende a descansar entre as raízes de quem amou o chão que pisou."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105">
            Conheça a Reserva
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all">
            A História de João
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;