import {
  TrendingUp,
  Target,
  Building2,
  Users,
  Globe2,
  Award,
  Download,
  Calendar,
  DollarSign,
  BarChart3
} from 'lucide-react';

export function InvestorRelations() {
  const financialHighlights = [
    { label: 'Projected Revenue FY26', value: '₹12 Cr', growth: '+65%' },
    { label: 'Production Capacity', value: '500 MT', growth: 'Annual' },
    { label: 'Export Markets', value: '8+', growth: 'Countries' },
    { label: 'EBITDA Margin', value: '28%', growth: 'Target' }
  ];

  const growthStrategy = [
    {
      icon: Building2,
      title: 'Capacity Expansion',
      description: 'Increasing production capacity from 500 MT to 1,000 MT by 2027',
      timeline: '2026-2027'
    },
    {
      icon: Globe2,
      title: 'Market Expansion',
      description: 'Entering new export markets in Europe (UK, Italy) and expanding in North America',
      timeline: '2026'
    },
    {
      icon: Award,
      title: 'Product Innovation',
      description: 'Launching 8 new specialty powders and custom formulations for B2B clients',
      timeline: '2026-2027'
    },
    {
      icon: Users,
      title: 'D2C Channel',
      description: 'Launching direct-to-consumer retail brand for health-conscious consumers',
      timeline: '2027'
    }
  ];

  const milestones = [
    {
      year: '2024',
      quarter: 'Q4',
      event: 'Company Incorporation',
      status: 'Completed'
    },
    {
      year: '2025',
      quarter: 'Q2',
      event: 'Facility Setup & Certifications',
      status: 'Completed'
    },
    {
      year: '2025',
      quarter: 'Q4',
      event: 'First Export Shipment (USA)',
      status: 'Completed'
    },
    {
      year: '2026',
      quarter: 'Q1',
      event: 'ISO 22000 Certification',
      status: 'Completed'
    },
    {
      year: '2026',
      quarter: 'Q2',
      event: 'Organic Certification (NPOP/NOP)',
      status: 'In Progress'
    },
    {
      year: '2026',
      quarter: 'Q3-Q4',
      event: 'Phase 1 Expansion (750 MT capacity)',
      status: 'Planned'
    }
  ];

  const investmentOpportunity = [
    {
      aspect: 'Market Opportunity',
      description: 'Global fruit & vegetable powder market projected to reach $43B by 2028 (CAGR 6.8%)'
    },
    {
      aspect: 'Competitive Advantage',
      description: 'Waste-to-wealth model with 30% cost advantage and ethical sourcing from 200+ farmers'
    },
    {
      aspect: 'Export Focus',
      description: '70% of revenue from exports to high-value markets (USA, EU, UAE) with premium pricing'
    },
    {
      aspect: 'Government Support',
      description: 'Eligible for MoFPI subsidies, export incentives, and production-linked incentives'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <TrendingUp className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Investor Relations</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building a sustainable, profitable enterprise in India's growing agri-processing sector
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2D5016] mb-6">
                About Naturals & Pure
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Naturals & Pure Private Limited</strong> is a food processing company
                  specializing in manufacturing and exporting premium fruit and vegetable powders
                  for global food industries.
                </p>
                <p>
                  Established in 2024, we operate a state-of-the-art facility in Tamil Nadu, India,
                  with a current production capacity of 500 MT annually. Our unique waste-to-wealth
                  business model converts cosmetically imperfect but nutritionally perfect produce
                  into high-value powders.
                </p>
                <p>
                  We serve B2B clients across nutraceuticals, food manufacturing, and beverage
                  industries, with 70% of our revenue coming from exports to USA, EU, and UAE markets.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Incorporation</div>
                  <div className="text-xl font-bold text-[#2D5016]">2024</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Entity Type</div>
                  <div className="text-xl font-bold text-[#2D5016]">Private Limited</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="text-xl font-bold text-[#2D5016]">Tamil Nadu</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Employees</div>
                  <div className="text-xl font-bold text-[#2D5016]">35+</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFD93D] to-[#FFC93D] rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#2D5016] mb-6">Vision & Mission</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-[#2D5016]" />
                    <div className="font-bold text-[#2D5016]">Vision</div>
                  </div>
                  <div className="text-gray-800">
                    To become a leading global supplier of premium natural powders, reducing
                    agricultural waste while empowering farming communities.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-[#2D5016]" />
                    <div className="font-bold text-[#2D5016]">Mission</div>
                  </div>
                  <div className="text-gray-800">
                    Deliver consistently high-quality natural ingredients to global food
                    industries while maintaining ethical sourcing, sustainability, and
                    operational excellence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Highlights */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Financial Highlights</h2>
            <p className="text-xl text-gray-600">Projected FY 2026 Performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item) => (
              <div key={item.label} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-[#2D5016] mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{item.label}</div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  {item.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Strategy */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Growth Strategy</h2>
            <p className="text-xl text-gray-600">
              Strategic initiatives for 2026-2027
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthStrategy.map((strategy) => (
              <div
                key={strategy.title}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#2D5016] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                    <strategy.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D5016] mb-1">{strategy.title}</h3>
                    <div className="inline-block px-3 py-1 bg-[#FFD93D] text-[#2D5016] rounded-full text-xs font-semibold">
                      {strategy.timeline}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Opportunity */}
      <div className="py-16 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <DollarSign className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Investment Opportunity</h2>
            <p className="text-xl text-gray-300">
              Why invest in Naturals & Pure?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentOpportunity.map((item) => (
              <div
                key={item.aspect}
                className="bg-white/10 backdrop-blur rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3">{item.aspect}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#2D5016] mb-4">
                Seeking Strategic Investment
              </h3>
              <div className="text-gray-700 mb-6">
                Looking for ₹5 Cr equity funding for Phase 1 expansion and market development
              </div>
              <button className="px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors">
                Request Investment Deck
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Company Milestones</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.status === 'Completed'
                          ? 'bg-green-600'
                          : milestone.status === 'In Progress'
                          ? 'bg-orange-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      <div className="text-white font-bold text-sm">{milestone.quarter}</div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-xl text-[#2D5016]">{milestone.year}</div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            milestone.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : milestone.status === 'In Progress'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Governance */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Corporate Governance</h2>
            <p className="text-xl text-gray-600">
              Committed to transparency and ethical business practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-[#2D5016] mb-3">Compliance</h3>
              <p className="text-gray-600">
                Full compliance with Companies Act 2013 and all regulatory requirements
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#2D5016] mb-3">Board Structure</h3>
              <p className="text-gray-600">
                Experienced board with expertise in food processing, exports, and finance
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#2D5016] mb-3">Reporting</h3>
              <p className="text-gray-600">
                Quarterly financial reporting and annual audited statements
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Center */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
            <div className="text-center mb-8">
              <Download className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
              <h2 className="text-3xl font-bold text-[#2D5016] mb-4">
                Investor Documentation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Investment Deck</div>
                <div className="text-sm text-gray-600">Complete business presentation</div>
              </button>

              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Financial Projections</div>
                <div className="text-sm text-gray-600">5-year forecast model</div>
              </button>

              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Annual Report 2025</div>
                <div className="text-sm text-gray-600">Audited financials</div>
              </button>

              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Corporate Brochure</div>
                <div className="text-sm text-gray-600">Company overview</div>
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                📧 For access to confidential investor documents, please contact us with your investment firm details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Investor Inquiries</h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with our investor relations team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:investors@naturalspure.com"
              className="px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors"
            >
              investors@naturalspure.com
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
