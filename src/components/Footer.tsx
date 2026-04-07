"use client";

import React from 'react';
import { Instagram, Facebook, Mail, Lock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/constants/config';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h3 className="text-white text-xl font-serif mb-6">Reserva João da Zinha</h3>
          <p className="max-w-sm font-light leading-relaxed mb-6">
            Um santuário de preservação, cultura e memória no coração da natureza. Venha sentir o tempo passar de forma diferente.
          </p>
          <div className="flex items-start gap-3 text-sm group cursor-pointer" onClick={() => window.open(SITE_CONFIG.googleMapsUrl, '_blank')}>
            <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <p className="group-hover:text-white transition-colors">
              Estrada da Reserva, s/n<br />
              Zona Rural, Minas Gerais<br />
              <span className="text-emerald-500 text-xs font-medium uppercase tracking-wider">Ver no Google Maps</span>
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#historia" className="hover:text-white transition-colors">História</a></li>
            <li><a href="#paixoes" className="hover:text-white transition-colors">Vinhos & Livros</a></li>
            <li>
              <Link to="/admin" className="hover:text-white transition-colors flex items-center gap-2">
                <Lock size={12} /> Painel Administrativo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Siga-nos</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-800 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-800 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-800 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-xs tracking-widest uppercase">
        <p>© 2026 Reserva João da Zinha. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;