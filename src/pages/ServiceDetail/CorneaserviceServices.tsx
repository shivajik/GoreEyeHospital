import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import cornealImage from '@assets/Cornea_Services_1766232216463.jpg';

const CITY = 'Chhatrapati Sambhajinagar';
const HOSPITAL_NAME = 'Gore Netralaya and Laser Centre';

export default function CorneaserviceServices() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: HOSPITAL_NAME,
    description: `Expert Cornea Services in ${CITY}`,
    offers: {
      '@type': 'MedicalService',
      name: 'Cornea Services',
      serviceType: 'Surgical Treatment',
      areaServed: { '@type': 'City', name: CITY },
    },
  };

  return (
    <>
      <SEOHead
        title={`Cornea Services in ${CITY} | Keratoconus & Corneal Transplant`}
        description={`Expert corneal care in ${CITY} including corneal transplant, keratoconus treatment, and dry eye management. Advanced surgical expertise.`}
        image="https://images.pexels.com/photos/3808214/pexels-photo-3808214.jpeg"
        schema={schema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-indigo-700 to-blue-600 text-white -mt-20 pt-40">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cornea Services in {CITY}</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Expert treatment for corneal disorders, transplantation, and keratoconus
            </p>
          </div>
        </section>

        {/* Understanding */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding the Cornea</h2>
                <p className="text-lg text-gray-700 mb-4">
                  The cornea is the clear front part of your eye that covers the iris, pupil, and lens. It focuses light onto the retina and protects your eye from debris, germs, and other harmful substances.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  When the cornea is damaged by disease, injury, or degenerative conditions, it affects your vision. Our corneal specialists have expertise in diagnosing and treating even complex corneal conditions.
                </p>
                <p className="text-lg text-gray-700">
                  From keratoconus to corneal scarring, from dry eye to the need for transplantation, we provide comprehensive solutions.
                </p>
              </div>
              <img
                src={cornealImage}
                alt="Advanced corneal surgical equipment at eye hospital in Chhatrapati Sambhajinagar"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Corneal Conditions We Treat</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Keratoconus',
                  desc: 'Progressive thinning of the cornea that causes blurred vision. We offer management from glasses to surgery.',
                },
                {
                  title: 'Corneal Scarring',
                  desc: 'Scars from injury or infection affect vision. Laser treatment or transplantation may be needed.',
                },
                {
                  title: 'Corneal Ulcers',
                  desc: 'Open sores on the cornea from infection or injury. Urgent treatment prevents permanent damage.',
                },
                {
                  title: 'Corneal Transplant',
                  desc: 'Replacing damaged cornea with donor tissue. Advanced techniques ensure excellent visual outcomes.',
                },
                {
                  title: 'Dry Eye Syndrome',
                  desc: 'Inadequate tear production or quality. Treatment ranges from lubricating drops to advanced therapies.',
                },
                {
                  title: 'Fuchs Dystrophy',
                  desc: 'Genetic condition affecting corneal endothelium. Early recognition and management preserve vision.',
                },
              ].map((condition, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{condition.title}</h3>
                  <p className="text-gray-700">{condition.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keratoconus Focus */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Managing Keratoconus</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg border-l-4 border-indigo-600 mb-8">
              <p className="text-lg text-gray-700">
                Keratoconus is a progressive condition where the cornea gradually thins and changes into a more cone-like shape. This causes progressive myopia and astigmatism, severely affecting vision.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Early Stage',
                  treatments: [
                    'Specialized glasses',
                    'Rigid contact lenses',
                    'Regular monitoring',
                  ],
                },
                {
                  title: 'Progressive Stage',
                  treatments: [
                    'Corneal cross-linking',
                    'Scleral contact lenses',
                    'Intracorneal ring implants',
                  ],
                },
                {
                  title: 'Advanced Stage',
                  treatments: [
                    'Corneal transplant',
                    'Combination therapies',
                    'Long-term management',
                  ],
                },
              ].map((stage, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border-t-4 border-indigo-600 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{stage.title}</h3>
                  <ul className="space-y-2">
                    {stage.treatments.map((treatment, tidx) => (
                      <li key={tidx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corneal Transplant */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Corneal Transplantation</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">What is Corneal Transplant?</h3>
                <p className="text-lg text-gray-700 mb-4">
                  A corneal transplant (keratoplasty) replaces a diseased or scarred cornea with healthy donor tissue. This restores vision when other treatments aren't effective.
                </p>
                <p className="text-gray-700">
                  The procedure has high success rates and can dramatically improve vision and quality of life for people with corneal disease.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Success Rates</h3>
                <div className="space-y-4">
                  {[
                    { percent: '90%', desc: 'of grafts survive 5 years' },
                    { percent: '85%', desc: 'of patients achieve improved vision' },
                    { percent: '95%', desc: 'show significant quality of life improvement' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded">
                      <div className="text-3xl font-bold text-indigo-600">{stat.percent}</div>
                      <p className="text-gray-700">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Evaluation', desc: 'Comprehensive assessment to ensure you\'re suitable for transplant' },
                { title: 'Surgery', desc: 'Precise removal and replacement with donor tissue' },
                { title: 'Recovery', desc: 'Vision gradually improves over weeks to months' },
              ].map((step, idx) => (
                <div key={idx} className="text-center bg-indigo-50 p-6 rounded-lg">
                  <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dry Eye Management */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Dry Eye Management</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Dry eye is increasingly common, especially with digital screen use. We offer comprehensive management from simple solutions to advanced treatments.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Conservative Treatment',
                  options: [
                    'Artificial tear drops',
                    'Lubricating ointments',
                    'Lifestyle modifications',
                    'Eyelid hygiene',
                  ],
                },
                {
                  title: 'Advanced Treatment',
                  options: [
                    'Punctal plugs',
                    'Meibomian gland therapy',
                    'Topical medications',
                    'Plasma-rich serum drops',
                  ],
                },
              ].map((treatment, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg border border-indigo-100">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{treatment.title}</h3>
                  <ul className="space-y-3">
                    {treatment.options.map((option, optIdx) => (
                      <li key={optIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Advanced Diagnostic Technology</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Corneal Topography',
                'Optical Coherence Tomography',
                'Specular Microscopy',
                'In-vivo Confocal Microscopy',
              ].map((tech, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-100 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Specialized Corneal Care Awaits</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our corneal specialists provide expert diagnosis and treatment for all corneal conditions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all transform hover:scale-105"
            >
              <span>Consult Our Specialists</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
