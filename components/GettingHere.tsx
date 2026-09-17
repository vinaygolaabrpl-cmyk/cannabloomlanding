import { siteData } from '@/lib/data';

export default function GettingHere() {
  const { gettingHere } = siteData;

  return (
    <section className="section section--white" aria-labelledby="getting-here-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="getting-here-title" className="section__title">
            {gettingHere.title}
          </h2>
          <p className="section__desc">{gettingHere.description}</p>
        </div>

        <div className="grid-3">
          {gettingHere.cards.map((card) => (
            <div className="info-card" key={card.number}>
              <span className="info-card__number">{card.number}</span>
              <h3 className="info-card__title">{card.name}</h3>
              <p className="info-card__desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
