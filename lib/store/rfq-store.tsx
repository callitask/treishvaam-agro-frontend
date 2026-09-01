/**
 * AI-CONTEXT:
 * Enterprise B2B RFQ (Request for Quote) Store
 * React Context + localStorage for cart persistence (SSG-compatible)
 * No external state lib to keep bundle lean
 */
'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export interface RfqLineItem {
  productId: string;
  productName: string;
  category: string;
  image: string;
  quantity: number; // in kg
  unit: 'kg' | 'MT';
  packaging: string;
  moq: string;
}

interface RfqContextType {
  items: RfqLineItem[];
  addItem: (item: Omit<RfqLineItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  count: number;
  totalKg: number;
}

const RfqContext = createContext<RfqContextType | null>(null);
const STORAGE_KEY = 'treishvaam_rfq_v1';

export function RfqProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RfqLineItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = useCallback((input: Omit<RfqLineItem, 'quantity'> & { quantity?: number }) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.productId === input.productId);
      if (existing) {
        return prev.map((p) => (p.productId === input.productId ? { ...p, quantity: p.quantity + (input.quantity || 500) } : p));
      }
      return [...prev, { ...input, quantity: input.quantity || 500, unit: input.unit || 'kg', packaging: input.packaging || '25 kg Drum' } as RfqLineItem];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((p) => p.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) => prev.map((p) => (p.productId === productId ? { ...p, quantity } : p)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.length;
  const totalKg = items.reduce((sum, i) => sum + i.quantity * (i.unit === 'MT' ? 1000 : 1), 0);

  return <RfqContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear, count, totalKg }}>{children}</RfqContext.Provider>;
}

export function useRfq() {
  const ctx = useContext(RfqContext);
  if (!ctx) throw new Error('useRfq must be used within RfqProvider');
  return ctx;
}
