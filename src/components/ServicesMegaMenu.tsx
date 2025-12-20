import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Eye, Heart, Shield, Baby, Microscope } from 'lucide-react';

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

export default function ServicesMegaMenu() {
  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300 invisible group-hover:visible opacity-0 group-hover:opacity-100 pt-3 z-50 w-screen`} style={{ maxWidth: '800px' }}>
      <div className={`bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100`}>
        <div className="p-6">
          {/* Header */}
          <div className="mb-5">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Our Services</h3>
            <p className="text-sm text-gray-600">Professional eye care solutions</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
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
                  <div className="relative p-4">
                    {/* Icon */}
                    <div className={`mb-3 inline-flex p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-bold text-gray-900 mb-1 group-hover/item:text-blue-600 transition-all duration-300 line-clamp-1">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-gray-600 mb-3 line-clamp-1">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center text-xs font-semibold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/item:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom border accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-5 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-gray-600">
                View all services
              </p>
              <Link
                to="/services"
                className="inline-flex items-center space-x-1 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-700 transition-all"
              >
                <span>All Services</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
