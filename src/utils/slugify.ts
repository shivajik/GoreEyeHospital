export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getServiceSlug(serviceTitle: string): string {
  const slugMap: Record<string, string> = {
    'Cataract Surgery': 'cataract-surgery',
    'LASIK & Refractive Surgery': 'lasik-refractive-surgery',
    'Retina Services': 'retina-services',
    'Glaucoma Management': 'glaucoma-management',
    'Pediatric Ophthalmology': 'pediatric-ophthalmology',
    'Cornea Services': 'cornea-services',
  };
  return slugMap[serviceTitle] || slugify(serviceTitle);
}
