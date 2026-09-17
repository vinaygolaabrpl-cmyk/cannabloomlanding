import { FaStar } from 'react-icons/fa';
import { siteData } from '@/lib/data';

export default function RatingStrip() {
  const { ratingStrip } = siteData;

  return (
    <div className="rating-strip" aria-label="Canna Blooms statistics">
      <div className="rating-strip__inner">
        <div className="rating-strip__item">
          <div className="rating-strip__value">{ratingStrip.reviews}</div>
          <div className="rating-strip__label">{ratingStrip.reviewsLabel}</div>
        </div>
        <div className="rating-strip__item">
          <div className="rating-strip__value rating-strip__value--rating">
            {ratingStrip.rating}
            <FaStar className="rating-strip__star" aria-hidden="true" />
          </div>
          <div className="rating-strip__label">{ratingStrip.ratingLabel}</div>
        </div>
        <div className="rating-strip__item">
          <div className="rating-strip__value">{ratingStrip.locations}</div>
          <div className="rating-strip__label">{ratingStrip.locationsLabel}</div>
        </div>
        <div className="rating-strip__item">
          <div className="rating-strip__value">{ratingStrip.since}</div>
          <div className="rating-strip__label">{ratingStrip.sinceLabel}</div>
        </div>
      </div>
    </div>
  );
}
