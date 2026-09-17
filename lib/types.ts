export interface Location {
  id: string;
  number: string;
  name: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  license: string;
  hours: {
    mainDays: string;
    sunday: string;
  };
  deliveryHours: string;
  description: string;
  reviewsLabel: string;
  visitUrl: string;
}

export interface NeighborhoodGroup {
  locationId: string;
  name: string;
  region: string;
  towns: string[];
  zipCodes: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export interface SiteData {
  site: {
    name: string;
    shortName: string;
    domain: string;
    legalStrip: string;
    licenseStrip: string;
    logo: { src: string; alt: string };
    phoneDisplay: string;
    email: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    canonicalUrl: string;
    twitterCard: string;
    robots: string;
  };
  header: {
    topBarLeft: string;
    topBarRight: string;
    eyebrow: string;
    nav: { label: string; href: string }[];
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    ctaLabel: string;
    ctaTarget: string;
  };
  locations: Location[];
  ratingStrip: {
    reviews: string;
    reviewsLabel: string;
    rating: string;
    ratingLabel: string;
    locations: string;
    locationsLabel: string;
    sinceLabel: string;
    since: string;
  };
  neighborhoods: {
    title: string;
    intro: string;
    footnote: string;
    groups: NeighborhoodGroup[];
  };
  hours: {
    title: string;
    description: string;
    cards: { locationId: string; name: string; primary: string; secondary: string }[];
  };
  gettingHere: {
    title: string;
    description: string;
    cards: { number: string; name: string; address: string; description: string }[];
  };
  beforeVisit: {
    title: string;
    description: string;
    cards: { title: string; description: string }[];
  };
  licenses: {
    title: string;
    description: string;
    cards: { locationId: string; name: string; license: string; address: string }[];
  };
  reviews: {
    title: string;
    description: string;
    items: { quote: string; author: string; location: string }[];
  };
  firstVisit: {
    title: string;
    description: string;
    cards: { number: string; title: string; description: string }[];
  };
  faqs: FAQ[];
  trustSection: {
    title: string;
    description: string;
  };
  footer: {
    legalNote: string;
    copyright: string;
    privacyPolicyLabel: string;
    privacyPolicyUrl: string;
  };
}
