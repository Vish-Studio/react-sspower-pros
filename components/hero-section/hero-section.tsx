'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { PhoneCall, ShieldCheck } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { WhatsappCta } from '@/components/whatsapp-cta/whatsapp-cta';

const serviceChips = ['Electrical', 'AC', 'Plumbing', 'Maintenance'];

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=84',
    alt: 'Bright, well-maintained living room in a family home',
    label: 'Home',
    position: 'center 52%',
  },
  {
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=84',
    alt: 'Electrician working on residential electrical equipment',
    label: 'Electrical',
    position: 'center 48%',
  },
  {
    src: 'https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=1800&q=84',
    alt: 'Plumber repairing pipes in a residential bathroom',
    label: 'Plumbing',
    position: 'center 48%',
  },
  {
    src: 'https://images.unsplash.com/photo-1694675879520-ff32d348fb7f?auto=format&fit=crop&w=1800&q=84',
    alt: 'Air conditioning units installed on a building exterior',
    label: 'Cooling',
    position: 'center 50%',
  },
  {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=84',
    alt: 'Professional cleaning a window as part of home maintenance',
    label: 'Maintenance',
    position: 'center 50%',
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero hero--editorial">
      <div className="container hero__shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="hero__intro"
        >
          <div>
            <div className="eyebrow">
              <ShieldCheck size={17} aria-hidden="true" />
              Electrical, AC, plumbing and home maintenance
            </div>
            <h1 className="hero__title">Home repairs that feel handled.</h1>
          </div>
          <div className="hero__intro-copy">
            <p>
              One responsive local contractor for electrical faults, cooling issues, plumbing
              repairs and maintenance work.
            </p>
            <div className="hero__actions">
              <WhatsappCta />
              <CustomButton href="tel:+1234567890" variant="secondary" icon={PhoneCall}>
                Call now
              </CustomButton>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: 'easeOut', delay: 0.12 }}
          className="hero__stage"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={heroSlides[activeSlide].src}
              className="hero__slide"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.015 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <Image
                src={heroSlides[activeSlide].src}
                alt={heroSlides[activeSlide].alt}
                fill
                priority={activeSlide === 0}
                sizes="(max-width: 980px) 100vw, 1320px"
                style={{ objectPosition: heroSlides[activeSlide].position }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="hero__service-chips" aria-label="Available service categories">
            {serviceChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <div className="hero__carousel-status" aria-label="Hero image carousel">
            <span>{heroSlides[activeSlide].label}</span>
            <div>
              {heroSlides.map((slide, index) => (
                <span
                  key={slide.src}
                  className={`hero__dot${index === activeSlide ? ' hero__dot--active' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="hero__booking-bar">
            <div>
              <span>Same-day call-backs for urgent issues</span>
              <h2>Tell us what needs fixing.</h2>
            </div>
            <div className="hero__booking-actions">
              <WhatsappCta message="Hi SS Power Pros, I would like to start a booking." />
              <CustomButton href="tel:+1234567890" variant="secondary" icon={PhoneCall}>
                Call now
              </CustomButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
