import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, ChevronDown, Eye, Zap } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import { useState } from 'react';
import glaucomaImage from '@assets/Glaucoma_Mangement_1766232216461.jpg';

const CITY = 'Chhatrapati Sambhajinagar';
const HOSPITAL_NAME = 'Gore Netralaya';

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

export default function GlaucomaManagement() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: HOSPITAL_NAME,
    description: `Advanced Glaucoma Management in ${CITY}`,
    offers: {
      '@type': 'MedicalService',
      name: 'Glaucoma Management',
      serviceType: 'Medical & Surgical Treatment',
      areaServed: { '@type': 'City', name: CITY },
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is glaucoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Glaucoma is an eye disease characterized by elevated intraocular pressure that damages the optic nerve, often without symptoms until significant vision loss occurs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is glaucoma preventable?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While glaucoma cannot be prevented, early detection and treatment can stop or slow progression. Regular eye exams are essential.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can glaucoma be cured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Glaucoma cannot be cured, but treatment can halt progression and preserve remaining vision. Early intervention is key.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does glaucoma cause symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most forms of glaucoma have no early symptoms. Vision loss may go unnoticed until significant damage occurs, which is why screening is crucial.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are glaucoma treatment options?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Treatment includes eye drops, laser procedures, and surgery, all designed to reduce intraocular pressure and protect the optic nerve.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is at risk for glaucoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Risk factors include elevated eye pressure, family history, age over 60, diabetes, and certain ethnicities. Regular screening is important.',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title={`Glaucoma Management in ${CITY} | Early Detection & Treatment`}
        description={`Expert glaucoma care in ${CITY} with advanced diagnostics and treatment. Early detection prevents vision loss. Schedule your eye pressure screening today.`}
        image="https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg"
        schema={schema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-700 to-cyan-600 text-white -mt-20 pt-40">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Glaucoma Management</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Early detection and advanced treatment to preserve your vision
            </p>
          </div>
        </section>

        {/* Understanding */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding Glaucoma</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Glaucoma is an eye disease characterized by damage to the optic nerve, usually caused by elevated intraocular pressure. The optic nerve transmits images to your brain, so damage leads to vision loss.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The insidious nature of most glaucomas is that they develop without warning signs. Many people don't realize they have glaucoma until significant vision loss has already occurred.
                </p>
                <p className="text-lg text-gray-700">
                  The good news: With early detection and appropriate treatment, we can halt or slow progression and preserve your remaining vision.
                </p>
              </div>
              <img
                src={glaucomaImage}
                alt="Advanced glaucoma diagnostic equipment at eye hospital in Chhatrapati Sambhajinagar"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Risk & Symptoms */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-lg border-l-4 border-emerald-600 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <div className="bg-emerald-600 text-white p-2 rounded-lg">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  Risk Factors
                </h3>
                <ul className="space-y-3">
                  {[
                    'Age over 60 (increases significantly)',
                    'Elevated intraocular pressure',
                    'Family history of glaucoma',
                    'African descent or Hispanic origin',
                    'Diabetes or high blood pressure',
                    'Myopia (nearsightedness)',
                    'Previous eye injury or surgery',
                  ].map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 p-8 rounded-lg border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <div className="bg-cyan-600 text-white p-2 rounded-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                  Early Detection Matters
                </h3>
                <p className="text-gray-700 mb-4">
                  Most glaucomas have no early symptoms. Vision loss occurs gradually and may go unnoticed until significant damage has occurred.
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-cyan-300 mb-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-900 font-semibold">
                      This is why regular eye exams are critical, especially if you have risk factors.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  If caught early, treatment can prevent vision loss. Your eye pressure will be measured, and your optic nerve will be examined regularly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types & Treatment */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Treatment Approaches</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Medical Management',
                  desc: 'Prescription eye drops that reduce intraocular pressure. First-line treatment for most glaucoma patients.',
                },
                {
                  title: 'Laser Treatment',
                  desc: 'Targeted laser procedures that improve fluid drainage or reduce fluid production in the eye.',
                },
                {
                  title: 'Surgical Options',
                  desc: 'Advanced surgical procedures like trabeculectomy create alternative drainage pathways for fluid.',
                },
              ].map((treatment, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg border border-emerald-200 hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{treatment.title}</h3>
                  <p className="text-gray-700">{treatment.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Technology */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Advanced Diagnostics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Tonometry',
                  desc: 'Measures intraocular pressure, the key indicator for glaucoma risk and treatment effectiveness.',
                },
                {
                  title: 'Optical Coherence Tomography (OCT)',
                  desc: 'Creates detailed 3D images of the optic nerve to detect early damage and monitor changes.',
                },
                {
                  title: 'Visual Field Testing',
                  desc: 'Maps your complete vision to detect any areas of vision loss caused by glaucoma.',
                },
                {
                  title: 'Gonioscopy',
                  desc: 'Examines the drainage angle of your eye to determine the type of glaucoma.',
                },
              ].map((diagnostic, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-lg border border-emerald-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{diagnostic.title}</h3>
                  <p className="text-gray-700">{diagnostic.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
            <FAQAccordion 
              faqs={[
                {
                  q: 'What is glaucoma?',
                  a: 'Glaucoma is characterized by elevated eye pressure that damages the optic nerve. This damage leads to vision loss if untreated.',
                },
                {
                  q: 'Can glaucoma be prevented?',
                  a: 'While it cannot be prevented, early detection and treatment can stop or significantly slow progression.',
                },
                {
                  q: 'Are there early warning signs?',
                  a: 'Most types have no early symptoms, which is why regular screening is essential, especially for at-risk individuals.',
                },
                {
                  q: 'How often should I be screened?',
                  a: 'People over 60, with family history, or with elevated pressure should have annual screening. Others should be screened every 2-3 years.',
                },
                {
                  q: 'Are the treatments effective?',
                  a: 'Yes, treatment is very effective at halting or slowing glaucoma progression when started early.',
                },
                {
                  q: 'Will I need surgery?',
                  a: 'Many patients are managed with drops or laser treatment. Surgery is reserved for cases not controlled with other treatments.',
                },
              ]}
              accentColor="emerald"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Don't Lose Your Sight to Glaucoma</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Get screened today. Early detection can save your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all transform hover:scale-105"
            >
              <span>Schedule Screening</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
