import { useState } from 'react';
import {
  User,
  Package,
  FileText,
  Download,
  Eye,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  Search
} from 'lucide-react';

export function CustomerPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // Mock data for demonstration
  const mockOrders = [
    {
      id: 'ORD-2026-001',
      date: '2026-01-10',
      product: 'Banana Powder (Organic)',
      quantity: '500 kg',
      status: 'Delivered',
      invoice: 'INV-001.pdf'
    },
    {
      id: 'ORD-2026-002',
      date: '2026-01-14',
      product: 'Moringa Powder',
      quantity: '200 kg',
      status: 'In Transit',
      invoice: 'INV-002.pdf'
    },
    {
      id: 'ORD-2025-089',
      date: '2025-12-28',
      product: 'Mango Powder',
      quantity: '1 MT',
      status: 'Delivered',
      invoice: 'INV-089.pdf'
    }
  ];

  const mockDocuments = [
    {
      name: 'Certificate of Analysis - Batch BAN-2026-045',
      date: '2026-01-10',
      type: 'COA',
      batchCode: 'BAN-2026-045'
    },
    {
      name: 'Lab Report - Moringa MOR-2026-012',
      date: '2026-01-14',
      type: 'Lab Report',
      batchCode: 'MOR-2026-012'
    },
    {
      name: 'Organic Certificate - NPOP 2026',
      date: '2026-01-01',
      type: 'Certificate',
      batchCode: 'N/A'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would authenticate
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2D5016] to-[#FFD93D] rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2D5016] mb-2">
                B2B Customer Portal
              </h2>
              <p className="text-gray-600">
                Access your orders, documents, and account information
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-[#2D5016] rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-[#2D5016] hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Don't have an account?
              </p>
              <a
                href="/contact"
                className="text-[#2D5016] font-semibold hover:underline"
              >
                Contact us to become a partner →
              </a>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-xs text-yellow-800">
                <strong>Demo Mode:</strong> Enter any email and password to view the portal
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-gray-300">Global Foods Inc.</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-[#2D5016]" />
              <span className="text-2xl font-bold text-[#2D5016]">12</span>
            </div>
            <div className="text-sm text-gray-600">Total Orders</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold text-orange-600">1</span>
            </div>
            <div className="text-sm text-gray-600">In Transit</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">24</span>
            </div>
            <div className="text-sm text-gray-600">Documents</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">3.2 MT</span>
            </div>
            <div className="text-sm text-gray-600">YTD Volume</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-[#2D5016]">Recent Orders</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-[#2D5016] transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-bold text-gray-800">{order.id}</div>
                          <div className="text-sm text-gray-500">
                            <Calendar className="w-3 h-3 inline mr-1" />
                            {order.date}
                          </div>
                        </div>
                        <div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-orange-100 text-orange-800'
                            }`}
                          >
                            {order.status === 'Delivered' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                            {order.status}
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="font-semibold text-gray-800">{order.product}</div>
                        <div className="text-sm text-gray-600">Quantity: {order.quantity}</div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium inline-flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <button className="flex-1 px-4 py-2 bg-[#2D5016] text-white rounded-lg hover:bg-[#3D6026] transition-colors text-sm font-medium inline-flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Invoice
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-4 py-3 text-[#2D5016] font-semibold hover:bg-gray-50 rounded-lg transition-colors">
                  View All Orders →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions & Documents */}
          <div className="space-y-6">
            {/* Quick Reorder */}
            <div className="bg-gradient-to-br from-[#FFD93D] to-[#FFC93D] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#2D5016] mb-4">Quick Reorder</h3>
              <p className="text-gray-700 mb-4">
                Reorder your most frequent products with one click
              </p>
              <button className="w-full px-4 py-3 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors">
                Reorder Now
              </button>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-[#2D5016] flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Recent Documents
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {mockDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <FileText className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-800 truncate">
                          {doc.name}
                        </div>
                        <div className="text-xs text-gray-500">{doc.date}</div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 text-[#2D5016] font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm">
                  View All Documents →
                </button>
              </div>
            </div>

            {/* Batch Traceability */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-[#2D5016] mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Batch Traceability
              </h3>
              <input
                type="text"
                placeholder="Enter batch code..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] mb-3"
              />
              <button className="w-full px-4 py-3 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors">
                Track Batch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
