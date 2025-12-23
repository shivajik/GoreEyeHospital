import { Link } from 'react-router-dom';
import { Eye, Users, Award, Star, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';
import hospitalTeamImage from '@assets/GoreHospitalTeam_1766400536527.jpg';
import { SEOHead } from '../components/SEOHead';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': '#organization',
    name: 'Gore Netralaya and Laser Centre',
    description: 'Award-winning eye care center with 18+ years of expertise in advanced cataract surgery, LASIK, retina care, glaucoma management, and pediatric ophthalmology.',
    image: '/og-image.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Swatantrya Sainik Colony, Aurangpura',
      addressLocality: 'Chhatrapati Sambhajinagar',
      addressRegion: 'Maharashtra',
      postalCode: '431001',
      addressCountry: 'IN',
    },
    telephone: '+91 94226 53331',
    email: 'info@gorenetralaya.com',
    url: 'https://gorenetralaya.com',
    sameAs: [],
    priceRange: '$$',
    knowsAbout: ['Cataract Surgery', 'LASIK Surgery', 'Retina Services', 'Glaucoma Management', 'Pediatric Ophthalmology', 'Cornea Services'],
    foundingDate: '2006',
    founder: {
      '@type': 'Person',
      name: 'Dr. Abhijit Gore',
      jobTitle: 'Founder & Chief Ophthalmologist',
    },
  };

  const stats = [
    { icon: Users, value: '4500+', label: 'Complex Surgeries' },
    { icon: Award, value: '10+ Years', label: 'of Excellence' },
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
    <>
      <SEOHead 
        title="Gore Netralaya and Laser Centre - Best Eye Hospital in Chhatrapati Sambhajinagar | 18+ Years" 
        description="Award-winning eye care center with 18+ years of expertise. Expert cataract, LASIK, retina, and glaucoma surgeries. Dr. Abhijit Gore, MS Ophthalmology Gold Medalist. 50,000+ satisfied patients. Book consultation now."
        image="/og-image.png"
        schema={schema}
      />
    <div className="min-h-screen bg-white pt-20">
      <section className="relative h-auto md:min-h-screen flex flex-col overflow-hidden md:-mt-20 pt-20 md:pt-0">
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
        <div className="absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 md:bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="relative z-10 flex items-center justify-center md:flex-1 py-12 md:py-0">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 animate-fade-in">
              <div className="inline-block mb-2 md:mb-4">
                <span className="badge-professional bg-white/10 text-white border-white/30 text-sm md:text-base">
                  <Eye className="w-4 h-4" />
                  Vision is Our Priority
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-pulse-ring">
                Your Vision,<br />Our Mission
              </h1>
              
              <p className="text-base sm:text-lg md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed px-2">
                Award-winning eye care center delivering world-class expertise with cutting-edge technology and compassionate service to over 50,000 satisfied patients
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-8">
                <Link
                  to="/contact"
                  className="button-interactive bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-sm md:text-base"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </Link>
                <Link
                  to="/services"
                  className="button-interactive border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-gradient-to-r from-white to-blue-50 py-6 md:py-8 shadow-xl border-t border-blue-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start md:justify-center gap-3 animate-fade-in px-2" 
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <stat.icon className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
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
                  src={hospitalTeamImage}
                  alt="Gore Hospital team"
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
    </>
  );
}
