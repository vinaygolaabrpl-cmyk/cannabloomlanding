import Image from 'next/image';
import { FaCircle, FaStar } from 'react-icons/fa';
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';
import { siteData } from '@/lib/data';

export default function Hero() {
  const { hero, locations, site } = siteData;

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__inner">
        <div className="hero__logo">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={132}
            height={88}
            className="hero__logo-img"
            priority
          />
        </div>

        <span className="hero__eyebrow">{hero.eyebrow}</span>

        <h1 className="hero__title">
          {hero.titleLine1}
          <br />
          <span className="hero__highlight">{hero.titleHighlight}</span>
        </h1>

        <p className="hero__desc">{hero.description}</p>

        <div className="hero__cta">
          <a href={hero.ctaTarget} className="btn btn--primary">
            {hero.ctaLabel}
          </a>
        </div>

        <div id="store-locations" className="hero__locations">
          {locations.map((location) => {
            const isExternal = /^https?:\/\//.test(location.visitUrl);
            return (
              <article className="location-card" key={location.id}>
                <div className="location-card__head">
                  <FaCircle className="location-card__dot" aria-hidden="true" />
                  <span>{location.name}</span>
                </div>
                <p className="location-card__region">{location.region}</p>

                <div className="location-card__meta">
                  <div className="location-card__meta-row">
                    <FiMapPin className="location-card__icon" aria-hidden="true" />
                    <span>{location.address}</span>
                  </div>
                  <div className="location-card__meta-row">
                    <FiClock className="location-card__icon" aria-hidden="true" />
                    <span>
                      {location.hours.mainDays} &middot; {location.hours.sunday}
                    </span>
                  </div>
                  {location.phone && (
                    <div className="location-card__meta-row">
                      <FiPhone className="location-card__icon" aria-hidden="true" />
                      <span>{location.phone}</span>
                    </div>
                  )}
                  {location.reviewsLabel && (
                    <div className="location-card__meta-row">
                      <FaStar className="location-card__icon" aria-hidden="true" />
                      <span>{location.reviewsLabel}</span>
                    </div>
                  )}
                </div>

                <div className="location-card__cta">
                  <a
                    href={location.visitUrl}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="btn btn--on-dark"
                  >
                    Visit {location.name}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
