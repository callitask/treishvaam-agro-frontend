/**
 * AI-CONTEXT:
 * Purpose: Landify "Our Clients" Strip.
 * Design: Minimalist logo strip.
 * Change Intent: Fix Module Not Found error.
 */
import Image from "next/image";

export function ClientsSection() {
  const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6", "Client 7"];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-secondary mb-2">Our Clients</h2>
        <p className="text-secondary/60 mb-10">We have been working with some Fortune 500+ clients</p>
        
        <div className="flex flex-wrap justify-center gap-12 lg:justify-between items-center opacity-70 grayscale">
            {/* Placeholder text for logos - Replace with Image components later */}
            {clients.map((client, i) => (
                <div key={i} className="font-bold text-xl text-secondary/40 select-none">
                    {client}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}