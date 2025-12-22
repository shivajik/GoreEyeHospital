import { Link } from 'react-router-dom';
import { Eye, Users, Award, Star, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: Users, value: '4500+', label: 'Complex Surgeries' },
    { icon: Award, value: '18+ Years', label: 'of Excellence' },
    { icon: Star, value: 'Gold Medalist', label: 'MS Ophthalmology' },
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
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-600"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/20 via-transparent to-teal-400/20"></div>
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        
        {/* Background pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5752282/pexels-photo-5752282.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        ></div>

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="badge-professional bg-white/10 text-white border-white/30">
                <Eye className="w-4 h-4" />
                Vision is Our Priority
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-pulse-ring">
              Your Vision,<br />Our Mission
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Award-winning eye care center delivering world-class expertise with cutting-edge technology and compassionate service to over 50,000 satisfied patients in Chhatrapati Sambhajinagar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/contact"
                className="button-interactive bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-2 border-2 border-white/30"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="button-interactive border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white to-blue-50 py-8 shadow-xl border-t border-blue-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center space-x-3 animate-fade-in" 
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <stat.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  </div>
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
                Excellence Since 2006
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Gore Netralaya and Laser Centre has been at the forefront of ophthalmology in Chhatrapati Sambhajinagar, providing world-class eye care services to the community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Under the expert guidance of Dr. Abhijit Gore (MS Ophthalmology - Gold Medalist), our dedicated team works tirelessly to ensure that each patient receives personalized care and the best possible outcomes.
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
