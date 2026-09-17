import { siteData } from '@/lib/data';

export default function BeforeVisit() {
  const { beforeVisit } = siteData;

  return (
    <section className="section section--cream" aria-labelledby="before-visit-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="before-visit-title" className="section__title">
            {beforeVisit.title}
          </h2>
          <p className="section__desc">{beforeVisit.description}</p>
        </div>

        <div className="grid-3">
          {beforeVisit.cards.map((card) => (
            <div className="info-card" key={card.title}>
              <h3 className="info-card__title">{card.title}</h3>
              <p className="info-card__desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
