import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle, ChevronDown } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import { useState } from 'react';
import retinaImage from '@assets/stock_images/retina_services_custom.jpg';

const CITY = 'Chhatrapati Sambhajinagar';
const HOSPITAL_NAME = 'Gore Netralaya and Laser Centre';

function FAQAccordion({ faqs, accentColor }: { faqs: any[]; accentColor: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-200 hover:border-blue-300',
    emerald: 'bg-emerald-50 border-emerald-200 hover:border-emerald-300',
    indigo: 'bg-indigo-50 border-indigo-200 hover:border-indigo-300',
    purple: 'bg-purple-50 border-purple-200 hover:border-purple-300',
    orange: 'bg-orange-50 border-orange-200 hover:border-orange-300',
  };
  const accentTextClass: Record<string, string> = {
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
    indigo: 'text-indigo-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
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

export default function RetinaServices() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: HOSPITAL_NAME,
    description: `Comprehensive Retina Services in ${CITY}`,
    offers: {
      '@type': 'MedicalService',
      name: 'Retina Services',
      serviceType: 'Medical & Surgical Treatment',
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
          name: 'What is diabetic retinopathy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diabetic retinopathy is an eye disease caused by diabetes, where high blood sugar damages blood vessels in the retina.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can retinal problems be treated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, many retinal conditions can be effectively treated with modern therapies including laser surgery, injections, and vitreo-retinal surgery.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are signs of retinal problems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Signs include floaters, flashes of light, blurred vision, dark spots, and visual field loss. Seek immediate care if you experience these.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is retinal surgery dangerous?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Modern retinal surgery is safe with success rates above 90%. Specialists use advanced techniques and equipment to minimize risks.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is diabetic retinopathy prevented?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Control blood sugar, blood pressure, and cholesterol levels. Regular eye exams are crucial for early detection and treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is an anti-VEGF injection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anti-VEGF injections block a protein that promotes abnormal blood vessel growth, treating macular edema and neovascular diseases.',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title={`Retina Services in ${CITY} | Diabetic Retinopathy Treatment`}
        description={`Expert retina care including diabetic retinopathy treatment in ${CITY}. Advanced vitreo-retinal surgery, anti-VEGF injections, and retinal imaging. Call us today.`}
        image="/og-image.png"
        schema={schema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-red-900 via-red-700 to-orange-600 text-white -mt-20 pt-40">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Retina Services</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Comprehensive retinal care including diabetic retinopathy treatment with advanced diagnostic tools
            </p>
          </div>
        </section>

        {/* Understanding the Retina */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding Your Retina</h2>
                <p className="text-lg text-gray-700 mb-4">
                  The retina is the light-sensitive tissue lining the back of your eye that captures images and sends them to the brain via the optic nerve. When the retina is healthy, your vision is clear and vibrant.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Retinal diseases can significantly impact your vision. Common conditions include diabetic retinopathy, macular degeneration, retinal detachment, and retinal tears. Early detection and treatment are crucial for preserving vision.
                </p>
                <p className="text-lg text-gray-700">
                  Our specialized team of retinal experts uses state-of-the-art diagnostic equipment and treatment methods to address retinal conditions and restore or maintain your vision.
                </p>
              </div>
              <img
                src={retinaImage}
                alt="Advanced retina diagnostic equipment at eye hospital in Chhatrapati Sambhajinagar"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Retinal Conditions We Treat</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Diabetic Retinopathy',
                  desc: 'Caused by diabetes, this condition damages blood vessels in the retina. Early treatment can prevent severe vision loss.',
                },
                {
                  title: 'Macular Edema',
                  desc: 'Fluid accumulation in the macula causes blurred vision. We offer laser treatment and anti-VEGF injections.',
                },
                {
                  title: 'Retinal Detachment',
                  desc: 'The retina separates from eye tissues, causing sudden vision changes. Emergency surgical treatment is often needed.',
                },
                {
                  title: 'Age-Related Macular Degeneration',
                  desc: 'Progressive vision loss due to aging. We provide treatments to slow progression and preserve remaining vision.',
                },
                {
                  title: 'Retinal Tears & Holes',
                  desc: 'Small breaks in the retina can lead to detachment. Laser treatment can seal these areas before they worsen.',
                },
                {
                  title: 'Proliferative Vitreoretinopathy',
                  desc: 'Scar tissue formation on the retina requires advanced vitreo-retinal surgery to restore vision.',
                },
              ].map((condition, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{condition.title}</h3>
                  <p className="text-gray-700">{condition.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Symptoms & When to Seek Care */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Warning Signs</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Seek immediate care if you experience:
                </p>
                <ul className="space-y-3">
                  {[
                    'Sudden onset of floaters (small dots in vision)',
                    'Flashes of light in peripheral vision',
                    'Sudden vision loss or blurriness',
                    'Dark or blank spots in your vision',
                    'Distorted or wavy vision',
                    'Difficulty seeing at night',
                    'Halo around lights',
                    'Shadow or curtain descending in vision',
                  ].map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Risk Factors</h2>
                <p className="text-lg text-gray-700 mb-6">
                  You have higher risk if you have:
                </p>
                <ul className="space-y-3">
                  {[
                    'Diabetes (especially uncontrolled)',
                    'High blood pressure',
                    'High cholesterol',
                    'Advanced age (65+)',
                    'Family history of retinal disease',
                    'Severe myopia (nearsightedness)',
                    'History of eye injury or surgery',
                    'Smoking habit',
                  ].map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Treatment Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Laser Treatment',
                  icon: '🔆',
                  desc: 'Focuses precise laser energy to seal bleeding vessels or destroy abnormal tissues.',
                },
                {
                  title: 'Anti-VEGF Injections',
                  icon: '💉',
                  desc: 'Blocks growth factors that promote abnormal blood vessels and fluid accumulation.',
                },
                {
                  title: 'Vitreo-Retinal Surgery',
                  icon: '🔬',
                  desc: 'Advanced surgical techniques to repair retinal detachment, remove scar tissue, or address complex retinal conditions.',
                },
              ].map((treatment, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border border-red-100 text-center">
                  <div className="text-5xl mb-4">{treatment.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{treatment.title}</h3>
                  <p className="text-gray-700">{treatment.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Diagnostics */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Advanced Diagnostic Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Optical Coherence Tomography (OCT)',
                  items: [
                    'Creates detailed cross-sectional images of the retina',
                    'Detects fluid and swelling in retinal layers',
                    'Monitors treatment response and progression',
                    'Non-invasive and takes just seconds',
                  ],
                },
                {
                  title: 'Fundus Photography',
                  items: [
                    'High-resolution images of the retina',
                    'Documents retinal health over time',
                    'Helps diagnose and monitor diseases',
                    'Creates permanent medical record for comparison',
                  ],
                },
                {
                  title: 'Fluorescein Angiography',
                  items: [
                    'Identifies leaking blood vessels',
                    'Shows areas of ischemia and swelling',
                    'Essential for diabetic retinopathy assessment',
                    'Guides treatment planning and monitoring',
                  ],
                },
                {
                  title: 'Ultrasound Imaging',
                  items: [
                    'Views structures when media is clouded',
                    'Detects retinal detachment and masses',
                    'Non-invasive and safe',
                    'Important for dense cataract evaluation',
                  ],
                },
              ].map((diagnostic, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-red-100">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{diagnostic.title}</h3>
                  <ul className="space-y-2">
                    {diagnostic.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diabetic Retinopathy Focus */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Managing Diabetic Retinopathy</h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                If you have diabetes, your risk of developing eye disease is significant. Diabetic retinopathy affects millions worldwide and is a leading cause of blindness in working-age adults.
              </p>
              <p className="text-lg text-gray-700">
                The good news: Early detection and treatment can prevent 95% of vision loss from diabetic retinopathy. Regular eye exams and good blood sugar control are your best defenses.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Prevention Tips</h3>
                <ul className="space-y-3">
                  {[
                    'Monitor and control blood sugar levels',
                    'Keep blood pressure under control',
                    'Maintain healthy cholesterol levels',
                    'Exercise regularly and maintain healthy weight',
                    'Don\'t smoke and limit alcohol',
                    'Take medications as prescribed',
                    'Attend annual eye exams',
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Treatment Effectiveness</h3>
                <ul className="space-y-3">
                  {[
                    'Laser treatment prevents progression in 95% of cases',
                    'Anti-VEGF injections improve vision in many patients',
                    'Early intervention preserves vision significantly',
                    'Combination therapies offer best outcomes',
                    'Regular monitoring prevents complications',
                    'Modern treatments are minimally invasive',
                    'Outcomes improve with early detection',
                  ].map((effectiveness, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{effectiveness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
            <FAQAccordion 
              faqs={[
                {
                  q: 'What is diabetic retinopathy?',
                  a: 'It\'s an eye disease caused by diabetes where high blood sugar damages blood vessels in the retina. It progresses in stages and can lead to vision loss if untreated.',
                },
                {
                  q: 'Can retinal problems be treated?',
                  a: 'Yes, many conditions can be effectively treated, especially when caught early. Laser surgery, injections, and vitreo-retinal surgery are common treatments.',
                },
                {
                  q: 'Is retinal surgery dangerous?',
                  a: 'Modern retinal surgery is safe with success rates above 90%. Our specialists use advanced techniques to minimize risks and optimize outcomes.',
                },
                {
                  q: 'How is diabetic retinopathy prevented?',
                  a: 'Control blood sugar, blood pressure, and cholesterol. Don\'t smoke, exercise regularly, and have annual eye exams for early detection.',
                },
                {
                  q: 'What happens during retinal surgery?',
                  a: 'The surgeon carefully repairs retinal damage using specialized instruments under an operating microscope, often through very small incisions.',
                },
                {
                  q: 'How long is recovery after retinal surgery?',
                  a: 'Recovery varies by procedure complexity. Most patients see improvement within weeks, though complete healing can take several months.',
                },
              ]}
              accentColor="orange"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Protect Your Sight</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Schedule a Retinal Examination</h3>
                <p className="text-gray-700 mb-4">
                  If you have diabetes, experienced vision changes, or have risk factors for retinal disease, don't wait. Early detection is crucial.
                </p>
                <p className="text-gray-700 mb-6">
                  Our retinal specialists will perform a comprehensive evaluation to assess your eye health and recommend appropriate treatment.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
                >
                  Schedule Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-semibold mb-4">Why Choose Our Retina Specialists</h3>
                <ul className="space-y-3 text-red-50">
                  {[
                    '• Specialized training in retinal diseases',
                    '• Latest diagnostic and treatment technology',
                    '• Experience with complex cases',
                    '• Personalized treatment plans',
                    '• Compassionate patient care',
                    '• Long-term vision preservation focus',
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Glaucoma Management', link: '/services/glaucoma-management' },
                { title: 'Cataract Surgery', link: '/services/cataract-surgery' },
                { title: 'Comprehensive Eye Exams', link: '/services/pediatric-ophthalmology' },
              ].map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="bg-white p-6 rounded-lg border border-red-100 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-red-600 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
