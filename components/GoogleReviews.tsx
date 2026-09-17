import { siteData } from '@/lib/data';

export default function GoogleReviews() {
  const { reviews } = siteData;

  return (
    <section className="section section--cream" aria-labelledby="reviews-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="reviews-title" className="section__title">
            {reviews.title}
          </h2>
          <p className="section__desc">{reviews.description}</p>
        </div>

        <div className="grid-3">
          {reviews.items.map((item) => (
            <blockquote className="review-card" key={item.quote}>
              <p className="review-card__quote">&ldquo;{item.quote}&rdquo;</p>
              <footer className="review-card__author">
                GOOGLE REVIEW{item.author ? ` · ${item.author}` : ''}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
