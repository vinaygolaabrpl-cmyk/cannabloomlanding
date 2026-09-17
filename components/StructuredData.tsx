import { siteData } from '@/lib/data';

export default function StructuredData() {
  const { site, locations } = siteData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': locations.map((location) => ({
      '@type': 'Store',
      name: `${site.name} \u2013 ${location.name}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address,
        addressRegion: 'NY',
        addressCountry: 'US',
      },
      description: location.description,
      url: location.visitUrl,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
