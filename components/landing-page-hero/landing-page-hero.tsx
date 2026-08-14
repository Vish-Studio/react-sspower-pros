import Image from 'next/image';
import { Clock3, PhoneCall, ShieldCheck } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { Reveal } from '@/components/reveal/reveal';
import { WhatsappCta } from '@/components/whatsapp-cta/whatsapp-cta';

type LandingPageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  proof: string;
  serviceOption: string;
};

const LandingPageHero = ({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  proof,
  serviceOption,
}: LandingPageHeroProps) => (
  <section id="home" className="hero hero--editorial lp-hero">
    <div className="container hero__shell">
      <Reveal className="hero__intro lp-hero__intro">
        <div>
          <div className="eyebrow">
            <ShieldCheck size={17} aria-hidden="true" />
            {eyebrow}
          </div>
          <h1 className="hero__title">{title}</h1>
        </div>
        <div className="hero__intro-copy">
          <p className="hero__lead">{lead}</p>
          <div className="hero__actions">
            <WhatsappCta message={`Hi SS Power Pros, I would like to book ${serviceOption}.`} />
            <CustomButton href="tel:+1234567890" variant="secondary" icon={PhoneCall}>
              Call now
            </CustomButton>
          </div>
        </div>
      </Reveal>

      <Reveal className="hero__stage lp-hero__stage" delay={0.08}>
        <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 980px) 100vw, 48vw" />
        <div className="lp-hero__badge">
          <Clock3 size={18} aria-hidden="true" />
          <span>{proof}</span>
        </div>
        <div className="hero__booking-bar lp-hero__booking-bar">
          <div>
            <span>WhatsApp booking</span>
            <h2>Tell us what needs fixing.</h2>
          </div>
          <div className="hero__booking-actions">
            <WhatsappCta message={`Hi SS Power Pros, I would like to book ${serviceOption}.`} />
            <CustomButton href="tel:+1234567890" variant="secondary" icon={PhoneCall}>
              Call now
            </CustomButton>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default LandingPageHero;
