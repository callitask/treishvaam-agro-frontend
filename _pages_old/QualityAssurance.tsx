import { Download, Award, CheckCircle, FileCheck, Shield } from 'lucide-react';

export function QualityAssurance() {
  const certifications = [
    {
      name: 'FSSAI License',
      number: '10012XXXXXX',
      issuer: 'Food Safety and Standards Authority of India',
      validUntil: '2027-03-15',
      description: 'Licensed food processing unit meeting all safety standards'
    },
    {
      name: 'ISO 22000:2018',
      number: 'ISO-22000-2024-XXXX',
      issuer: 'International Organization for Standardization',
      validUntil: '2027-01-20',
      description: 'Food Safety Management System certification'
    },
    {
      name: 'HACCP',
      number: 'HACCP-2024-XXXX',
      issuer: 'Codex Alimentarius Commission',
      validUntil: '2027-02-10',
      description: 'Hazard Analysis and Critical Control Points'
    },
    {
      name: 'GMP Certified',
      number: 'GMP-IND-2024-XXX',
      issuer: 'Good Manufacturing Practices Board',
      validUntil: '2027-04-05',
      description: 'Good Manufacturing Practices compliance'
    },
    {
      name: 'Organic NPOP',
      number: 'NPOP-2024-XXXX',
      issuer: 'National Programme for Organic Production',
      validUntil: '2026-12-31',
      description: 'Organic certification for India'
    },
    {
      name: 'Organic NOP (USDA)',
      number: 'NOP-USA-2024-XXX',
      issuer: 'USDA National Organic Program',
      validUntil: '2026-11-30',
      description: 'USDA organic certification for US exports'
    },
    {
      name: 'Halal Certificate',
      number: 'HALAL-2024-XXXX',
      issuer: 'Halal Certification Authority',
      validUntil: '2027-06-30',
      description: 'Halal compliance for Middle East markets'
    },
    {
      name: 'Kosher Certificate',
      number: 'KOSHER-2024-XXX',
      issuer: 'Kosher Certification Agency',
      validUntil: '2026-09-30',
      description: 'Kosher compliance certification'
    }
  ];

  const qualityMetrics = [
    {
      metric: 'Batch Testing',
      value: '100%',
      description: 'Every batch tested before release'
    },
    {
      metric: 'Rejection Rate',
      value: '< 0.5%',
      description: 'Industry-leading quality control'
    },
    {
      metric: 'Lab Turnaround',
      value: '24-48 hrs',
      description: 'Quick quality verification'
    },
    {
      metric: 'Traceability',
      value: 'Farm to Fork',
      description: 'Complete supply chain tracking'
    }
  ];

  const testParameters = [
    'Moisture Content',
    'Microbial Count (TPC)',
    'E. coli & Salmonella',
    'Yeast & Mold',
    'Heavy Metals (Pb, As, Hg, Cd)',
    'Pesticide Residues',
    'Aflatoxins',
    'Mesh Size Distribution',
    'pH Value',
    'Water Activity (aw)',
    'Nutritional Profile',
    'Sensory Evaluation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Quality Assurance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certified excellence at every stage. Our commitment to quality is backed by international certifications and rigorous testing protocols.
          </p>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Quality by Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {qualityMetrics.map((item) => (
              <div key={item.metric} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-[#2D5016] mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{item.metric}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Validated by international regulatory bodies and certification agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.number}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#2D5016] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-[#2D5016] mb-2">{cert.name}</h3>
                <div className="text-sm text-gray-600 mb-3">{cert.description}</div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Certificate No:</span>
                    <span className="font-semibold text-gray-800">{cert.number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Valid Until:</span>
                    <span className="font-semibold text-green-600">{cert.validUntil}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Issued by:</div>
                  <div className="text-sm font-medium text-gray-700">{cert.issuer}</div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors inline-flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testing Parameters */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <FileCheck className="w-12 h-12 mx-auto mb-4 text-[#2D5016]" />
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
              Comprehensive Testing
            </h2>
            <p className="text-xl text-gray-600">
              Every batch undergoes rigorous laboratory testing for safety and quality
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#2D5016] mb-6">
              Standard Test Parameters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testParameters.map((param) => (
                <div
                  key={param}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{param}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] rounded-xl text-white">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">NABL-Equipped Laboratory</h4>
                  <p className="text-gray-300">
                    Our in-house laboratory is equipped with modern testing instruments and follows
                    NABL (National Accreditation Board for Testing and Calibration Laboratories) protocols.
                    We maintain stringent quality control at every stage of production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Download */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#2D5016] mb-4">
                Download Our Quality Documentation
              </h2>
              <p className="text-gray-600">
                Access our complete quality assurance documents and certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Complete Certificate Pack</div>
                <div className="text-sm text-gray-600">All certifications in one PDF (2.5 MB)</div>
              </button>

              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Quality Manual</div>
                <div className="text-sm text-gray-600">Detailed QA procedures (3.1 MB)</div>
              </button>

              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Sample COA</div>
                <div className="text-sm text-gray-600">Certificate of Analysis template (450 KB)</div>
              </button>

              <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#2D5016] text-left">
                <Download className="w-8 h-8 text-[#2D5016] mb-3" />
                <div className="font-bold text-gray-800 mb-1">Specification Sheets</div>
                <div className="text-sm text-gray-600">All product specs (1.8 MB)</div>
              </button>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                📧 For access to documents, please provide your business email. Documents will be sent within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-br from-[#2D5016] to-[#1A2F0D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Questions About Our Quality Standards?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our quality team is ready to answer your technical questions
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#FFD93D] text-[#2D5016] font-semibold rounded-lg hover:bg-[#FFC93D] transition-colors"
          >
            Contact Quality Team
          </a>
        </div>
      </div>
    </div>
  );
}
