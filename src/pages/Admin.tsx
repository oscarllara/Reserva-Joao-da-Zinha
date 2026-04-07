"use client";

import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Wine, ShoppingBag, Users, LogOut, Plus, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import CatalogManager from '@/components/Admin/CatalogManager';
import OrderManager from '@/components/Admin/OrderManager';
import UserManager from '@/components/Admin/UserManager';
import ProductForm from '@/components/Admin/ProductForm';
import { showError, showSuccess } from '@/utils/toast';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('catalog');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isNewItemOpen, setIsNewItemOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === 'admin@admin.com' && loginData.password === 'Senha@123') {
      setIsAuthenticated(true);
      showSuccess("Bem-vindo ao painel, Administrador.");
    } else {
      showError("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleAddNewItem = (data: any) => {
    // Aqui no futuro chamaremos o Supabase
    showSuccess("Item adicionado com sucesso!");
    setIsNewItemOpen(false);
    // Forçamos um refresh ou atualizamos o estado do CatalogManager
    window.location.reload(); 
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-6">
        <Card className="w-full max-w-md border-none shadow-xl rounded-3xl overflow-hidden">
          <div className="bg-emerald-900 p-8 text-center text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <CardTitle className="text-2xl font-serif">Acesso Restrito</CardTitle>
            <CardDescription className="text-emerald-100/60">Painel Administrativo Reserva João da Zinha</CardDescription>
          </div>
          <CardContent className="p-8 bg-white">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="admin@admin.com" 
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="rounded-xl border-stone-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="rounded-xl border-stone-200"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white h-12 rounded-xl">
                Entrar no Painel
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                className="w-full text-stone-400 hover:text-stone-600"
                onClick={() => window.location.href = '/'}
              >
                Voltar para o Site
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 flex">
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
          <Button variant="ghost" className="w-full justify-start gap-3 text-stone-400 hover:text-white hover:bg-stone-800" onClick={() => setIsAuthenticated(false)}>
            <LogOut size={20} /> Sair do Painel
          </Button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 capitalize">Gerenciar {activeTab === 'catalog' ? 'Catálogo' : activeTab === 'orders' ? 'Pedidos' : 'Usuários'}</h2>
            <p className="text-stone-500">Controle total sobre a sua Reserva.</p>
          </div>
          {activeTab === 'catalog' && (
            <Button className="bg-emerald-800 hover:bg-emerald-900 gap-2 rounded-xl" onClick={() => setIsNewItemOpen(true)}>
              <Plus size={20} /> Novo Item
            </Button>
          )}
        </header>

        <div className="space-y-6">
          {activeTab === 'catalog' && <CatalogManager />}
          {activeTab === 'orders' && <OrderManager />}
          {activeTab === 'users' && <UserManager />}
        </div>

        <Dialog open={isNewItemOpen} onOpenChange={setIsNewItemOpen}>
          <DialogContent className="sm:max-w-[500px] bg-white">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Novo Item</DialogTitle>
              <DialogDescription>Adicione um novo livro ou vinho ao catálogo da Reserva.</DialogDescription>
            </DialogHeader>
            <ProductForm onSubmit={handleAddNewItem} onCancel={() => setIsNewItemOpen(false)} />
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Admin;