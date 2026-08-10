export function FooterSection() {
  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/sspowerpros' },
    { label: 'Facebook', href: 'https://www.facebook.com/sspowerpros' },
    { label: 'Google Reviews', href: 'https://www.google.com/search?q=SS+Power+Pros+reviews' },
  ];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="SS Power Pros home">
            SS Power Pros
          </a>
          <p>Electrical, AC, plumbing and house maintenance from one responsive contractor.</p>
          <div className="footer__proof" aria-label="SS Power Pros social proof">
            <div>
              <strong>5-star</strong>
              <span>Reviewed service</span>
            </div>
            <div>
              <strong>Same day</strong>
              <span>Urgent call-backs</span>
            </div>
            <div>
              <strong>4 trades</strong>
              <span>One contractor</span>
            </div>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2>Navigate</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Book on WhatsApp</a>
            </li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h2>Contact</h2>
          <a href="#contact">Book on WhatsApp</a>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
          <a href="mailto:hello@sspowerpros.com">hello@sspowerpros.com</a>
          <div className="footer__socials" aria-label="Social links">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 SS Power Pros. All rights reserved.</p>
        <p>
          Website by{' '}
          <a className="footer__studio-link" href="https://www.vish.studio" target="_blank" rel="noreferrer">
            VISH studio
          </a>
        </p>
      </div>
    </footer>
  );
}
