import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { 
  Droplets, 
  Scissors, 
  Wind, 
  Zap, 
  Package,
  CheckCircle,
  Factory,
  FlaskConical
} from 'lucide-react';

export function Infrastructure() {
  const processSteps = [
    {
      icon: CheckCircle,
      title: 'Quality Selection',
      description: 'Rigorous inspection of raw materials. Only premium-grade fruits and vegetables enter our facility.',
      image: 'https://images.unsplash.com/photo-1728706613008-8ae756b372cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYXJ2ZXN0aW5nJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3Njg1NzMxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Droplets,
      title: 'Washing & Sanitization',
      description: 'Multi-stage washing with ozonated water removes impurities while maintaining nutritional integrity.',
      image: 'https://images.unsplash.com/photo-1583737097428-af53774819a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dkZXIlMjBtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY4NTczMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Scissors,
      title: 'Peeling & Slicing',
      description: 'Automated cutting systems ensure uniform thickness for consistent drying and optimal powder quality.',
      image: 'https://images.unsplash.com/photo-1764160454561-0f092320e9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZm9vZCUyMHByb2Nlc3NpbmclMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY4NTczMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Wind,
      title: 'Tunnel Drying',
      description: 'Advanced hot-air tunnel dryers operate at controlled temperatures (50-60°C) to preserve nutrients and color.',
      image: 'https://images.unsplash.com/photo-1568793096722-045e8593cee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJvb20lMjBtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY4NTczMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Zap,
      title: 'Pulverizing',
      description: 'High-speed hammer mills and pin mills reduce dried material to specified mesh sizes (60-120 mesh).',
      image: 'https://images.unsplash.com/photo-1764160454561-0f092320e9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZm9vZCUyMHByb2Nlc3NpbmclMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY4NTczMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: FlaskConical,
      title: 'Quality Testing',
      description: 'In-house laboratory tests for moisture, microbiology, heavy metals, and nutritional parameters.',
      image: 'https://images.unsplash.com/photo-1694022281779-ac19517b4f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwZm9vZCUyMHRlc3Rpbmd8ZW58MXx8fHwxNzY4NTczMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Package,
      title: 'Packaging & Storage',
      description: 'Food-grade aluminum laminated pouches in climate-controlled storage maintain product freshness.',
      image: 'https://images.unsplash.com/photo-1568793096722-045e8593cee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJvb20lMjBtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY4NTczMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const facilities = [
    {
      title: 'Processing Capacity',
      value: '500+ MT',
      description: 'Annual production capacity'
    },
    {
      title: 'Processing Area',
      value: '15,000 sq ft',
      description: 'State-of-the-art facility'
    },
    {
      title: 'Clean Rooms',
      value: 'ISO Class 8',
      description: 'Controlled environment'
    },
    {
      title: 'Quality Lab',
      value: 'NABL Equipped',
      description: 'In-house testing facility'
    }
  ];

  const machinery = [
    'Automated Washing Systems',
    'Industrial Peeling Machines',
    'Precision Slicing Equipment',
    'Hot Air Tunnel Dryers',
    'Hammer & Pin Mills',
    'Sieving & Grading Machines',
    'Nitrogen Flushing Systems',
    'Metal Detectors',
    'Automated Packaging Lines'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Factory className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Infrastructure & Process</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art manufacturing facility equipped with advanced technology to ensure premium quality in every batch
          </p>
        </div>
      </div>

      {/* Facility Stats */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility) => (
              <div key={facility.title} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-[#2D5016] mb-2">{facility.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{facility.title}</div>
                <div className="text-sm text-gray-600">{facility.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">From Farm to Powder</h2>
            <p className="text-xl text-gray-600">
              Our 7-stage process ensures maximum quality, nutrition retention, and food safety
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#2D5016]">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2D5016]">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Machinery Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Advanced Machinery</h2>
            <p className="text-xl text-gray-600">
              Equipped with the latest food processing technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machinery.map((machine) => (
              <div
                key={machine}
                className="flex items-center gap-3 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="font-medium text-gray-800">{machine}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Standards */}
      <div className="py-16 bg-[#2D5016] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quality Standards</h2>
            <p className="text-xl text-gray-300">
              Committed to international food safety and quality certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">ISO 22000:2018</h3>
              <p className="text-gray-300">
                Food Safety Management System certified for entire operations
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-3">HACCP Certified</h3>
              <p className="text-gray-300">
                Hazard Analysis Critical Control Points implemented at every stage
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3">Organic Certified</h3>
              <p className="text-gray-300">
                NPOP & NOP certified for organic product lines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour CTA */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
            See Our Facility in Action
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a virtual tour or visit us to witness our quality processes firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors"
            >
              Schedule a Tour
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors"
            >
              Request Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
