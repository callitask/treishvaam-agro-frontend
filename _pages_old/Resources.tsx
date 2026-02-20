import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import {
  BookOpen,
  Clock,
  ArrowRight,
  TrendingUp,
  Leaf,
  Users,
  Search
} from 'lucide-react';
import { useState } from 'react';

export function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'industry-trends', 'product-guides', 'sustainability', 'case-studies'];

  const articles = [
    {
      id: 1,
      title: 'The Rise of Banana Powder in Baby Food Manufacturing',
      category: 'product-guides',
      excerpt: 'Discover why global baby food manufacturers are increasingly turning to banana powder as a natural, nutritious ingredient.',
      image: 'https://images.unsplash.com/photo-1741461527158-2a5799c3d26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBwb3dkZXIlMjBuYXR1cmFsfGVufDF8fHx8MTc2ODU3MzAzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '2026-01-10',
      readTime: '5 min read',
      author: 'Dr. Priya Kumar'
    },
    {
      id: 2,
      title: 'Moringa: The Superfood Trend Transforming Nutraceuticals in 2026',
      category: 'industry-trends',
      excerpt: 'Market analysis of moringa powder demand in North America and Europe, with projected growth rates and consumer preferences.',
      image: 'https://images.unsplash.com/photo-1667928729816-0ed8c59cd3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JpbmdhJTIwbGVhdmVzJTIwZ3JlZW58ZW58MXx8fHwxNzY4NTczMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '2026-01-08',
      readTime: '7 min read',
      author: 'Rajesh Patel'
    },
    {
      id: 3,
      title: 'From Waste to Wealth: How We Reduced Agricultural Loss by 30%',
      category: 'sustainability',
      excerpt: 'A deep dive into our waste-to-wealth model and its impact on farming communities in Tamil Nadu.',
      image: 'https://images.unsplash.com/photo-1728706613008-8ae756b372cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYXJ2ZXN0aW5nJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3Njg1NzMxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '2026-01-05',
      readTime: '6 min read',
      author: 'Sustainability Team'
    },
    {
      id: 4,
      title: 'Tomato Powder Applications: Beyond Pizza Sauce',
      category: 'product-guides',
      excerpt: 'Exploring innovative applications of tomato powder in instant noodles, seasonings, and ready-to-eat meals.',
      image: 'https://images.unsplash.com/photo-1621332606136-7e66f02dade1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjB2ZWdldGFibGVzJTIwcmVkfGVufDF8fHx8MTc2ODU3MzAzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '2026-01-03',
      readTime: '5 min read',
      author: 'Product Development Team'
    },
    {
      id: 5,
      title: 'Case Study: Supplying Organic Powders to a Major US Beverage Brand',
      category: 'case-studies',
      excerpt: 'How we helped a Fortune 500 beverage company meet their organic ingredient sourcing goals.',
      image: 'https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGZydWl0JTIwdHJvcGljYWx8ZW58MXx8fHwxNzY4NTczMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '2025-12-28',
      readTime: '8 min read',
      author: 'Export Team'
    },
    {
      id: 6,
      title: 'Export Regulations Guide: Shipping Natural Powders to the EU',
      category: 'industry-trends',
      excerpt: 'Navigate EU food safety regulations, required certifications, and documentation for exporting fruit and vegetable powders.',
      image: 'https://images.unsplash.com/photo-1568793096722-045e8593cee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJvb20lMjBtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY4NTczMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '2025-12-25',
      readTime: '10 min read',
      author: 'Compliance Team'
    }
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Resources & Insights</h1>
          <p className="text-xl text-gray-300">
            Industry trends, product guides, and expert insights on natural food powders
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-[120px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                    selectedCategory === category
                      ? 'bg-[#2D5016] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Article</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#FFD93D] text-[#2D5016] rounded-full text-sm font-semibold capitalize">
                    {featuredArticle.category.replace('-', ' ')}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#2D5016] mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By {featuredArticle.author} • {featuredArticle.date}
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D5016] text-white font-semibold rounded-lg hover:bg-[#3D6026] transition-colors">
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            All Articles ({filteredArticles.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-[#FFD93D]/20 text-[#2D5016] rounded text-xs font-semibold capitalize">
                      {article.category.replace('-', ' ')}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#2D5016] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      {article.date}
                    </div>
                    <button className="text-[#2D5016] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] rounded-2xl p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for monthly insights on industry trends, product innovations, and sustainability updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFD93D]"
              />
              <button className="px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Industry Trends</h3>
            <p className="text-sm text-gray-600">
              Market analysis and emerging trends in natural food powders
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Product Guides</h3>
            <p className="text-sm text-gray-600">
              Technical guides and application ideas for our powders
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Case Studies</h3>
            <p className="text-sm text-gray-600">
              Real-world success stories from our global clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
