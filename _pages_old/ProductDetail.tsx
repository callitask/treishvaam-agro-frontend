import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { products } from '../../data/products';
import {
  Download,
  Package,
  Award,
  Leaf,
  ArrowRight,
  CheckCircle,
  FlaskConical,
  UtensilsCrossed
} from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedTab, setSelectedTab] = useState<'specs' | 'applications' | 'nutrition'>('specs');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [email, setEmail] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-[#2D5016] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock download - in real app would trigger actual download
    alert(`Technical Data Sheet will be sent to ${email}`);
    setShowDownloadModal(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#2D5016]">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#2D5016]">Products</Link>
            <span>/</span>
            <span className="text-[#2D5016] font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.organic && (
              <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Certified Organic
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category === 'fruit' && 'Premium Fruit Powder'}
              {product.category === 'vegetable' && 'Premium Vegetable Powder'}
              {product.category === 'leafy-green' && 'Premium Leafy Green Powder'}
            </div>
            <h1 className="text-5xl font-bold text-[#2D5016] mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-gray-500 text-sm mb-1">Mesh Size</div>
                <div className="font-semibold text-lg text-gray-800">{product.specifications.meshSize}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-gray-500 text-sm mb-1">Shelf Life</div>
                <div className="font-semibold text-lg text-gray-800">{product.specifications.shelfLife}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-gray-500 text-sm mb-1">Moisture Content</div>
                <div className="font-semibold text-lg text-gray-800">{product.specifications.moisture}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-gray-500 text-sm mb-1">Minimum Order</div>
                <div className="font-semibold text-lg text-gray-800">{product.moq}</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#2D5016]" />
                <span className="font-semibold text-gray-800">Certifications</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-[#2D5016] text-white rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 px-6 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                Request Bulk Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setShowDownloadModal(true)}
                className="flex-1 px-6 py-4 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download TDS
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setSelectedTab('specs')}
                className={`pb-4 px-2 font-semibold transition-colors relative ${
                  selectedTab === 'specs'
                    ? 'text-[#2D5016]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-5 h-5" />
                  Technical Specifications
                </div>
                {selectedTab === 'specs' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2D5016]" />
                )}
              </button>
              <button
                onClick={() => setSelectedTab('applications')}
                className={`pb-4 px-2 font-semibold transition-colors relative ${
                  selectedTab === 'applications'
                    ? 'text-[#2D5016]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5" />
                  Applications
                </div>
                {selectedTab === 'applications' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2D5016]" />
                )}
              </button>
              <button
                onClick={() => setSelectedTab('nutrition')}
                className={`pb-4 px-2 font-semibold transition-colors relative ${
                  selectedTab === 'nutrition'
                    ? 'text-[#2D5016]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Nutritional Highlights
                </div>
                {selectedTab === 'nutrition' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2D5016]" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {selectedTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-6">
                    <div className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-xl font-semibold text-gray-800">{value}</div>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'applications' && (
              <div>
                <h3 className="text-2xl font-bold text-[#2D5016] mb-6">
                  Ideal Applications for {product.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.applications.map((app) => (
                    <div
                      key={app}
                      className="flex items-start gap-3 bg-gradient-to-br from-[#2D5016]/5 to-[#FFD93D]/5 rounded-lg p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'nutrition' && (
              <div>
                <h3 className="text-2xl font-bold text-[#2D5016] mb-6">
                  Nutritional Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.nutritionalHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 bg-green-50 rounded-lg p-4"
                    >
                      <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Packaging Options */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <Package className="w-6 h-6 text-[#2D5016]" />
            <h3 className="text-2xl font-bold text-[#2D5016]">Packaging Options</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Retail Packaging</h4>
              <div className="flex flex-wrap gap-2">
                {product.packaging.retail.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 bg-white border-2 border-[#2D5016] text-[#2D5016] rounded-lg font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Bulk Packaging</h4>
              <div className="flex flex-wrap gap-2">
                {product.packaging.bulk.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 bg-[#2D5016] text-white rounded-lg font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            Custom packaging available for large orders. Contact our team for specific requirements.
          </p>
        </div>
      </div>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#2D5016] mb-4">
              Download Technical Data Sheet
            </h3>
            <p className="text-gray-600 mb-6">
              Enter your email to receive the complete technical specification document for {product.name}.
            </p>
            <form onSubmit={handleDownload}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Related Products CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-4">
            Explore More Products
          </h2>
          <p className="text-gray-600 mb-8">
            Discover our complete range of premium natural powders
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
