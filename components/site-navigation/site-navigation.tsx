'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { WhatsappCta } from '@/components/whatsapp-cta/whatsapp-cta';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Book', href: '/#contact' },
];

const serviceItems = [
  { label: 'Electrical', href: '/services/electrical' },
  { label: 'AC', href: '/services/ac' },
  { label: 'Plumbing', href: '/services/plumbing' },
  { label: 'Maintenance', href: '/services/maintenance' },
];

export function SiteNavigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link href="/#home" className="brand-mark" aria-label="SS Power Pros home">
          <span>SS Power Pros</span>
        </Link>
        <nav className="site-nav__links" aria-label="Primary navigation">
          <div className="site-nav__menu" ref={menuRef}>
            <button
              type="button"
              className="site-nav__menu-trigger"
              aria-expanded={isServicesOpen}
              aria-controls="services-submenu"
              onClick={() => setIsServicesOpen((current) => !current)}
            >
              <span>Services</span>
              <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div
              id="services-submenu"
              className={`site-nav__submenu${isServicesOpen ? ' site-nav__submenu--open' : ''}`}
              aria-label="Service pages"
            >
              {serviceItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsServicesOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-nav__actions">
          <WhatsappCta className="site-nav__whatsapp">WhatsApp</WhatsappCta>
        </div>
      </div>
    </header>
  );
}
