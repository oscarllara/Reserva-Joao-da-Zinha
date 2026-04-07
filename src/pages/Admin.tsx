"use client";

import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Wine, ShoppingBag, Users, LogOut, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CatalogManager from '@/components/Admin/CatalogManager';
import OrderManager from '@/components/Admin/OrderManager';
import UserManager from '@/components/Admin/UserManager';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('catalog');

  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-900 text-stone-300 flex flex-col">
        <div className="p-6 border-b border-stone-800">
          <h1 className="text-xl font-serif font-bold text-white">Reserva Admin</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('catalog')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'catalog' ? 'bg-emerald-800 text-white' : 'hover:bg-stone-800'}`}
          >
            <BookOpen size={20} /> Catálogo
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'orders' ? 'bg-emerald-800 text-white' : 'hover:bg-stone-800'}`}
          >
            <ShoppingBag size={20} /> Pedidos
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'users' ? 'bg-emerald-800 text-white' : 'hover:bg-stone-800'}`}
          >
            <Users size={20} /> Usuários
          </button>
        </nav>

        <div className="p-4 border-t border-stone-800">
          <Button variant="ghost" className="w-full justify-start gap-3 text-stone-400 hover:text-white hover:bg-stone-800" onClick={() => window.location.href = '/'}>
            <LogOut size={20} /> Sair do Painel
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 capitalize">Gerenciar {activeTab === 'catalog' ? 'Catálogo' : activeTab === 'orders' ? 'Pedidos' : 'Usuários'}</h2>
            <p className="text-stone-500">Controle total sobre a sua Reserva.</p>
          </div>
          {activeTab === 'catalog' && (
            <Button className="bg-emerald-800 hover:bg-emerald-900 gap-2 rounded-xl">
              <Plus size={20} /> Novo Item
            </Button>
          )}
        </header>

        <div className="space-y-6">
          {activeTab === 'catalog' && <CatalogManager />}
          {activeTab === 'orders' && <OrderManager />}
          {activeTab === 'users' && <UserManager />}
        </div>
      </main>
    </div>
  );
};

export default Admin;