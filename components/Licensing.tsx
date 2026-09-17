import { siteData } from '@/lib/data';

export default function Licensing() {
  const { licenses } = siteData;

  return (
    <section className="section section--white" aria-labelledby="licensing-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="licensing-title" className="section__title">
            {licenses.title}
          </h2>
          <p className="section__desc">{licenses.description}</p>
        </div>

        <div className="grid-3">
          {licenses.cards.map((card) => (
            <div className="info-card" key={card.locationId}>
              <h3 className="info-card__title">{card.name}</h3>
              <p className="info-card__eyebrow">
                {card.license
                  ? `NY State Retail License ${card.license}`
                  : 'License number available in-store and on request'}
              </p>
              <p className="info-card__desc">{card.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
