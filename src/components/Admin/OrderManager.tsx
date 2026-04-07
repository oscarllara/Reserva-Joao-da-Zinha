"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const OrderManager = () => {
  // Mock de pedidos (será substituído pelo Supabase)
  const mockOrders = [
    { id: 'ORD-001', customer: 'Maria Silva', items: '2x Reserva João da Zinha', total: 240.00, status: 'Pendente', date: '07/04/2026' },
    { id: 'ORD-002', customer: 'José Santos', items: '1x O Silêncio das Árvores', total: 45.00, status: 'Concluído', date: '06/04/2026' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
      <Table>
        <TableHeader className="bg-stone-50">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Itens</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-mono text-xs text-stone-500">{order.id}</TableCell>
              <TableCell className="font-medium">{order.customer}</TableCell>
              <TableCell className="text-stone-600 text-sm">{order.items}</TableCell>
              <TableCell>R$ {order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge className={order.status === 'Pendente' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="gap-2 text-emerald-800">
                  Ver no Whats <ExternalLink size={14} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderManager;