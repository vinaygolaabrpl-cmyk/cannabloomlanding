import { siteData } from '@/lib/data';

export default function OpeningHours() {
  const { hours } = siteData;

  return (
    <section id="hours" className="section section--cream" aria-labelledby="hours-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="hours-title" className="section__title">
            {hours.title}
          </h2>
          <p className="section__desc">{hours.description}</p>
        </div>

        <div className="grid-3">
          {hours.cards.map((card) => (
            <div className="info-card" key={card.locationId}>
              <span className="info-card__eyebrow">{card.name}</span>
              <h3 className="info-card__title">{card.primary}</h3>
              <p className="info-card__desc">{card.secondary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
