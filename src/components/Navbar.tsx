"use client";

import React from 'react';
import { Book, Wine, TreePine, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TreePine className="text-emerald-800" size={28} />
          <span className="text-xl font-serif font-bold tracking-tight text-stone-800">
            Reserva João da Zinha
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-stone-600 font-medium">
          <a href="#historia" className="hover:text-emerald-800 transition-colors">Nossa História</a>
          <a href="#paixoes" className="hover:text-emerald-800 transition-colors">Vinhos & Livros</a>
          <a href="#legado" className="hover:text-emerald-800 transition-colors">O Legado</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-emerald-800 text-emerald-800 hover:bg-emerald-50">
            Visitar a Reserva
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;