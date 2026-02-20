export default function StatsStrip() {
  const stats = [
    { value: '15+', label: 'Premium Products' },
    { value: '25+', label: 'Export Markets' },
    { value: '500+', label: 'MT Annual Capacity' },
    { value: '100%', label: 'Quality Assured' },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-naturals-green-900 mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}