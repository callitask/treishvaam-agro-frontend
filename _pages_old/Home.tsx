import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { 
  Award, 
  Leaf, 
  Microscope, 
  Globe2, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Factory,
  Users,
  Sprout
} from 'lucide-react';

export function Home() {
  const products = [
    {
      id: 'banana-powder',
      name: 'Banana Powder',
      image: 'https://images.unsplash.com/photo-1741461527158-2a5799c3d26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBwb3dkZXIlMjBuYXR1cmFsfGVufDF8fHx8MTc2ODU3MzAzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Rich in Potassium & Natural Sweetness',
      color: 'bg-yellow-100'
    },
    {
      id: 'moringa-powder',
      name: 'Moringa Powder',
      image: 'https://images.unsplash.com/photo-1667928729816-0ed8c59cd3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JpbmdhJTIwbGVhdmVzJTIwZ3JlZW58ZW58MXx8fHwxNzY4NTczMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Superfood with 90+ Nutrients',
      color: 'bg-green-100'
    },
    {
      id: 'mango-powder',
      name: 'Mango Powder',
      image: 'https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGZydWl0JTIwdHJvcGljYWx8ZW58MXx8fHwxNzY4NTczMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Tropical Flavor & Vitamin C',
      color: 'bg-orange-100'
    },
    {
      id: 'tomato-powder',
      name: 'Tomato Powder',
      image: 'https://images.unsplash.com/photo-1621332606136-7e66f02dade1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjB2ZWdldGFibGVzJTIwcmVkfGVufDF8fHx8MTc2ODU3MzAzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Lycopene Rich & Versatile',
      color: 'bg-red-100'
    }
  ];

  const certifications = [
    { name: 'FSSAI', description: 'Food Safety Certified' },
    { name: 'ISO 22000', description: 'Quality Management' },
    { name: 'HACCP', description: 'Hazard Analysis' },
    { name: 'GMP', description: 'Good Manufacturing' },
    { name: 'Organic NPOP', description: 'Organic Certified' },
    { name: 'Halal', description: 'Halal Compliant' }
  ];

  const whyUs = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'No additives, preservatives, or artificial colors'
    },
    {
      icon: Microscope,
      title: 'Advanced Technology',
      description: 'State-of-the-art tunnel drying & pulverizing systems'
    },
    {
      icon: Users,
      title: 'Ethical Sourcing',
      description: 'Direct partnerships with farmer cooperatives'
    },
    {
      icon: Globe2,
      title: 'Global Traceability',
      description: 'Complete farm-to-fork tracking for every batch'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1748507494848-e3cfabf5610e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMHZlZ2V0YWJsZXMlMjBmYXJtfGVufDF8fHx8MTc2ODU3MzAyOXww&ixlib=rb-4.1.0&q=80&w=1080')` }}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Natural Ingredients<br />
            <span className="text-[#FFD93D]">for Global Industries</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            From Farm to Powder – Manufacturing Excellence in Fruit & Vegetable Powders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors inline-flex items-center justify-center gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-[#2D5016] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar - Certifications */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-6 h-6 text-[#2D5016]" />
            <h2 className="text-lg font-semibold text-[#2D5016]">Certified & Trusted</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 bg-white rounded-full flex items-center justify-center border-2 border-[#2D5016] shadow-sm">
                  <div className="text-xs font-bold text-[#2D5016]">{cert.name}</div>
                </div>
                <div className="text-xs text-gray-600">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">
              Premium quality powders for food manufacturing, nutraceuticals, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-200 text-sm mb-3">{product.description}</p>
                    <div className="text-[#FFD93D] font-semibold inline-flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Naturals & Pure?</h2>
            <p className="text-xl text-gray-300">
              Where nature meets science in perfect harmony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#FFD93D] rounded-full flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-[#2D5016]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2D5016] mb-2">15+</div>
              <div className="text-gray-600">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2D5016] mb-2">25+</div>
              <div className="text-gray-600">Export Markets</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2D5016] mb-2">500+</div>
              <div className="text-gray-600">MT Annual Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2D5016] mb-2">100%</div>
              <div className="text-gray-600">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Factory className="w-16 h-16 mx-auto mb-6 text-[#2D5016]" />
          <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join global food manufacturers who trust our premium natural powders.<br />
            Request samples or get a custom quote for your bulk requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors inline-flex items-center justify-center gap-2"
            >
              Request Sample
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/infrastructure"
              className="px-8 py-4 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors inline-flex items-center justify-center gap-2"
            >
              Tour Our Facility
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
