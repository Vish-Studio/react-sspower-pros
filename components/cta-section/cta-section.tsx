import { ArrowRight, PhoneCall } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { Reveal } from '@/components/reveal/reveal';
import { WhatsappCta } from '@/components/whatsapp-cta/whatsapp-cta';

export function CtaSection() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <Reveal className="cta__panel">
          <div>
            <div className="eyebrow">Book a call</div>
            <h2>Tell us what needs fixing.</h2>
          </div>
          <div>
            <p>
              Send a WhatsApp message or call directly. We’ll confirm the service, timing and
              next step.
            </p>
            <div className="hero__actions">
              <WhatsappCta />
              <CustomButton href="tel:+1234567890" variant="secondary" icon={PhoneCall}>
                Call now
              </CustomButton>
              <CustomButton href="mailto:hello@sspowerpros.com" variant="ghost" icon={ArrowRight}>
                Email details
              </CustomButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
