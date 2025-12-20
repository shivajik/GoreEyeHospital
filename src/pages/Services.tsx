import { Eye, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Cataract Surgery',
      description: 'Advanced phacoemulsification with premium IOL options',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Bladeless Surgery',
        'Same Day Discharge',
        'Quick Recovery',
        'Premium IOL Options',
      ],
      details: 'Our cataract surgery uses the latest phacoemulsification technology, ensuring precise correction and faster recovery.',
    },
    {
      id: 2,
      title: 'LASIK & Refractive Surgery',
      description: 'Freedom from glasses with bladeless LASIK technology',
      image: 'https://images.pexels.com/photos/3808221/pexels-photo-3808221.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Bladeless Technology',
        'Customized Treatment',
        'Lifetime Care',
        'Quick Vision Correction',
      ],
      details: 'Experience freedom from glasses with our advanced LASIK procedures. Customized for your eyes with minimal discomfort.',
    },
    {
      id: 3,
      title: 'Retina Services',
      description: 'Comprehensive retinal care including diabetic retinopathy treatment',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Medical Retina',
        'Vitreo-Retinal Surgery',
        'Anti-VEGF Injections',
        'Retinal Imaging',
      ],
      details: 'Advanced treatment for retinal disorders and diabetic retinopathy with state-of-the-art diagnostic tools.',
    },
    {
      id: 4,
      title: 'Glaucoma Management',
      description: 'Early detection and advanced treatment to preserve vision',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Advanced Diagnostics',
        'Medical Management',
        'Surgical Options',
        'Regular Monitoring',
      ],
      details: 'Comprehensive glaucoma care with advanced diagnostic equipment and personalized treatment plans.',
    },
    {
      id: 5,
      title: 'Pediatric Ophthalmology',
      description: 'Specialized care for children\'s eye health and development',
      image: 'https://images.pexels.com/photos/6285310/pexels-photo-6285310.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Squint Correction',
        'Amblyopia Treatment',
        'Vision Screening',
        'Child-friendly Approach',
      ],
      details: 'Expert care for children\'s eye health with a compassionate and child-friendly approach.',
    },
    {
      id: 6,
      title: 'Cornea Services',
      description: 'Expert treatment for corneal disorders and transplantation',
      image: 'https://images.pexels.com/photos/3808214/pexels-photo-3808214.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Corneal Transplant',
        'Keratoconus Treatment',
        'Dry Eye Management',
        'Corneal Reshaping',
      ],
      details: 'Comprehensive corneal care including advanced treatments for keratoconus and dry eye syndrome.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive eye care solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Need Help Choosing a Service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of eye care specialists is here to help you find the right treatment for your needs
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
