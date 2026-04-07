"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserManager = () => {
  // Mock de usuários (será substituído pelo Supabase)
  const mockUsers = [
    { id: 1, name: 'Maria Silva', email: 'maria@email.com', address: 'Rua das Flores, 123', orders: 3 },
    { id: 2, name: 'José Santos', email: 'jose@email.com', address: 'Av. Central, 456', orders: 1 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
      <Table>
        <TableHeader className="bg-stone-50">
          <TableRow>
            <TableHead>Usuário</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Endereço</TableHead>
            <TableHead className="text-center">Pedidos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-emerald-100 text-emerald-800 text-xs">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </TableCell>
              <TableCell className="text-stone-500">{user.email}</TableCell>
              <TableCell className="text-stone-500 text-sm">{user.address}</TableCell>
              <TableCell className="text-center">{user.orders}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManager;