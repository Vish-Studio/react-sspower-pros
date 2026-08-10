import type { Metadata } from 'next';
import { Quote, Star } from 'lucide-react';
import { CtaSection } from '@/components/cta-section/cta-section';
import { FooterSection } from '@/components/footer-section/footer-section';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { SiteNavigation } from '@/components/site-navigation/site-navigation';
import { SocialProofStrip } from '@/components/social-proof-strip/social-proof-strip';

export const metadata: Metadata = {
  title: 'Reviews | SS Power Pros',
  description:
    'Read homeowner reviews for SS Power Pros electrical, AC, plumbing and home maintenance services.',
};

const reviews = [
  {
    quote: "Fixed the electrical fault that others couldn't find. Clean, clear and professional.",
    author: 'James T.',
    service: 'Electrical',
  },
  {
    quote: 'Honest advice saved us from replacing the whole AC unit.',
    author: 'Linda M.',
    service: 'AC',
  },
  {
    quote: 'Respectful of the house and left the plumbing area spotless.',
    author: 'Robert K.',
    service: 'Plumbing',
  },
  {
    quote: 'They explained the options before starting and finished exactly what they promised.',
    author: 'Marissa D.',
    service: 'Maintenance',
  },
  {
    quote: 'Fast response, tidy work and no confusing handoff between trades.',
    author: 'Anthony P.',
    service: 'Home repair',
  },
  {
    quote: 'The technician showed up prepared, found the issue quickly and left the panel labeled.',
    author: 'Denise R.',
    service: 'Electrical',
  },
  {
    quote: 'Clear communication from the first message. The repair visit was easy to schedule.',
    author: 'Caleb S.',
    service: 'Booking',
  },
  {
    quote: 'A small leak was handled before it became a bigger problem. Good, practical service.',
    author: 'Priya N.',
    service: 'Plumbing',
  },
  {
    quote: 'Reliable for the small repairs that kept getting pushed back.',
    author: 'Marcus B.',
    service: 'Maintenance',
  },
];

export default function ReviewsPage() {
  return (
    <>
      <SiteNavigation />
      <main>
        <section id="home" className="reviews-page-hero">
          <div className="container">
            <Reveal className="reviews-page-hero__copy">
              <div className="eyebrow">
                <Star size={17} aria-hidden="true" />
                Homeowner reviews
              </div>
              <h1 className="hero__title">Reviews from homeowners who needed the work handled.</h1>
              <p className="hero__lead">
                Proof from electrical, AC, plumbing and maintenance jobs where clear communication
                mattered as much as the repair.
              </p>
            </Reveal>
          </div>
        </section>

        <SocialProofStrip />

        <section className="reviews-page-section">
          <div className="container">
            <SectionHeading
              eyebrow={
                <>
                  <Quote size={17} aria-hidden="true" />
                  All reviews
                </>
              }
              title="The details clients remember."
              copy="Showing up, explaining the fix, protecting the home and leaving the work area clean."
            />

            <div className="review-grid reviews-page-grid">
              {reviews.map((review, index) => (
                <Reveal key={`${review.author}-${review.service}`} as="article" className="review-card" delay={index * 0.04}>
                  <Quote size={24} aria-hidden="true" />
                  <div className="review-card__stars" aria-label="Five star rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p>{review.quote}</p>
                  <strong>{review.author}</strong>
                  <span className="review-card__service">{review.service}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
