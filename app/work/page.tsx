import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Images, Sparkles } from 'lucide-react';
import { CtaSection } from '@/components/cta-section/cta-section';
import { FooterSection } from '@/components/footer-section/footer-section';
import LandingPageHero from '@/components/landing-page-hero/landing-page-hero';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { SiteNavigation } from '@/components/site-navigation/site-navigation';
import { SocialProofStrip } from '@/components/social-proof-strip/social-proof-strip';

export const metadata: Metadata = {
  title: 'Recent Work | SS Power Pros',
  description:
    'Browse before and after repair work from SS Power Pros across electrical, plumbing, AC and home maintenance projects.',
};

const workItems = [
  {
    title: 'Electrical panel cleanup',
    category: 'Electrical',
    before:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=82',
    after:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=82',
    result: 'Safer labeling, cleaner routing and a clearer handoff for the homeowner.',
  },
  {
    title: 'Plumbing leak repair',
    category: 'Plumbing',
    before:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=82',
    after:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=82',
    result: 'Leak isolated, fittings replaced and the repair area left clean.',
  },
  {
    title: 'AC maintenance visit',
    category: 'AC',
    before:
      'https://images.unsplash.com/photo-1694675879520-ff32d348fb7f?auto=format&fit=crop&w=1000&q=82',
    after:
      'https://images.unsplash.com/photo-1694675879520-ff32d348fb7f?auto=format&fit=crop&w=1000&q=88',
    result: 'Cooling equipment checked, cleaned and prepared for reliable use.',
  },
  {
    title: 'Maintenance punch-list',
    category: 'Maintenance',
    before:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=82',
    after:
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1000&q=82',
    result: 'Small repairs grouped into one practical service visit.',
  },
];

export default function WorkPage() {
  return (
    <>
      <SiteNavigation />
      <main>
        <LandingPageHero
          eyebrow="Recent work"
          title="Before and after repair work from SS Power Pros."
          lead="A focused gallery of electrical, plumbing, AC and maintenance work with visible repair outcomes."
          image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=84"
          imageAlt="Professional cleaning a window as part of home maintenance"
          proof="Repair work, clearly shown"
          serviceOption="Project enquiry"
        />

        <SocialProofStrip />

        <section className="work-gallery-section">
          <div className="container">
            <SectionHeading
              eyebrow={
                <>
                  <Sparkles size={17} aria-hidden="true" />
                  Project gallery
                </>
              }
              title="Clean fixes, shown side by side."
              copy="Each example keeps the emphasis on the repair condition, the finished work and the practical result."
            />

            <div className="work-gallery-grid">
              {workItems.map((item, index) => (
                <Reveal key={item.title} as="article" className="before-after-card" delay={index * 0.06}>
                  <div className="before-after-card__media">
                    <div>
                      <Image
                        src={item.before}
                        alt={`${item.title} before service`}
                        fill
                        loading="eager"
                        sizes="(max-width: 980px) 50vw, 330px"
                      />
                      <span>Before</span>
                    </div>
                    <div>
                      <Image
                        src={item.after}
                        alt={`${item.title} after service`}
                        fill
                        loading="eager"
                        sizes="(max-width: 980px) 50vw, 330px"
                      />
                      <span>After</span>
                    </div>
                  </div>
                  <div className="before-after-card__content">
                    <div>
                      <span className="work-gallery-card__category">{item.category}</span>
                      <h2>{item.title}</h2>
                    </div>
                    <ArrowRight size={19} aria-hidden="true" />
                    <p>{item.result}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="quality-strip">
              <strong>Work standards</strong>
              <ul>
                {['Clear scope', 'Clean finish', 'Practical handoff'].map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <CtaSection
          eyebrow="Start a project"
          title="Have a repair project in mind?"
          copy="Share the work you need done. We’ll review the scope, confirm the practical next step and arrange the visit."
          whatsappMessage="Hi SS Power Pros, I would like to discuss a repair project."
          variant="landing"
        />
      </main>
      <FooterSection />
    </>
  );
}
