import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  ClipboardCheck,
  LucideIcon,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { CtaSection } from '@/components/cta-section/cta-section';
import { FooterSection } from '@/components/footer-section/footer-section';
import LandingPageHero from '@/components/landing-page-hero/landing-page-hero';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';
import { SiteNavigation } from '@/components/site-navigation/site-navigation';
import { SocialProofStrip } from '@/components/social-proof-strip/social-proof-strip';

export type ServiceLandingPageData = {
  slug: string;
  navLabel: string;
  title: string;
  lead: string;
  eyebrow: string;
  serviceOption: string;
  image: string;
  imageAlt: string;
  proof: string;
  overviewTitle: string;
  overviewCopy: string;
  included: string[];
  process: Array<{
    title: string;
    copy: string;
    icon: LucideIcon;
  }>;
};

export const serviceLandingPages: Record<string, ServiceLandingPageData> = {
  electrical: {
    slug: 'electrical',
    navLabel: 'Electrical',
    title: 'Electrical repairs handled with clear next steps.',
    lead:
      'Book SS Power Pros for outlets, lighting, breaker concerns, faults and practical electrical repair work around the home.',
    eyebrow: 'Electrical service',
    serviceOption: 'Electrical repair',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=84',
    imageAlt: 'Electrician working on residential electrical equipment',
    proof: 'Repair intake before dispatch',
    overviewTitle: 'Safer electrical work, without vague handoffs.',
    overviewCopy:
      'The page focuses visitors on the exact electrical issue, then routes them into a call or request with enough context to prepare the visit.',
    included: ['Breaker and panel concerns', 'Outlet and switch repairs', 'Lighting faults', 'General electrical troubleshooting'],
    process: [
      {
        title: 'Share the symptom',
        copy: 'Tell us what is flickering, tripping, sparking or no longer working.',
        icon: ClipboardCheck,
      },
      {
        title: 'Confirm urgency',
        copy: 'We separate safety-sensitive issues from routine repair requests.',
        icon: ShieldCheck,
      },
      {
        title: 'Book the next step',
        copy: 'A technician visit is scoped with the right electrical context.',
        icon: CalendarCheck,
      },
    ],
  },
  ac: {
    slug: 'ac',
    navLabel: 'AC',
    title: 'AC service for homes that need cooling back on track.',
    lead:
      'Request help with weak cooling, noisy equipment, tune-ups and air conditioning service that needs a practical visit.',
    eyebrow: 'AC service',
    serviceOption: 'AC service',
    image:
      'https://images.unsplash.com/photo-1694675879520-ff32d348fb7f?auto=format&fit=crop&w=1600&q=84',
    imageAlt: 'Air conditioning units installed on a building exterior',
    proof: 'Cooling issue triage',
    overviewTitle: 'Cooling requests routed with the right details.',
    overviewCopy:
      'The AC landing page keeps the homeowner focused on comfort symptoms, equipment condition and the quickest way to request service.',
    included: ['AC diagnostics', 'Tune-ups and seasonal service', 'Weak cooling checks', 'Equipment replacement requests'],
    process: [
      {
        title: 'Describe the cooling issue',
        copy: 'Share whether the system is warm, loud, leaking or not turning on.',
        icon: ClipboardCheck,
      },
      {
        title: 'Match the service path',
        copy: 'Repair, tune-up and replacement conversations start from the same simple request.',
        icon: Sparkles,
      },
      {
        title: 'Schedule the visit',
        copy: 'We confirm timing and what to expect before the appointment.',
        icon: CalendarCheck,
      },
    ],
  },
  plumbing: {
    slug: 'plumbing',
    navLabel: 'Plumbing',
    title: 'Plumbing repairs for leaks, fixtures and pipe problems.',
    lead:
      'Get a clear response for water leaks, fixture issues, heater concerns and plumbing repairs before small problems spread.',
    eyebrow: 'Plumbing service',
    serviceOption: 'Plumbing repair',
    image:
      'https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=1600&q=84',
    imageAlt: 'Plumber repairing pipes in a residential bathroom',
    proof: 'Leak and fixture triage',
    overviewTitle: 'Plumbing problems need quick clarity.',
    overviewCopy:
      'This landing page is built around urgency, visible symptoms and a direct request path for common household plumbing work.',
    included: ['Leak checks', 'Fixture repairs', 'Water heater concerns', 'Pipe and drain issues'],
    process: [
      {
        title: 'Pinpoint the source',
        copy: 'Tell us where water is appearing or what fixture is failing.',
        icon: ClipboardCheck,
      },
      {
        title: 'Prioritize the risk',
        copy: 'Active leaks and water damage concerns get handled as urgent requests.',
        icon: Clock3,
      },
      {
        title: 'Confirm repair timing',
        copy: 'We outline the next practical step before sending help.',
        icon: CalendarCheck,
      },
    ],
  },
  maintenance: {
    slug: 'maintenance',
    navLabel: 'Maintenance',
    title: 'Home maintenance help for the repairs that keep piling up.',
    lead:
      'Book SS Power Pros for punch-list repairs, seasonal upkeep and practical home maintenance work that needs a reliable crew.',
    eyebrow: 'Home maintenance',
    serviceOption: 'Home maintenance',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=84',
    imageAlt: 'Contractor tools ready for home maintenance work',
    proof: 'Punch-list intake',
    overviewTitle: 'A cleaner path for everyday home repairs.',
    overviewCopy:
      'The maintenance LP groups smaller household issues into one request path so homeowners do not need to chase separate providers.',
    included: ['Small home repairs', 'Seasonal upkeep', 'Punch-list work', 'General maintenance requests'],
    process: [
      {
        title: 'List the repair items',
        copy: 'Share the work that has collected across the home.',
        icon: ClipboardCheck,
      },
      {
        title: 'Group the visit',
        copy: 'Related tasks can be organized into one practical maintenance request.',
        icon: CheckCircle2,
      },
      {
        title: 'Get it scheduled',
        copy: 'The next step is confirmed with scope, timing and contact details.',
        icon: CalendarCheck,
      },
    ],
  },
};

