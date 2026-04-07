"use client";

import React, { useState } from 'react';
import { PRODUCTS } from '@/constants/config';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Book, Wine } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ProductForm from './ProductForm';
import { showSuccess, showError } from '@/utils/toast';

const CatalogManager = () => {
  const [products, setProducts] = useState([...PRODUCTS.books.map(b => ({ ...b, type: 'Livro' })), ...PRODUCTS.wines.map(w => ({ ...w, type: 'Vinho' }))]);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any>(null);

  const handleEdit = (product: any) => {
    setEditingProduct(product);
  };

  const handleDeleteClick = (product: any) => {
    setProductToDelete(product);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setProducts(prev => prev.filter(p => p.id !== productToDelete.id));
    setIsDeleteDialogOpen(false);
    showSuccess("Item removido com sucesso!");
  };

  const handleSave = (data: any) => {
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...data, id: p.id } : p));
      showSuccess("Item atualizado com sucesso!");
    } else {
      const newProduct = { ...data, id: Math.random().toString(36).substr(2, 9) };
      setProducts(prev => [newProduct, ...prev]);
      showSuccess("Novo item adicionado ao catálogo!");
    }
    setEditingProduct(null);
  };

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
          {products.map((product) => (
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
              <TableCell>R$ {Number(product.price).toFixed(2)}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="icon" className="text-stone-400 hover:text-emerald-800" onClick={() => handleEdit(product)}>
                  <Edit size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-stone-400 hover:text-red-600" onClick={() => handleDeleteClick(product)}>
                  <Trash2 size={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal de Edição/Criação */}
      <Dialog open={!!editingProduct} onOpenChange={(open) => !open && setEditingProduct(null)}>
        <DialogContent className="sm:max-w-[500px] bg-white">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Editar Item</DialogTitle>
            <DialogDescription>Altere as informações do produto no catálogo.</DialogDescription>
          </DialogHeader>
          <ProductForm 
            initialData={editingProduct} 
            onSubmit={handleSave} 
            onCancel={() => setEditingProduct(null)} 
          />
        </DialogContent>
      </Dialog>

      {/* Modal de Confirmação de Exclusão */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-red-600">Confirmar Exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja remover "{productToDelete?.name}"? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="ghost" onClick={() => setIsDeleteDialogOpen(false)}>Cancelar</Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={confirmDelete}>Remover Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CatalogManager;