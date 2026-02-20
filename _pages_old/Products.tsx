import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { products } from '../../data/products';
import { Filter, Search, ArrowRight, Leaf } from 'lucide-react';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOrganic, setShowOrganic] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fruit', name: 'Fruit Powders' },
    { id: 'vegetable', name: 'Vegetable Powders' },
    { id: 'leafy-green', name: 'Leafy Green Powders' }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOrganic = !showOrganic || product.organic;
    return matchesCategory && matchesSearch && matchesOrganic;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300">
            Premium natural fruit and vegetable powders for global food industries
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white border-b border-gray-200 sticky top-[120px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#2D5016] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Organic Filter */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOrganic}
                onChange={(e) => setShowOrganic(e.target.checked)}
                className="w-5 h-5 text-[#2D5016] rounded focus:ring-[#2D5016]"
              />
              <span className="flex items-center gap-1 font-medium text-gray-700">
                <Leaf className="w-4 h-4 text-green-600" />
                Organic Only
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6 text-gray-600">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.organic && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Organic
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  {product.category === 'fruit' && 'Fruit Powder'}
                  {product.category === 'vegetable' && 'Vegetable Powder'}
                  {product.category === 'leafy-green' && 'Leafy Green Powder'}
                </div>
                <h3 className="text-2xl font-bold text-[#2D5016] mb-2 group-hover:text-[#3D6026]">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>

                {/* Specs Preview */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="bg-gray-50 rounded px-3 py-2">
                    <div className="text-gray-500 text-xs">Mesh Size</div>
                    <div className="font-semibold text-gray-700">{product.specifications.meshSize}</div>
                  </div>
                  <div className="bg-gray-50 rounded px-3 py-2">
                    <div className="text-gray-500 text-xs">MOQ</div>
                    <div className="font-semibold text-gray-700">{product.moq}</div>
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Applications:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className="text-xs bg-[#FFD93D]/20 text-[#2D5016] px-2 py-1 rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between text-[#2D5016] font-semibold">
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We can develop custom powder formulations to meet your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