export const serviceSlugs = Object.keys(serviceLandingPages);

export function ServiceLandingPage({ service }: { service: ServiceLandingPageData }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.navLabel} service by SS Power Pros`,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'SS Power Pros',
      telephone: '+1234567890',
    },
    serviceType: service.serviceOption,
    areaServed: 'Local residential service area',
  };

  return (
    <>
      <SiteNavigation />
      <main>
        <LandingPageHero
          eyebrow={service.eyebrow}
          title={service.title}
          lead={service.lead}
          image={service.image}
          imageAlt={service.imageAlt}
          proof={service.proof}
          serviceOption={service.serviceOption}
        />

        <SocialProofStrip />

        <section className="trust-section" aria-label={`${service.navLabel} service highlights`}>
          <div className="container trust-grid">
            {service.included.slice(0, 3).map((item) => (
              <Reveal key={item} as="article" className="trust-card">
                <CheckCircle2 size={22} aria-hidden="true" />
                <div>
                  <h2>{item}</h2>
                  <p>Clear intake and next-step guidance from SS Power Pros.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="services" className="lp-value-section">
          <div className="container">
            <SectionHeading
              eyebrow={
                <>
                  <ClipboardCheck size={17} aria-hidden="true" />
                  What is included
                </>
              }
              title={service.overviewTitle}
              copy={service.overviewCopy}
            />

            <div className="lp-value-grid">
              {service.included.map((item, index) => (
                <Reveal key={item} as="article" className="lp-value-card" delay={index * 0.05}>
                  <CheckCircle2 size={26} aria-hidden="true" />
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
                  <p>Request help, confirm the concern and move into the next practical step.</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionHeading
              eyebrow={
                <>
                  <CalendarCheck size={17} aria-hidden="true" />
                  Service process
                </>
              }
              title="A simple path from request to repair."
              copy="Each service page keeps the next step clear so homeowners know what to share and what happens after they reach out."
            />

            <div className="process-grid">
              {service.process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} as="article" className="process-card" delay={index * 0.06}>
                    <Icon size={24} aria-hidden="true" />
                    <div className="process-card__number">0{index + 1}</div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <CtaSection
          eyebrow={`Book ${service.navLabel}`}
          title="Ready to talk through the repair?"
          copy="Send the repair details on WhatsApp or call directly so the right service path can be confirmed."
          whatsappMessage={`Hi SS Power Pros, I would like to book ${service.serviceOption}.`}
          variant="landing"
        />
      </main>
      <FooterSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
