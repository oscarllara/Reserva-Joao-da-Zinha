"use client";

import React from 'react';
import { PRODUCTS } from '@/constants/config';
import { useStore } from '@/context/StoreContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { showSuccess } from '@/utils/toast';

const StoreSection = ({ type }: { type: 'books' | 'wines' }) => {
  const { addToCart } = useStore();
  const products = type === 'books' ? PRODUCTS.books : PRODUCTS.wines;

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {products.map(product => (
        <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl">
          <div className="aspect-[16/10] overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-stone-800 mb-2">{product.name}</h3>
            <p className="text-stone-500 text-sm font-light mb-4 line-clamp-2">{product.description}</p>
            <p className="text-lg font-medium text-emerald-800">R$ {product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button 
              className="w-full bg-stone-100 hover:bg-emerald-800 hover:text-white text-stone-700 border-none rounded-xl transition-colors"
              onClick={() => {
                addToCart(product);
                showSuccess(`${product.name} adicionado ao carrinho!`);
              }}
            >
              Adicionar ao Carrinho
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default StoreSection;