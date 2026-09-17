import { siteData } from '@/lib/data';

export default function Neighborhoods() {
  const { neighborhoods } = siteData;

  return (
    <section id="neighborhoods" className="section section--white" aria-labelledby="neighborhoods-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="neighborhoods-title" className="section__title">
            {neighborhoods.title}
          </h2>
          <p className="section__desc">{neighborhoods.intro}</p>
        </div>

        <div className="grid-3">
          {neighborhoods.groups.map((group) => (
            <div className="neighborhood-card" key={group.locationId}>
              <span className="neighborhood-card__region">{group.region}</span>
              <h3 className="neighborhood-card__name">{group.name}</h3>
              <p className="neighborhood-card__towns">{group.towns.join(' · ')}</p>
            </div>
          ))}
        </div>

        <p className="section__footnote">{neighborhoods.footnote}</p>
      </div>
    </section>
  );
}
