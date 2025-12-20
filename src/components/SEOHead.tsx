import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  schema?: Record<string, any>;
}

export function SEOHead({ title, description, image, url, schema }: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update/create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (title) updateOrCreateMeta('og:title', title);
    if (description) updateOrCreateMeta('og:description', description);
    if (image) updateOrCreateMeta('og:image', image);
    if (url) updateOrCreateMeta('og:url', url);

    // Add schema markup
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (schemaScript) {
        schemaScript.textContent = JSON.stringify(schema);
      } else {
        const newScript = document.createElement('script') as HTMLScriptElement;
        newScript.type = 'application/ld+json';
        newScript.textContent = JSON.stringify(schema);
        document.head.appendChild(newScript);
      }
    }

    return () => {
      // Cleanup is optional - you might want to keep metadata or reset it
    };
  }, [title, description, image, url, schema]);

  return null;
}
