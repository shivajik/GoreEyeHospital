import { Link } from 'react-router-dom';
import { Eye, Users, Award, Star, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Patients' },
    { icon: Award, value: '14+ Years', label: 'of Excellence' },
    { icon: Star, value: 'MS Ophthalmology', label: 'Expert Specialist' },
  ];

  const highlights = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'State-of-the-art diagnostic and surgical equipment',
    },
    {
      icon: Shield,
      title: 'Patient Safety',
      description: 'International protocols and safety standards',
    },
    {
      icon: Eye,
      title: 'Expert Care',
      description: 'Highly experienced ophthalmologists',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5752282/pexels-photo-5752282.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Vision,<br />Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              World-class eye care with cutting-edge technology and compassionate service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white py-8 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-center space-x-3">
                  <stat.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence in eye care backed by expertise and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence Since 2010
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Gore Netralaya and Laser Centre has been at the forefront of ophthalmology in Paithan Gate, Aurangabad, providing world-class eye care services to the community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Under the expert guidance of Dr. Abhijit Gore, our dedicated team works tirelessly to ensure that each patient receives personalized care and the best possible outcomes.
              </p>

              <div className="space-y-4">
                {[
                  'Advanced diagnostic equipment',
                  'Experienced specialists',
                  '24/7 emergency care',
                  'Latest treatment methods',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5752290/pexels-photo-5752290.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Eye care professional"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Improve Your Vision?
            </h2>
            <p className="text-xl text-blue-100">
              Schedule your consultation with our eye care specialists today
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
