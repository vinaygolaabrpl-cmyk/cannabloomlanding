import type { Metadata } from 'next';
import { siteData } from '@/lib/data';
import '@/styles/style.scss';
import '@/styles/tailwind.css';

const { seo, site } = siteData;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: seo.canonicalUrl,
  },
  robots: seo.robots,
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: seo.canonicalUrl,
    siteName: site.name,
    images: [{ url: seo.ogImage }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: seo.twitterCard as 'summary_large_image',
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
