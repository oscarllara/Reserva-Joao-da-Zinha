"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";

interface ProductFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const ProductForm = ({ initialData, onSubmit, onCancel }: ProductFormProps) => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: initialData || {
      name: '',
      price: 0,
      type: 'Livro',
      description: '',
      image: ''
    }
  });

  const type = watch('type');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome do Item</Label>
          <Input id="name" {...register('name', { required: true })} placeholder="Ex: Reserva Especial" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Tipo</Label>
          <Select onValueChange={(v) => setValue('type', v)} defaultValue={type}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Livro">Livro</SelectItem>
              <SelectItem value="Vinho">Vinho</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Preço (R$)</Label>
          <Input id="price" type="number" step="0.01" {...register('price', { required: true })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">URL da Imagem</Label>
          <Input id="image" {...register('image', { required: true })} placeholder="https://..." />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea id="description" {...register('description')} placeholder="Breve descrição do item..." />
      </div>

      <DialogFooter className="pt-4">
        <Button type="button" variant="ghost" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" className="bg-emerald-800 hover:bg-emerald-900 text-white">
          {initialData ? 'Salvar Alterações' : 'Adicionar ao Catálogo'}
        </Button>
      </DialogFooter>
    </form>
  );
};

export default ProductForm;