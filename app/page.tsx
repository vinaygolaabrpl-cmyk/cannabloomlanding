import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import RatingStrip from '@/components/RatingStrip';
import Neighborhoods from '@/components/Neighborhoods';
import OpeningHours from '@/components/OpeningHours';
import GettingHere from '@/components/GettingHere';
import BeforeVisit from '@/components/BeforeVisit';
import Licensing from '@/components/Licensing';
import GoogleReviews from '@/components/GoogleReviews';
import FirstVisit from '@/components/FirstVisit';
import FAQ from '@/components/FAQ';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <TopBar />
      <main id="main-content">
        {/* Hero is visible on first paint, so it isn't scroll-revealed */}
        <Hero />

        <ScrollReveal>
          <RatingStrip />
        </ScrollReveal>
        <ScrollReveal>
          <Neighborhoods />
        </ScrollReveal>
        <ScrollReveal>
          <OpeningHours />
        </ScrollReveal>
        <ScrollReveal>
          <GettingHere />
        </ScrollReveal>
        <ScrollReveal>
          <BeforeVisit />
        </ScrollReveal>
        <ScrollReveal>
          <Licensing />
        </ScrollReveal>
        <ScrollReveal>
          <GoogleReviews />
        </ScrollReveal>
        <ScrollReveal>
          <FirstVisit />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal>
          <TrustSection />
        </ScrollReveal>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}
