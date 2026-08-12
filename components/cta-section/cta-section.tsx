import { PhoneCall } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { Reveal } from '@/components/reveal/reveal';
import { WhatsappCta } from '@/components/whatsapp-cta/whatsapp-cta';

type CtaSectionProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  whatsappMessage?: string;
};

export function CtaSection({
  eyebrow = 'Book on WhatsApp',
  title = 'Tell us what needs fixing.',
  copy = 'Send a WhatsApp message or call directly. We’ll confirm the service, timing and next step.',
  whatsappMessage,
}: CtaSectionProps) {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <Reveal className="cta__panel">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2>{title}</h2>
          </div>
          <div>
            <p>{copy}</p>
            <div className="hero__actions">
              <WhatsappCta message={whatsappMessage} />
              <CustomButton href="tel:+1234567890" variant="secondary" icon={PhoneCall}>
                Call now
              </CustomButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
