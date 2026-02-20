import { useState } from 'react';
import { RFQForm } from '../../components/RFQForm';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const [activeTab, setActiveTab] = useState<'rfq' | 'sample' | 'general'>('rfq');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productInterest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will respond within 24 hours.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      productInterest: '',
      message: ''
    });
  };

  const exportMarkets = [
    { region: 'North America', markets: ['USA', 'Canada'] },
    { region: 'Europe', markets: ['Germany', 'France', 'Netherlands', 'UK'] },
    { region: 'Middle East', markets: ['UAE', 'Saudi Arabia', 'Qatar'] },
    { region: 'Asia Pacific', markets: ['Singapore', 'Japan', 'South Korea'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Let's discuss how we can meet your bulk powder requirements
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#2D5016] mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Factory Address</div>
                    <div className="text-sm text-gray-600">
                      Plot No. 45, Industrial Estate<br />
                      Tamil Nadu - 625001<br />
                      India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-sm text-gray-600">+91-XXX-XXXX-XXX</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-sm text-gray-600">export@naturalspure.com</div>
                    <div className="text-sm text-gray-600">sales@naturalspure.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Business Hours</div>
                    <div className="text-sm text-gray-600">
                      Mon - Fri: 9:00 AM - 6:00 PM IST<br />
                      Sat: 9:00 AM - 1:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Markets */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#2D5016] mb-4">Export Markets</h3>
              <div className="space-y-3">
                {exportMarkets.map((region) => (
                  <div key={region.region}>
                    <div className="font-semibold text-gray-800 mb-1">{region.region}</div>
                    <div className="text-sm text-gray-600">{region.markets.join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-[#FFD93D] to-[#FFC93D] rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="font-bold text-[#2D5016] mb-1">24-Hour Response</div>
              <div className="text-sm text-gray-700">
                We respond to all inquiries within one business day
              </div>
            </div>
          </div>

          {/* Forms Section */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-t-xl shadow-lg">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('rfq')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'rfq'
                      ? 'bg-[#2D5016] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Request for Quote
                </button>
                <button
                  onClick={() => setActiveTab('sample')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'sample'
                      ? 'bg-[#2D5016] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Request Sample
                </button>
                <button
                  onClick={() => setActiveTab('general')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'general'
                      ? 'bg-[#2D5016] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  General Inquiry
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-b-xl shadow-lg p-8">
              {/* RFQ Form */}
              {activeTab === 'rfq' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#2D5016] mb-2">
                    Request a Detailed Quote
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Fill in your requirements and get a customized quote for bulk orders
                  </p>
                  <RFQForm />
                </div>
              )}

              {/* Sample Request Form */}
              {activeTab === 'sample' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#2D5016] mb-2">
                    Request Product Samples
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Evaluate our product quality before placing bulk orders
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Products Interested In *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        placeholder="e.g., Banana Powder, Moringa Powder"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        placeholder="Intended application, quantity range, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Request Samples
                    </button>
                  </form>
                </div>
              )}

              {/* General Inquiry Form */}
              {activeTab === 'general' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#2D5016] mb-2">
                    General Inquiry
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Questions about our products, facility, or partnerships? We're here to help.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
