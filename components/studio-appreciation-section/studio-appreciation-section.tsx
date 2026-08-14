import { ArrowUpRight, BadgeCheck, Brush, Code2, Gauge, Sparkles } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { Reveal } from '@/components/reveal/reveal';

const studioOffers = [
  {
    label: 'Conversion-led websites',
    icon: Gauge,
  },
  {
    label: 'Brand-aligned UI systems',
    icon: Brush,
  },
  {
    label: 'Fast, responsive builds',
    icon: Code2,
  },
];

type StudioAppreciationSectionProps = {
  note?: string;
};

export const StudioAppreciationSection = ({ note }: StudioAppreciationSectionProps) => {
  return (
    <section className="studio-appreciation" aria-label="Website design credit">
      <div className="container studio-appreciation__panel">
        <Reveal className="studio-appreciation__copy" direction="left">
          <div className="eyebrow">
            <Sparkles size={17} aria-hidden="true" />
            Digital partner
          </div>
          <h2>Built with care by VISH Studio.</h2>
          <p>
            VISH Studio helps service businesses turn their expertise into clear, conversion-ready
            digital experiences.
          </p>
          <CustomButton
            href="https://www.vish.studio"
            variant="primary"
            icon={ArrowUpRight}
            className="studio-appreciation__cta"
          >
            Explore VISH Studio
          </CustomButton>
          {note ? <span className="studio-appreciation__note">{note}</span> : null}
        </Reveal>

        <Reveal className="studio-appreciation__offers-wrap" direction="right">
          <ul className="studio-appreciation__offers">
            {studioOffers.map((offer) => {
              const Icon = offer.icon;
              return (
                <li key={offer.label}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{offer.label}</span>
                  <BadgeCheck size={18} aria-hidden="true" />
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
