import { Star, Heart, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import hospitalTeamImage from '@assets/GoreHospitalTeam_1766400536527.jpg';
import { SEOHead } from '../components/SEOHead';

export default function About() {
  const testimonials = [
    {
      name: 'Ramesh Kumar',
      city: 'Chhatrapati Sambhajinagar',
      rating: 5,
      text: 'Dr. Gore is an exceptional ophthalmologist. My cataract surgery went smoothly, and my vision has improved dramatically. Highly recommended!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Priya Sharma',
      city: 'Chhatrapati Sambhajinagar',
      rating: 5,
      text: 'The LASIK procedure was painless and results were immediate. The staff is very professional and caring. Best decision ever!',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Rajesh Patel',
      city: 'Chhatrapati Sambhajinagar',
      rating: 5,
      text: 'Dr. Gore detected my glaucoma early and prescribed the right treatment. His expertise and attention to detail are commendable.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'We prioritize patient comfort and satisfaction in every interaction',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Adhering to international protocols and safety standards',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously adopting latest eye care technologies',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Highly trained and experienced eye care specialists',
    },
  ];

  return (
    <>
      <SEOHead 
        title="About Gore Netralaya and Laser Centre - Leading Eye Care Center Since 2006" 
        description="Learn about Gore Netralaya's mission, vision, and values. Premier eye care center in Chhatrapati Sambhajinagar with state-of-the-art facilities, expert team, and 50,000+ satisfied patients since 2006."
        image="/og-image.png"
      />
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 text-white -mt-20 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Gore Netralaya and Laser Centre</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Pioneering excellence in eye care since 2006
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Gore Netralaya and Laser Centre was founded in 2006 with a vision to provide world-class eye care services to the people of Chhatrapati Sambhajinagar. What started as a small clinic has grown into a leading eye care center, trusted by over 50,000 patients.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Under the expert guidance of Dr. Abhijit Gore, our team has set new standards in ophthalmology and continues to deliver exceptional patient outcomes.
              </p>
              <p className="text-lg text-gray-700">
                We believe that eye care should be accessible to everyone without compromising on quality. This philosophy drives everything we do.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={hospitalTeamImage}
                  alt="Gore Hospital team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-12 border-2 border-blue-200 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission & Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-3">Mission</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide comprehensive, affordable, and high-quality eye care using the latest technology and techniques while maintaining the highest standards of professionalism and ethics.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-3">Vision</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the most trusted eye care center in the region, known for innovation, excellence, and patient satisfaction. We aim to restore vision and improve the quality of life for every patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Gore Netralaya and Laser Centre?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Expert ophthalmologist with 18+ years of experience',
              'State-of-the-art diagnostic and surgical equipment',
              'Personalized treatment plans for each patient in Chhatrapati Sambhajinagar',
              '24/7 emergency eye care services',
              'Affordable and transparent pricing',
              'Compassionate and patient-centric approach',
              'Advanced laser and surgical technologies',
              'Proven track record with 50,000+ satisfied patients',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-3xl p-12 text-center border-2 border-blue-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Family of Satisfied Patients</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience world-class eye care and join over 50,000 patients who have trusted us with their vision
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Schedule Your Consultation Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
