'use client';
import { ShoppingCart } from 'lucide-react';
import { useRfq } from '@/lib/store/rfq-store';
import { toast } from 'sonner';
import { Product } from '@/lib/data/products';

export default function RfqAddButton({ product }: { product: Product }) {
  const { addItem } = useRfq();
  const handle = () => {
    addItem({
      productId: product.id,
      productName: product.name,
      category: product.category,
      image: product.image,
      packaging: product.packagingOptions[0],
      moq: product.moq,
      unit: 'kg',
    });
    toast.success(`${product.name} added to RFQ`);
  };
  return (
    <button onClick={handle} className="bg-white text-brand-dark font-bold text-sm px-6 py-3 border border-brand-border hover:border-brand-dark flex items-center gap-2">
      <ShoppingCart size={14} /> Add to RFQ
    </button>
  );
}
