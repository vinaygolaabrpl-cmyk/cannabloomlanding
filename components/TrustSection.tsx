import { siteData } from '@/lib/data';

export default function TrustSection() {
  const { trustSection } = siteData;

  return (
    <section className="section section--white" aria-labelledby="trust-title">
      <div className="trust-section__wrap">
        <div className="trust-section__box">
          <h2 id="trust-title" className="trust-section__title">
            {trustSection.title}
          </h2>
          <p className="trust-section__desc">{trustSection.description}</p>
        </div>
      </div>
    </section>
  );
}
