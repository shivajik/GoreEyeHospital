import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' });
    alert('Thank you! We will contact you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Nageshwarwadi - Nirala Bazar Rd',
      subtext: 'Swatantrya Sainik Colony, Aurangpura, Chhatrapati Sambhajinagar, Maharashtra 431001',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 94226 53331',
      subtext: 'Available during working hours',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@gorenetralaya.com',
      subtext: 'appointments@gorenetralaya.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM',
      subtext: 'Sun: 9:00 AM - 2:00 PM | 24/7 Emergency',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 text-white -mt-20 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're here to answer your questions and help you schedule your appointment
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-semibold mb-1">{info.content}</p>
                <p className="text-sm text-gray-600">{info.subtext}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="cataract">Cataract Surgery</option>
                      <option value="lasik">LASIK Surgery</option>
                      <option value="retina">Retina Services</option>
                      <option value="glaucoma">Glaucoma Treatment</option>
                      <option value="general">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Tell us about your eye condition..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">Why Contact Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Consultation',
                    desc: 'Get advice from experienced eye specialists with 14+ years of practice',
                  },
                  {
                    title: 'Personalized Care',
                    desc: 'Receive customized treatment plans tailored to your specific needs',
                  },
                  {
                    title: 'Advanced Technology',
                    desc: 'Access state-of-the-art diagnostic and surgical equipment',
                  },
                  {
                    title: '24/7 Support',
                    desc: 'Emergency services available round the clock for urgent care',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-100 text-sm">
                  We're committed to providing you with the best eye care experience. Contact us today to schedule your consultation!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Find Us on the Map</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.689741816356!2d75.34552341082185!3d19.893868880650373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca6ccf4c8e9a8d%3A0x123456789!2sAurangabad!5e0!3m2!1sen!2sin!4v1234567890"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
