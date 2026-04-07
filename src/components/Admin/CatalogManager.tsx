"use client";

import React from 'react';
import { PRODUCTS } from '@/constants/config';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Book, Wine } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const CatalogManager = () => {
  const allProducts = [...PRODUCTS.books.map(b => ({ ...b, type: 'Livro' })), ...PRODUCTS.wines.map(w => ({ ...w, type: 'Vinho' }))];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
      <Table>
        <TableHeader className="bg-stone-50">
          <TableRow>
            <TableHead className="w-[100px]">Imagem</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
              </TableCell>
              <TableCell className="font-medium text-stone-800">{product.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className={product.type === 'Livro' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}>
                  {product.type === 'Livro' ? <Book size={12} className="mr-1" /> : <Wine size={12} className="mr-1" />}
                  {product.type}
                </Badge>
              </TableCell>
              <TableCell>R$ {product.price.toFixed(2)}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="icon" className="text-stone-400 hover:text-emerald-800">
                  <Edit size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-stone-400 hover:text-red-600">
                  <Trash2 size={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CatalogManager;