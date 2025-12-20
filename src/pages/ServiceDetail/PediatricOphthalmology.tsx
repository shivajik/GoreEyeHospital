import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Smile } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import pediatricImage from '@assets/Pediatric_Opthalmology_1766232216463.jpg';

const CITY = 'Chhatrapati Sambhajinagar';
const HOSPITAL_NAME = 'Gore Netralaya';

export default function PediatricOphthalmology() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: HOSPITAL_NAME,
    description: `Pediatric Ophthalmology Services in ${CITY}`,
    offers: {
      '@type': 'MedicalService',
      name: 'Pediatric Ophthalmology',
      serviceType: 'Child Eye Care',
      areaServed: { '@type': 'City', name: CITY },
    },
  };

  return (
    <>
      <SEOHead
        title={`Pediatric Ophthalmology in ${CITY} | Children's Eye Care Specialists`}
        description={`Expert pediatric eye care in ${CITY} with child-friendly approach. Squint correction, vision screening, and amblyopia treatment. Safe and compassionate care.`}
        image="https://images.pexels.com/photos/6285310/pexels-photo-6285310.jpeg"
        schema={schema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-pink-900 via-pink-700 to-rose-600 text-white -mt-20 pt-40">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Children's Eye Care in {CITY}</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Specialized care for children's eye health with a compassionate, child-friendly approach
            </p>
          </div>
        </section>

        {/* Why Pediatric Eye Care */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Specialized Care for Growing Eyes</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Children's eyes are different from adults' eyes and require specialized expertise. Vision development is critical in early childhood, and undetected eye problems can significantly impact learning and development.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our pediatric eye specialists have specific training in diagnosing and treating eye conditions in infants, toddlers, and children. We understand child behavior and create a comfortable, engaging environment for examinations.
                </p>
                <p className="text-lg text-gray-700">
                  Early detection of vision problems ensures your child develops normally and can see clearly to learn and play.
                </p>
              </div>
              <img
                src={pediatricImage}
                alt="Pediatric eye examination at friendly eye hospital in Chhatrapati Sambhajinagar"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Conditions We Treat</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Squint (Strabismus)',
                  desc: 'Misalignment of the eyes. Early correction prevents vision problems and improves appearance and confidence.',
                },
                {
                  title: 'Amblyopia (Lazy Eye)',
                  desc: 'Reduced vision in one eye due to poor development. Treatment must begin early for best outcomes.',
                },
                {
                  title: 'Refractive Errors',
                  desc: 'Myopia, hyperopia, and astigmatism in children. Correct prescriptions ensure clear vision for learning.',
                },
                {
                  title: 'Color Blindness',
                  desc: 'Genetic condition affecting color perception. Early identification helps with educational planning.',
                },
                {
                  title: 'Congenital Cataracts',
                  desc: 'Clouding of the lens present at birth. Prompt treatment prevents vision loss.',
                },
                {
                  title: 'Ptosis',
                  desc: 'Drooping eyelid. Can be congenital or acquired. May affect vision and requires evaluation.',
                },
              ].map((condition, idx) => (
                <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg border border-pink-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{condition.title}</h3>
                  <p className="text-gray-700">{condition.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Get Eye Exams */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">When Should Your Child Get Eye Exams?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  age: 'Birth to 6 Months',
                  care: 'Newborn vision screening to detect any serious eye abnormalities.',
                },
                {
                  age: '6 Months to 3 Years',
                  care: 'Regular exams during critical vision development period.',
                },
                {
                  age: '3-6 Years',
                  care: 'Pre-school exams to detect vision problems before school.',
                },
                {
                  age: '6+ Years',
                  care: 'Yearly exams and whenever vision concerns arise.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border-t-4 border-pink-600 shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.age}</h3>
                  <p className="text-gray-700">{item.care}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Squint Correction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Squint Correction</h2>
            <div className="bg-pink-50 p-8 rounded-lg border-l-4 border-pink-600 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Squint (strabismus) is when the eyes are not properly aligned. This affects not just appearance but can lead to vision problems if left untreated.
              </p>
              <p className="text-lg text-gray-700">
                Early treatment is essential to prevent amblyopia and allow both eyes to work together properly. Treatment options include glasses, exercises, and in some cases, surgery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Early Signs of Squint</h3>
                <ul className="space-y-3">
                  {[
                    'Eyes not aligned or pointing different directions',
                    'Head tilting or turning to see',
                    'Frequent eye rubbing',
                    'Squinting or closing one eye in sunlight',
                    'Difficulty following objects',
                    'Clumsiness or bumping into things',
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Smile className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Why Early Treatment Matters</h3>
                <ul className="space-y-3">
                  {[
                    'Prevents permanent vision loss',
                    'Improves eye coordination',
                    'Boosts self-confidence',
                    'Enables binocular vision',
                    'Better response to treatment',
                    'Improved academic performance',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Child-Friendly Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Patient & Gentle',
                  desc: 'We take time to understand your child and make them comfortable. No rushing.',
                },
                {
                  title: 'Play-Based Testing',
                  desc: 'We use age-appropriate methods and games to evaluate vision without causing anxiety.',
                },
                {
                  title: 'Parent Involvement',
                  desc: 'We keep parents informed and involved in every step of care and treatment.',
                },
                {
                  title: 'Colorful Clinic',
                  desc: 'Our clinic is designed to be welcoming and engaging for children.',
                },
                {
                  title: 'Expert Team',
                  desc: 'Pediatric specialists with years of experience caring for children.',
                },
                {
                  title: 'Thorough Exams',
                  desc: 'Comprehensive vision assessment ensuring nothing is missed.',
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-pink-100 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amblyopia */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding Amblyopia (Lazy Eye)</h2>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-lg border-l-4 border-pink-600 mb-8">
              <p className="text-lg text-gray-700">
                Amblyopia develops when one eye is stronger than the other, and the brain starts ignoring the weaker eye. This can lead to permanent vision problems in the weak eye if not treated before age 6-9.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Treatment Options</h3>
                <ul className="space-y-3">
                  {[
                    'Corrective glasses or contact lenses',
                    'Patching (covering the stronger eye)',
                    'Atropine drops (dilating the stronger eye)',
                    'Vision therapy exercises',
                    'Combination approach for best results',
                  ].map((treatment, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Why Early Treatment Succeeds</h3>
                <ul className="space-y-3">
                  {[
                    'Visual system is still developing',
                    'Brain can learn to use weak eye',
                    'Treatment is often simple and non-invasive',
                    'Results improve with early intervention',
                    'Prevents permanent vision loss',
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Invest in Your Child's Vision</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Early eye care sets the foundation for lifelong vision health and learning.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all transform hover:scale-105"
            >
              <span>Schedule Your Child's Exam</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
