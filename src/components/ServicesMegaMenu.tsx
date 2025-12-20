import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Eye, Heart, Shield, Baby, Microscope } from 'lucide-react';

interface MegaMenuProps {
  isScrolled: boolean;
}

const services = [
  {
    id: 1,
    title: 'Cataract Surgery',
    description: 'Advanced phacoemulsification with premium IOL options',
    path: '/services/cataract-surgery',
    icon: Eye,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'LASIK & Refractive Surgery',
    description: 'Freedom from glasses with bladeless LASIK technology',
    path: '/services/lasik-refractive-surgery',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    title: 'Retina Services',
    description: 'Comprehensive retinal care including diabetic retinopathy treatment',
    path: '/services/retina-services',
    icon: Heart,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 4,
    title: 'Glaucoma Management',
    description: 'Early detection and advanced treatment to preserve vision',
    path: '/services/glaucoma-management',
    icon: Shield,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 5,
    title: 'Pediatric Ophthalmology',
    description: 'Specialized care for children\'s eye health and development',
    path: '/services/pediatric-ophthalmology',
    icon: Baby,
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 6,
    title: 'Cornea Services',
    description: 'Expert treatment for corneal disorders and transplantation',
    path: '/services/cornea-services',
    icon: Microscope,
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function ServicesMegaMenu({ isScrolled }: MegaMenuProps) {
  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300 invisible group-hover:visible opacity-0 group-hover:opacity-100 pt-4 z-50 w-screen max-w-7xl px-4`}>
      <div className={`${isScrolled ? 'bg-white shadow-2xl' : 'bg-white shadow-2xl'} rounded-2xl overflow-hidden`}>
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Services</h3>
            <p className="text-gray-600">Comprehensive eye care solutions tailored to your needs</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.path}
                  className="group/item relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover/item:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon */}
                    <div className={`mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover/item:text-blue-600 transition-all duration-300">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center text-sm font-semibold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/item:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom border accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Can't find what you're looking for?
              </p>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
