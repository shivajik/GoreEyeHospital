import { useState } from 'react';
import { ImageIcon, X, Maximize2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import img1 from '@assets/1_1766399364205.jpg';
import img3 from '@assets/3_1766399370550.jpg';
import imgt2 from '@assets/t2_1766399377288.jpg';
import imgTeam from '@assets/team_1766399387769.jpg';
import img8 from '@assets/8_1766399394586.jpg';
import img5 from '@assets/5_1766399400954.jpg';
import imgOT from '@assets/ot1_1766400741410.jpg';

const galleryImages = [
  {
    url: img1,
    title: 'Dr. Abhijit Gore in Consultation',
    category: 'Consultation'
  },
  {
    url: img3,
    title: 'Advanced Eye Examination',
    category: 'Diagnostics'
  },
  {
    url: imgt2,
    title: 'Dr. Gore with Team',
    category: 'Team'
  },
  {
    url: imgTeam,
    title: 'Gore Netralaya Support Staff',
    category: 'Team'
  },
  {
    url: img8,
    title: 'Gore Netralaya and Laser Centre Building',
    category: 'Facility'
  },
  {
    url: img5,
    title: 'Patient Care & Treatment',
    category: 'Treatment'
  },
  {
    url: imgOT,
    title: 'Advanced Operating Theatre',
    category: 'Surgery'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Gore Netralaya and Laser Centre Gallery',
    description: 'Gallery showcasing our state-of-the-art eye care facility, advanced operating theatres, diagnostic equipment, and professional team.',
    associatedMedia: galleryImages.map((image) => ({
      '@type': 'ImageObject',
      name: image.title,
      description: `${image.title} - ${image.category}`,
    })),
  };

  return (
    <>
      <SEOHead 
        title="Clinic Gallery - Gore Netralaya and Laser Centre | State-of-the-Art Facilities" 
        description="Explore our modern eye care facility, advanced operating theatres, diagnostic equipment, and professional team. See why patients trust Gore Netralaya for their vision care."
        image="/og-image.png"
        schema={schema}
      />
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 text-white -mt-20 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Clinic Gallery</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A glimpse into our state-of-the-art facility and dedicated care
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-sm font-semibold mb-1">{image.category}</span>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-center text-white">
              <span className="text-blue-400 font-semibold mb-2 block">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center space-x-3">
              <ImageIcon className="w-8 h-8 text-blue-600" />
              <span>World Class Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Gore Netralaya and Laser Centre, we believe that providing the best care starts with having the best environment. Our facility is equipped with state-of-the-art diagnostic and surgical equipment, maintained at international standards to ensure the highest safety and precision for every patient.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
