'use client';

import Link from 'next/link';
import { ShoppingCart, Trash2, Plus, Minus, FileText } from 'lucide-react';
import { useRfq } from '@/lib/store/rfq-store';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

function CartContent({ onCheckout }: { onCheckout?: () => void }) {
  const { items, removeItem, updateQuantity, totalKg } = useRfq();
  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <ShoppingCart className="mx-auto mb-4 text-gray-300" size={48} />
        <p className="text-brand-textMuted font-medium">Your RFQ cart is empty</p>
        <p className="text-sm text-gray-400 mt-2">Add products to request bulk pricing</p>
        <Link href="/products" className="inline-block mt-6 text-brand-primary font-semibold hover:underline">
          Browse Catalog →
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.productId} className="flex gap-4 p-4 border border-brand-border rounded-card bg-white">
          <img src={item.image} alt={item.productName} className="w-16 h-16 rounded object-cover flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-brand-dark text-sm truncate">{item.productName}</h4>
            <p className="text-xs text-gray-500">{item.category} • {item.packaging}</p>
            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 100))} className="w-7 h-7 rounded border flex items-center justify-center hover:bg-gray-50">
                <Minus size={12} />
              </button>
              <span className="text-sm font-semibold min-w-[80px] text-center">{item.quantity} {item.unit}</span>
              <button onClick={() => updateQuantity(item.productId, item.quantity + 100)} className="w-7 h-7 rounded border flex items-center justify-center hover:bg-gray-50">
                <Plus size={12} />
              </button>
            </div>
          </div>
          <button onClick={() => removeItem(item.productId)} className="text-gray-400 hover:text-red-500 self-start p-1">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <div className="border-t border-brand-border pt-4 mt-2">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">Total Volume</span>
          <span className="font-bold text-brand-dark">{totalKg >= 1000 ? `${(totalKg / 1000).toFixed(2)} MT` : `${totalKg} kg`}</span>
        </div>
        <p className="text-xs text-gray-400 mb-4">Final pricing shared via official quote within 24h</p>
        <Link href="/contact" onClick={onCheckout} className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 rounded-enterprise flex items-center justify-center gap-2 transition-colors">
          <FileText size={18} /> Request Official Quote
        </Link>
      </div>
    </div>
  );
}

export default function RfqCart() {
  const { count } = useRfq();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="relative bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold text-sm px-4 py-2.5 rounded-enterprise transition-all flex items-center gap-2">
          <ShoppingCart size={16} />
          <span className="hidden sm:inline">RFQ</span>
          {count > 0 && <span className="bg-brand-dark text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{count}</span>}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-brand-surface-off overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-brand-dark">
            <FileText size={20} className="text-brand-primary" /> Quote Cart ({count})
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <CartContent onCheckout={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function RfqCartInline() {
  return <CartContent />;
}
