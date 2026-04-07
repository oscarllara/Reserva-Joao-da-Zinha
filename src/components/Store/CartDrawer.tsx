"use client";

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import CheckoutModal from './CheckoutModal';

const CartDrawer = () => {
  const { cart, total, removeFromCart } = useStore();
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative border-stone-200 hover:bg-stone-50">
            <ShoppingCart size={20} className="text-stone-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-800 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-stone-50 w-full sm:max-w-md">
          <SheetHeader className="mb-8">
            <SheetTitle className="font-serif text-2xl">Seu Carrinho</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-[calc(100vh-200px)]">
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-stone-400 italic">
                  Seu carrinho está vazio como uma manhã de neblina.
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-white p-3 rounded-xl border border-stone-100">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-medium text-stone-800">{item.name}</h4>
                      <p className="text-sm text-stone-500">{item.quantity}x R$ {item.price.toFixed(2)}</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-400 hover:text-red-600 p-0 h-auto mt-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={14} className="mr-1" /> Remover
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-6 border-t border-stone-200">
              <div className="flex justify-between items-center mb-6">
                <span className="text-stone-500">Total</span>
                <span className="text-2xl font-serif text-stone-800">R$ {total.toFixed(2)}</span>
              </div>
              <Button 
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white h-12 rounded-xl"
                disabled={cart.length === 0}
                onClick={() => setCheckoutOpen(true)}
              >
                Finalizar Compra
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <CheckoutModal open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
};

export default CartDrawer;