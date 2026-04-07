"use client";

import React, { useState } from 'react';
import { TreePine, Menu, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartDrawer from './Store/CartDrawer';
import { SITE_CONFIG } from '@/constants/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#historia" onClick={() => setIsOpen(false)} className="hover:text-emerald-800 transition-colors">Nossa História</a>
      <a href="#paixoes" onClick={() => setIsOpen(false)} className="hover:text-emerald-800 transition-colors">Vinhos & Livros</a>
      <a href="#legado" onClick={() => setIsOpen(false)} className="hover:text-emerald-800 transition-colors">O Legado</a>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TreePine className="text-emerald-800" size={24} />
          <span className="text-lg md:text-xl font-serif font-bold tracking-tight text-stone-800">
            Reserva João da Zinha
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-stone-600 font-medium">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <CartDrawer />
          
          <Button 
            variant="outline" 
            className="hidden sm:flex border-emerald-800 text-emerald-800 hover:bg-emerald-50 rounded-xl h-9 md:h-10 gap-2"
            onClick={() => window.open(SITE_CONFIG.googleMapsUrl, '_blank')}
          >
            <MapPin size={16} /> Visitar a Reserva
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white flex flex-col gap-8 pt-16">
              <div className="flex flex-col gap-6 text-lg font-serif text-stone-800">
                <NavLinks />
              </div>
              <Button 
                className="bg-emerald-800 text-white rounded-xl h-12 gap-2"
                onClick={() => window.open(SITE_CONFIG.googleMapsUrl, '_blank')}
              >
                <MapPin size={18} /> Visitar a Reserva
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;