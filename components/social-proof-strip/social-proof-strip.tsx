import { Clock3, ShieldCheck, Star } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';

const proofItems = [
  {
    title: '5-star reviewed',
    copy: 'Trusted for clean, practical residential service.',
    icon: Star,
  },
  {
    title: 'Fast call-backs',
    copy: 'Clear next steps for urgent repair requests.',
    icon: Clock3,
  },
  {
    title: 'One contractor',
    copy: 'Electrical, AC, plumbing and maintenance in one place.',
    icon: ShieldCheck,
  },
];

export function SocialProofStrip() {
  return (
    <section className="social-proof-strip" aria-label="SS Power Pros social proof">
      <div className="container social-proof-strip__grid">
        {proofItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} as="article" className="social-proof-card" delay={index * 0.05}>
              <Icon size={22} aria-hidden="true" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
