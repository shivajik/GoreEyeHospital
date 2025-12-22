import { Eye, MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Gore Netralaya and Laser Centre</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in comprehensive eye care and vision health since 2006.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/doctor" className="text-gray-400 hover:text-white transition-colors">Our Doctor</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cataract Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LASIK Treatment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retina Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Glaucoma Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="https://www.google.com/maps/place/Gore+Netralaya+and+Laser+Centre/@19.8828153,75.321341,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdb98729df5ebab:0xad2e339a3ff9dc43!8m2!3d19.8828103!4d75.3239159!16s%2Fg%2F11ckc4d6qc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Swatantrya Sainik Colony, Aurangpura, Chhatrapati Sambhajinagar, Maharashtra 431001</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919422653331" className="text-gray-400 hover:text-blue-400 transition-colors">+91 94226 53331</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@gorenetralaya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Gore Netralaya and Laser Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
