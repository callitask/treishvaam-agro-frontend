/**
 * AI-CONTEXT:
 * Purpose: Landify "Community" Feature Section.
 * Design: 3-Column Grid with Icons.
 */
import { Users, Building2, Handshake } from "lucide-react"; 

export function FeatureSection() {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      icon: <Handshake className="w-12 h-12 text-primary" />,
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments"
    }
  ];

  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-16">
            <h2 className="text-4xl font-semibold text-secondary mb-4">
                Manage your entire community in a single system
            </h2>
            <p className="text-secondary/60">Who is Nextcent suitable for?</p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-transparent hover:border-primary/20">
                    <div className="bg-primary/10 w-20 h-20 rounded-tl-2xl rounded-br-2xl mx-auto flex items-center justify-center mb-6">
                        {f.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">{f.title}</h3>
                    <p className="text-secondary/70 leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </div>
    </section>
  );
}