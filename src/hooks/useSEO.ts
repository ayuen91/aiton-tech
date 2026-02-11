/**
 * SEO Hook for managing meta tags and structured data
 * Helps optimize the website for search engines
 */

export const useSEO = (metadata: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}) => {
  // Update document title
  if (metadata.title) {
    document.title = metadata.title;
  }

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta && metadata.description) {
    descriptionMeta.setAttribute('content', metadata.description);
  }

  // Update og:title
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (ogTitleMeta && metadata.title) {
    ogTitleMeta.setAttribute('content', metadata.title);
  }

  // Update og:description
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionMeta && metadata.description) {
    ogDescriptionMeta.setAttribute('content', metadata.description);
  }

  // Update canonical
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink && metadata.canonical) {
    canonicalLink.setAttribute('href', metadata.canonical);
  }
};

export const structuredData = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aiton Tech",
    "description": "Software development company in Juba helping small businesses increase online presence",
    "url": "https://aitontech.online",
    "areaServed": {
      "@type": "Country",
      "name": "South Sudan"
    }
  },

  service: (title: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Aiton Tech"
    }
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
};
