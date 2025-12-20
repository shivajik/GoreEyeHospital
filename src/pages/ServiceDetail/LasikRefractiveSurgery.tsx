import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

const CITY = 'Chhatrapati Sambhajinagar';
const HOSPITAL_NAME = 'Gore Netralaya';

export default function LasikRefractiveSurgery() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: HOSPITAL_NAME,
    description: `LASIK & Refractive Surgery in ${CITY}`,
    offers: {
      '@type': 'MedicalService',
      name: 'LASIK & Refractive Surgery',
      serviceType: 'Surgical Treatment',
      areaServed: {
        '@type': 'City',
        name: CITY,
      },
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is LASIK surgery safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, LASIK is FDA-approved and one of the safest elective procedures available, with success rates above 95%.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does LASIK take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The actual LASIK procedure takes about 10-15 minutes per eye, though you\'ll spend about 30 minutes at the clinic.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is LASIK painful?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, numbing drops ensure you feel no pain, only light pressure. You may feel mild discomfort during healing.',
          },
        },
        {
          '@type': 'Question',
          name: 'When can I see clearly after LASIK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vision improves significantly within 24 hours and stabilizes within 3-6 months as the cornea continues healing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do LASIK results last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LASIK results are permanent. Your vision may change naturally with age, similar to people without LASIK.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is a good candidate for LASIK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally, adults 18+ with stable vision and good eye health are candidates. A comprehensive eye exam determines your suitability.',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title={`LASIK & Refractive Surgery in ${CITY} | ${HOSPITAL_NAME}`}
        description={`Achieve freedom from glasses with advanced LASIK surgery in ${CITY}. Bladeless technology, customized treatment, and lifetime care. Trusted eye specialists.`}
        image="https://images.pexels.com/photos/3808221/pexels-photo-3808221.jpeg"
        schema={schema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white -mt-20 pt-40">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">LASIK & Refractive Surgery in {CITY}</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Freedom from glasses with advanced bladeless LASIK technology and lifetime care
            </p>
          </div>
        </section>

        {/* What is LASIK Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">What is LASIK Surgery?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  LASIK (Laser-Assisted In Situ Keratomileusis) is a refractive surgery that corrects your eyes' focusing ability, eliminating the need for glasses or contact lenses. The procedure uses an excimer laser to reshape your cornea, the clear front surface of your eye.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Unlike glasses that simply bend light entering your eye, LASIK permanently changes the shape of your cornea so light focuses correctly on the retina. This addresses refractive errors like myopia (nearsightedness), hyperopia (farsightedness), and astigmatism.
                </p>
                <p className="text-lg text-gray-700">
                  Our bladeless LASIK technique uses a femtosecond laser to create a precise corneal flap, allowing for customized vision correction tailored to your unique eye characteristics.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/3808221/pexels-photo-3808221.jpeg"
                alt="Advanced LASIK surgery equipment at eye hospital in Chhatrapati Sambhajinagar"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Who Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.pexels.com/photos/3808204/pexels-photo-3808204.jpeg"
                alt="Patient undergoing LASIK vision correction in Chhatrapati Sambhajinagar"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Who Can Benefit from LASIK?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  LASIK is ideal for people who:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Are at least 18 years old with stable vision',
                    'Have healthy eyes without disease',
                    'Wear glasses or contact lenses',
                    'Are tired of the hassle and cost of corrective lenses',
                    'Want to improve their quality of life',
                    'Have realistic expectations about outcomes',
                    'Are willing to follow post-operative care instructions',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-gray-700">
                  A comprehensive eye examination will determine if you're a suitable candidate for LASIK.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">How LASIK Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Consultation',
                  desc: 'Comprehensive eye measurements and evaluation to determine your prescription and corneal shape using advanced imaging.',
                },
                {
                  step: '2',
                  title: 'Flap Creation',
                  desc: 'Using femtosecond laser technology, a thin protective flap is created on your cornea with precision.',
                },
                {
                  step: '3',
                  title: 'Laser Reshaping',
                  desc: 'The excimer laser gently reshapes your cornea to correct your refractive error, taking just 30-60 seconds per eye.',
                },
                {
                  step: '4',
                  title: 'Flap Replacement',
                  desc: 'The corneal flap is carefully replaced and naturally seals within minutes without requiring stitches.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Why Choose LASIK</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Quick Results', desc: 'See improved vision within 24 hours and stable vision within weeks.' },
                { title: 'Permanent Results', desc: 'Vision correction lasts a lifetime without maintenance costs.' },
                { title: 'Minimal Downtime', desc: 'Return to normal activities within days, not weeks.' },
                { title: 'No Glasses or Contacts', desc: 'Enjoy freedom from daily lens care and eyeglass frames.' },
                { title: 'Cost Effective', desc: 'Save thousands over your lifetime by eliminating lens expenses.' },
                { title: 'High Satisfaction', desc: 'Over 95% of patients achieve 20/20 or better vision.' },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Technology */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Advanced Technology</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Bladeless LASIK Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Femtosecond laser creates precise, uniform corneal flap',
                    'Greater corneal thickness preservation',
                    'Reduced risk of complications',
                    'Better predictability and outcomes',
                    'Suitable for more patients including thin corneas',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Customized Treatment</h3>
                <ul className="space-y-4">
                  {[
                    'Wavefront-guided technology for personalized correction',
                    'Advanced topography mapping for precise reshaping',
                    'Real-time eye tracking during surgery',
                    'Treatment optimized to your unique corneal characteristics',
                    'Minimal side effects like halos or glare',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'Is LASIK surgery safe?',
                  a: 'Yes, LASIK is FDA-approved and one of the safest elective surgical procedures available. Complications are rare, and most are mild and treatable.',
                },
                {
                  q: 'How long does LASIK take?',
                  a: 'The actual laser treatment takes 10-15 minutes per eye. Your complete appointment will be about 30 minutes.',
                },
                {
                  q: 'Does LASIK hurt?',
                  a: 'No, numbing drops eliminate pain. You may feel light pressure, but it\'s painless. Mild discomfort may occur during healing, manageable with prescribed drops.',
                },
                {
                  q: 'When will I see clearly?',
                  a: 'Most people see significant improvement within 24 hours. Vision continues improving over 3-6 months as the eye heals completely.',
                },
                {
                  q: 'Will my vision change after LASIK?',
                  a: 'LASIK results are permanent. Your vision may change naturally with age, as it would without LASIK, but the laser correction itself is permanent.',
                },
                {
                  q: 'What\'s the success rate?',
                  a: 'Over 95% of patients achieve 20/20 vision or better after LASIK. The vast majority are satisfied with their results.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready for Clear Vision?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Schedule Your Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Our specialists will perform a comprehensive evaluation to determine if you're a candidate for LASIK and discuss your vision goals.
                </p>
                <p className="text-gray-700 mb-6">
                  During the consultation, we'll answer all your questions and explain what to expect before, during, and after surgery.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-purple-50">
                  {[
                    '• Comprehensive eye examination (1 hour)',
                    '• Advanced corneal imaging and measurements',
                    '• Discussion of your vision goals',
                    '• Treatment options and pricing',
                    '• Answer to all your questions',
                    '• Easy scheduling if you choose LASIK',
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Cataract Surgery', link: '/services/cataract-surgery' },
                { title: 'Cornea Services', link: '/services/cornea-services' },
                { title: 'Comprehensive Eye Exams', link: '/services/glaucoma-management' },
              ].map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">See the World Clearly</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Experience the freedom of life without glasses or contacts.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all transform hover:scale-105"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
