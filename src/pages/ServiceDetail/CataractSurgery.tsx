import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle, ChevronDown } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import { useState } from 'react';
import cataractImage from '@assets/stock_images/cataract_custom.jpg';
import whoNeedsCataractImage from '@assets/Who_Needs_Cataract_Surgery_1766232876891.jpg';

const CITY = 'Chhatrapati Sambhajinagar';
const HOSPITAL_NAME = 'Gore Netralaya and Laser Centre';

function FAQAccordion({ faqs, accentColor }: { faqs: any[]; accentColor: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-200 hover:border-blue-300',
    emerald: 'bg-emerald-50 border-emerald-200 hover:border-emerald-300',
    indigo: 'bg-indigo-50 border-indigo-200 hover:border-indigo-300',
  };
  const accentTextClass: Record<string, string> = {
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
    indigo: 'text-indigo-600',
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className={`border rounded-lg transition-all duration-200 ${
            colorClasses[accentColor] || colorClasses.blue
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/50 transition-colors"
            data-testid={`button-faq-toggle-${idx}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
            <ChevronDown
              className={`w-5 h-5 ${accentTextClass[accentColor] || accentTextClass.blue} flex-shrink-0 transition-transform duration-300 ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 pt-0 text-gray-700 border-t border-current border-opacity-10">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CataractSurgery() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: HOSPITAL_NAME,
    description: `Professional Cataract Surgery in ${CITY}`,
    offers: {
      '@type': 'MedicalService',
      name: 'Cataract Surgery',
      serviceType: 'Surgical Treatment',
      areaServed: {
        '@type': 'City',
        name: CITY,
      },
      provider: {
        '@type': 'MedicalBusiness',
        name: HOSPITAL_NAME,
      },
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is cataract surgery safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, cataract surgery is one of the safest and most effective surgical procedures. Modern techniques like phacoemulsification have success rates exceeding 95% with minimal complications.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does cataract surgery take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The procedure typically takes 15-20 minutes per eye. You\'ll be in the operating room for about 30 minutes total including preparation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is cataract surgery painful?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, the eye is numbed with anesthetic drops before surgery, so you won\'t feel pain. You may feel slight pressure, but it\'s painless.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you go home the same day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, cataract surgery is typically done as a day procedure. Most patients can go home the same day with proper post-operative care.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the recovery time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients experience improved vision within a few days. Complete recovery usually takes 4-6 weeks, though vision continues to improve gradually.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my insurance cover cataract surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most insurance plans cover medically necessary cataract surgery. Premium IOL options may have additional costs. Contact us for insurance verification.',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title={`Cataract Surgery in ${CITY} | ${HOSPITAL_NAME}`}
        description={`Expert cataract surgery in ${CITY} using advanced phacoemulsification technology. Same-day discharge, premium IOL options, and quick recovery. Schedule your consultation today.`}
        image="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg"
        schema={schema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 text-white -mt-20 pt-40">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cataract Surgery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Restore your vision with advanced phacoemulsification technology and same-day discharge
            </p>
          </div>
        </section>

        {/* What is Cataract Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">What is Cataract Surgery?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  A cataract is a clouding of the eye's natural lens that develops over time, usually due to aging. When the lens becomes cloudy, light cannot pass through clearly, leading to blurred vision and difficulty seeing at night.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Cataract surgery is a minimally invasive procedure where our ophthalmologists remove the cloudy lens and replace it with a clear artificial lens implant (IOL). This restoration of clarity happens quickly, often within a few days.
                </p>
                <p className="text-lg text-gray-700">
                  Using advanced phacoemulsification technology, we create a tiny incision (usually 2-3mm), allowing for quicker healing and better outcomes compared to traditional surgical methods.
                </p>
              </div>
              <img
                src={cataractImage}
                alt="Advanced cataract surgery equipment at eye hospital in Chhatrapati Sambhajinagar"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Who Needs This Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src={whoNeedsCataractImage}
                alt="Who needs cataract surgery symptoms and indicators"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-4xl font-bold mb-2 text-gray-900">Who Needs Cataract Surgery?</h2>
                <p className="text-lg text-blue-600 font-semibold mb-8">
                  You might benefit from cataract surgery if you experience any of these symptoms:
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-100 mb-8">
                  <ul className="space-y-4">
                    {[
                      'Blurred or cloudy vision in one or both eyes',
                      'Difficulty seeing at night or in dim lighting',
                      'Frequent changes in eyeglass prescription',
                      'Sensitivity to light and glare',
                      'Colors appearing faded or yellowed',
                      'Trouble reading or doing detailed work',
                      'Difficulty driving safely, especially at night',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold text-blue-600 mb-2">
                    Important Note
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    Most cataracts develop after <span className="font-bold text-blue-700">age 60</span>, though they can occur at any age. <span className="font-semibold">If your cataract is affecting your daily activities and quality of life, surgery might be the right choice for you.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">How the Procedure Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Preparation',
                  desc: 'You\'ll receive numbing eye drops and be positioned comfortably. A surgical drape will cover your face, and an eyelid holder keeps your eye open.',
                },
                {
                  step: '2',
                  title: 'Incision',
                  desc: 'A tiny 2-3mm incision is made in the cornea. This small opening allows instruments to access the lens without requiring stitches.',
                },
                {
                  step: '3',
                  title: 'Lens Removal',
                  desc: 'Using phacoemulsification, ultrasound energy gently breaks up the cloudy lens into small fragments. These are then carefully removed by suction.',
                },
                {
                  step: '4',
                  title: 'IOL Insertion',
                  desc: 'A premium intraocular lens (IOL) is inserted through the tiny incision, replacing your natural lens permanently.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
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
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Benefits of Surgery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Immediate Vision Improvement', desc: 'Most patients notice clearer vision within days of surgery.' },
                { title: 'Same-Day Discharge', desc: 'Walk in and out the same day—no overnight hospital stay required.' },
                { title: 'Minimal Discomfort', desc: 'The procedure is painless with only mild pressure sensations.' },
                { title: 'Reduced Glare', desc: 'Enjoy clearer night vision and reduced sensitivity to light.' },
                { title: 'Personalized IOL Options', desc: 'Choose from premium lenses tailored to your lifestyle needs.' },
                { title: 'Long-Lasting Results', desc: 'The artificial lens is permanent and won\'t develop cataracts again.' },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Safety */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Technology & Safety Standards</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Advanced Technology</h3>
                <ul className="space-y-4">
                  {[
                    'Phacoemulsification machines with real-time monitoring',
                    'Optical Coherence Tomography (OCT) for precise measurements',
                    'Advanced intraocular lens technology',
                    'Sterile operating environments meeting international standards',
                  ].map((tech, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Safety Measures</h3>
                <ul className="space-y-4">
                  {[
                    'Experienced ophthalmologists with years of training',
                    'Comprehensive pre-operative eye examinations',
                    'Personalized IOL selection based on your vision needs',
                    'Detailed post-operative care instructions and follow-ups',
                  ].map((safety, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{safety}</span>
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
            <FAQAccordion 
              faqs={[
                {
                  q: 'Is cataract surgery safe?',
                  a: 'Absolutely. Cataract surgery is one of the most common and safest surgical procedures performed worldwide. Success rates exceed 95% with modern techniques.',
                },
                {
                  q: 'How long does the procedure take?',
                  a: 'The actual surgery takes about 15-20 minutes per eye. You\'ll spend about 30 minutes in the operating room including preparation and post-op observation.',
                },
                {
                  q: 'Is the surgery painful?',
                  a: 'No. Numbing drops are applied, and you won\'t feel pain—only mild pressure sensations. Tell your surgeon immediately if you experience any discomfort.',
                },
                {
                  q: 'Can I go home the same day?',
                  a: 'Yes! Cataract surgery is typically an outpatient procedure. You\'ll go home a few hours after surgery with a friend or family member to drive you.',
                },
                {
                  q: 'What is the recovery time?',
                  a: 'Vision improves within days, and most people see well within 1-2 weeks. Full healing takes about 4-6 weeks.',
                },
                {
                  q: 'What are the IOL options?',
                  a: 'We offer standard, premium, and specialty lenses including multifocal and toric options. Your surgeon will recommend the best option for your needs.',
                },
              ]}
              accentColor="blue"
            />
          </div>
        </section>

        {/* When to Consult */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">When Should You Consult a Doctor?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Schedule a consultation if you have:</h3>
                <ul className="space-y-3">
                  {[
                    'Persistent blurred or cloudy vision',
                    'Difficulty with night driving',
                    'Frequent eyeglass prescription changes',
                    'Glare sensitivity affecting daily activities',
                    'Trouble reading or watching TV',
                    'Faded color perception',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-semibold mb-4">Don't wait for vision loss</h3>
                <p className="mb-4 text-blue-50">
                  Early detection and treatment lead to better outcomes. During your consultation, we'll perform a comprehensive eye examination to determine if surgery is right for you.
                </p>
                <p className="mb-6 text-blue-50">
                  Our specialists will discuss all options, answer your questions, and create a personalized treatment plan.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
                { title: 'LASIK & Refractive Surgery', link: '/services/lasik-refractive-surgery' },
                { title: 'Cornea Services', link: '/services/cornea-services' },
                { title: 'Retina Services', link: '/services/retina-services' },
              ].map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Restore Your Vision?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book your free consultation with our experienced ophthalmologists in {CITY} today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <span>Schedule Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
