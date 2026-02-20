import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import {
  Leaf,
  Recycle,
  Users,
  TrendingUp,
  Droplets,
  Sun,
  Heart,
  Sprout
} from 'lucide-react';

export function Sustainability() {
  const initiatives = [
    {
      icon: Recycle,
      title: 'Waste-to-Wealth Model',
      description: 'Converting post-harvest losses into premium powders, reducing agricultural waste by 30% in our partner regions.',
      impact: '150+ MT of produce saved annually'
    },
    {
      icon: Users,
      title: 'Farmer Partnerships',
      description: 'Direct collaboration with 200+ farmers and 5 Farmer Producer Organizations (FPOs) ensuring fair prices and ethical sourcing.',
      impact: 'Supporting 500+ farming families'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Recycling and reusing 70% of processing water through advanced filtration systems.',
      impact: '2 million liters saved annually'
    },
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'Solar panels providing 40% of our facility\'s power requirements, reducing carbon footprint.',
      impact: '80 MT CO₂ reduction per year'
    }
  ];

  const impactMetrics = [
    { value: '30%', label: 'Waste Reduction' },
    { value: '200+', label: 'Farmer Partners' },
    { value: '70%', label: 'Water Recycled' },
    { value: '40%', label: 'Solar Powered' }
  ];

  const farmerStories = [
    {
      name: 'Rajesh Kumar',
      location: 'Theni District, TN',
      crop: 'Banana',
      quote: 'Partnership with Naturals & Pure has given us a stable income for our surplus produce that would otherwise go to waste.'
    },
    {
      name: 'Lakshmi Devi',
      location: 'Salem, TN',
      crop: 'Moringa',
      quote: 'Fair pricing and guaranteed offtake have transformed our moringa farming from hobby to profitable venture.'
    },
    {
      name: 'Murugan FPO',
      location: 'Coimbatore, TN',
      crop: 'Mixed Vegetables',
      quote: 'Our collective of 50 farmers now has a reliable buyer who values quality and pays promptly.'
    }
  ];

  const sdgGoals = [
    { number: 2, name: 'Zero Hunger', description: 'Reducing food waste & supporting farmers' },
    { number: 8, name: 'Decent Work', description: 'Fair wages & safe working conditions' },
    { number: 12, name: 'Responsible Consumption', description: 'Waste-to-wealth circular economy' },
    { number: 13, name: 'Climate Action', description: 'Renewable energy & carbon reduction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1728706613008-8ae756b372cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYXJ2ZXN0aW5nJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3Njg1NzMxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <Sprout className="w-20 h-20 mx-auto mb-6 text-[#FFD93D]" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sustainability & Impact
          </h1>
          <p className="text-2xl text-gray-200">
            Transforming agricultural waste into wealth while empowering farming communities
          </p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="py-16 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Impact by Numbers</h2>
            <p className="text-gray-300">Making a real difference in 2025</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-5xl font-bold text-[#FFD93D] mb-2">{metric.value}</div>
                <div className="text-lg text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Initiatives */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Our Initiatives</h2>
            <p className="text-xl text-gray-600">
              Comprehensive sustainability across environment, economy, and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D5016] mb-2">{initiative.title}</h3>
                    <div className="inline-block px-3 py-1 bg-[#FFD93D] text-[#2D5016] rounded-full text-sm font-semibold">
                      {initiative.impact}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Waste-to-Wealth Story */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2D5016] mb-6">
                The Waste-to-Wealth Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  India loses approximately <strong>40% of its fruits and vegetables</strong> to post-harvest 
                  wastage every year. At Naturals & Pure, we're turning this challenge into opportunity.
                </p>
                <p>
                  We partner directly with farmers and FPOs to purchase <strong>cosmetically imperfect</strong> but 
                  nutritionally perfect produce that would otherwise be discarded - slightly overripe bananas, 
                  undersized mangoes, or misshapen vegetables.
                </p>
                <p>
                  Through our advanced processing technology, we transform this "waste" into premium, 
                  nutrient-dense powders for global markets, creating value for farmers while reducing 
                  agricultural waste.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="text-3xl font-bold text-[#2D5016] mb-1">150+ MT</div>
                  <div className="text-sm text-gray-600">Produce rescued annually</div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="text-3xl font-bold text-[#2D5016] mb-1">₹80L+</div>
                  <div className="text-sm text-gray-600">Additional farmer income</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748507494848-e3cfabf5610e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMHZlZ2V0YWJsZXMlMjBmYXJtfGVufDF8fHx8MTc2ODU3MzAyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fresh produce"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Farmer Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Voices from the Farm</h2>
            <p className="text-xl text-gray-600">
              Stories from our farmer partners across Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {farmerStories.map((story) => (
              <div
                key={story.name}
                className="bg-gradient-to-br from-[#FFD93D]/10 to-white rounded-xl shadow-lg p-8"
              >
                <div className="text-5xl mb-4">👨‍🌾</div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#2D5016]">{story.name}</h3>
                  <div className="text-sm text-gray-600">{story.location}</div>
                  <div className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                    {story.crop} Farmer
                  </div>
                </div>
                <blockquote className="text-gray-700 italic border-l-4 border-[#2D5016] pl-4">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UN SDG Goals */}
      <div className="py-16 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Aligned with UN SDGs</h2>
            <p className="text-xl text-gray-300">
              Contributing to global sustainable development goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgGoals.map((goal) => (
              <div key={goal.number} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#2D5016]">{goal.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{goal.name}</h3>
                <p className="text-sm text-gray-300">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Goals */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-[#2D5016]" />
          <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
            Our 2026 Sustainability Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">500+</div>
              <div className="text-gray-700">Farmer partners</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
              <div className="text-gray-700">Renewable energy</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">Zero</div>
              <div className="text-gray-700">Landfill waste</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
