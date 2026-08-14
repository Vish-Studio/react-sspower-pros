import { PhoneCall } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { Reveal } from '@/components/reveal/reveal';
import { WhatsappCta } from '@/components/whatsapp-cta/whatsapp-cta';

type CtaSectionProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  whatsappMessage?: string;
  variant?: 'home' | 'landing';
};

export const CtaSection = ({
  eyebrow = 'Book on WhatsApp',
  title = 'Tell us what needs fixing.',
  copy = 'Send a WhatsApp message or call directly. We’ll confirm the service, timing and next step.',
  whatsappMessage,
  variant = 'home',
}: CtaSectionProps) => {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <Reveal className={`cta__panel cta__panel--${variant}`}>
          <div className="cta__content">
            <div className="eyebrow">{eyebrow}</div>
            <h2>{title}</h2>
          </div>
          <div className="cta__details">
            <p>{copy}</p>
            <div className="hero__actions">
              <WhatsappCta message={whatsappMessage} />
              <CustomButton href="tel:+1234567890" variant="secondary" icon={PhoneCall}>
                Call now
              </CustomButton>
            </div>
            {variant === 'landing' ? (
              <ol className="cta__steps" aria-label="What happens next">
                <li>
                  <span>01</span>
                  Share the issue
                </li>
                <li>
                  <span>02</span>
                  Confirm the visit
                </li>
                <li>
                  <span>03</span>
                  Get it handled
                </li>
              </ol>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
