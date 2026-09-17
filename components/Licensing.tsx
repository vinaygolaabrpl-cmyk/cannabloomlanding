import { siteData } from '@/lib/data';
import { FaIdCard } from 'react-icons/fa';

export default function Licensing() {
  const { licenses } = siteData;
  const licenseIcon = (
    <FaIdCard className="location-card__icon" aria-hidden="true" />
  );

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
                {card.license ? (
                  <div className='license-div'>
                    NY State Retail License <div className='d-flex align-item-center'>{licenseIcon} {card.license}</div>
                  </div>
                ) : (
                  'License number available in-store and on request'
                )}
              </p>
              <p className="info-card__desc">{card.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}