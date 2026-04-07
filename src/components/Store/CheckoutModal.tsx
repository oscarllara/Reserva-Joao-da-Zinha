"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from '@/context/StoreContext';
import { SITE_CONFIG } from '@/constants/config';
import { Copy, Check } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const CheckoutModal = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  const { cart, total, clearCart } = useStore();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '' });

  const handleCopyPix = () => {
    navigator.clipboard.writeText(SITE_CONFIG.pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showSuccess("Chave PIX copiada!");
  };

  const handleFinish = () => {
    const itemsList = cart.map(item => `${item.quantity}x ${item.name}`).join(', ');
    const message = `Olá! Gostaria de finalizar meu pedido na Reserva João da Zinha.%0A%0A*Pedido:* ${itemsList}%0A*Total:* R$ ${total.toFixed(2)}%0A*Cliente:* ${formData.name}%0A*Endereço:* ${formData.address}%0A%0AJá realizei o PIX para a chave ${SITE_CONFIG.pixKey}.`;
    
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`, '_blank');
    clearCart();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-stone-50">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-stone-800">Finalizar Pedido</DialogTitle>
          <DialogDescription>
            Preencha seus dados e realize o pagamento via PIX.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input id="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Como devemos te chamar?" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Endereço de Entrega</Label>
            <Input id="address" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder="Rua, número, cidade..." />
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-sm text-emerald-800 font-medium mb-2">Pagamento via PIX</p>
            <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-emerald-200">
              <code className="text-xs font-mono text-stone-600">{SITE_CONFIG.pixKey}</code>
              <Button variant="ghost" size="sm" onClick={handleCopyPix}>
                {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
              </Button>
            </div>
            <p className="text-[10px] text-emerald-600 mt-2 uppercase tracking-wider">Valor Total: R$ {total.toFixed(2)}</p>
          </div>

          <Button 
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white h-12 rounded-xl"
            disabled={!formData.name || !formData.address || cart.length === 0}
            onClick={handleFinish}
          >
            Enviar Pedido via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;