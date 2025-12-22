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
    <div className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300 invisible group-hover:visible opacity-0 group-hover:opacity-100 pt-2 z-50 w-screen`} style={{ maxWidth: '900px' }}>
      <div className={`bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100`}>
        <div className="p-4">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900">Our Services</h3>
            <p className="text-xs text-gray-500">Professional eye care solutions</p>
          </div>

          {/* Services Grid - 3 columns for compact view */}
          <div className="grid grid-cols-3 gap-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.path}
                  className="group/item relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-md"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover/item:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative p-3">
                    {/* Icon */}
                    <div className={`mb-2 inline-flex p-1.5 rounded-lg bg-gradient-to-br ${service.color}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover/item:text-blue-600 transition-all duration-300 line-clamp-2">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center text-xs font-semibold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-2.5 h-2.5 ml-0.5 group-hover/item:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom border accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-3 pt-3 border-t border-gray-100 text-right">
            <Link
              to="/services"
              className="inline-flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-700 transition-all"
            >
              <span>All Services</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
