import { GraduationCap, Award, Languages, MapPin, ChevronRight, Stethoscope, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Doctor() {
  const qualifications = [
    { title: 'MS - Ophthalmology', detail: 'Gold Medalist in MS Ophthalmology' },
    { title: 'FRVS', detail: 'Fellow in Retina and Vitreous Surgery' },
    { title: 'Registration Number', detail: '2006/03/1853' },
  ];

  const specializations = [
    'Retinal Detachment Surgeries',
    'Premium IOL & Traumatic Cataract',
    'Scleral Fixated IOL',
    'Vitreous Hemorrhage Treatment',
    'Macular Hole & Epiretinal Membrane',
    'Tractional Retinal Detachment',
    'Advanced Cataract Surgery',
    'Comprehensive Eye Care',
  ];

  const achievements = [
    { icon: Award, label: 'Gold Medal', desc: 'MS Ophthalmology' },
    { icon: Users, label: '4500+', desc: 'Complex Retina & Cataract Surgeries' },
    { icon: Star, label: '14+', desc: 'Years of Experience' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 text-white -mt-20 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Dr. Abhijit Gore</h1>
          <p className="text-2xl text-blue-100">MS - Ophthalmology | Leading Eye Specialist</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl p-8 text-white text-center sticky top-32">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Stethoscope className="w-20 h-20 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Dr. Abhijit Gore</h2>
                <p className="text-blue-100 text-lg mb-6">MS - Ophthalmology</p>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-3 mb-6">
                  <p className="text-sm font-semibold">Practicing Since 2010</p>
                  <p className="text-xs text-blue-200">14+ Years of Excellence</p>
                </div>

                <div className="space-y-3">
                  <a href="tel:+919422653331" className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Call Now
                  </a>
                  <Link to="/contact" className="block w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">About Dr. Gore</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Dr. Abhijit Gore is recognized as one of the best Ophthalmologists in Paithan Gate, Aurangabad. With over 14 years of dedicated experience since 2010, Dr. Gore has established himself as a leading expert in comprehensive eye care.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently practicing at Gore Netralaya and Laser Centre in Paithan Gate, Aurangabad, Dr. Gore combines advanced medical expertise with compassionate patient care to deliver exceptional outcomes. His commitment to staying at the forefront of ophthalmology ensures patients receive the latest treatment options.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 text-center border border-blue-200">
                    <achievement.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-gray-900 mb-1">{achievement.label}</p>
                    <p className="text-gray-600">{achievement.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Qualifications & Training</h3>
                <div className="space-y-4">
                  {qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{qual.title}</h4>
                        <p className="text-gray-600">{qual.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specializations.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Dr. Gore?</h2>
            <p className="text-xl text-blue-100">
              Trusted by thousands of patients across Aurangabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Care',
                desc: 'Each patient receives customized treatment plans tailored to their specific eye condition and needs.',
              },
              {
                title: 'Latest Technology',
                desc: 'Equipped with state-of-the-art diagnostic and surgical equipment for precise results.',
              },
              {
                title: 'Patient Satisfaction',
                desc: '14 years of building trust with over 50,000 satisfied patients across the region.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-3xl p-12 text-center border-2 border-blue-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Improve Your Vision?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Abhijit Gore and experience world-class eye care
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Book Your Appointment</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
