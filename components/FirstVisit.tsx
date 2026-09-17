import { siteData } from '@/lib/data';

export default function FirstVisit() {
  const { firstVisit } = siteData;

  return (
    <section className="section section--white" aria-labelledby="first-visit-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="first-visit-title" className="section__title">
            {firstVisit.title}
          </h2>
          <p className="section__desc">{firstVisit.description}</p>
        </div>

        <div className="grid-3">
          {firstVisit.cards.map((card) => (
            <div className="info-card" key={card.number}>
              <span className="info-card__number">{card.number}</span>
              <h3 className="info-card__title">{card.title}</h3>
              <p className="info-card__desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
