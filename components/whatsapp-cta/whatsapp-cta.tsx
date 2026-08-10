import { MessageCircle } from 'lucide-react';

type WhatsappCtaProps = {
  children?: string;
  message?: string;
  className?: string;
};

const whatsappNumber = '';

export function WhatsappCta({
  children = 'Book on WhatsApp',
  message = 'Hi SS Power Pros, I would like to book a service.',
  className = '',
}: WhatsappCtaProps) {
  const href = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : '#contact';
  const classes = ['whatsapp-cta', className].filter(Boolean).join(' ');

  return (
    <a href={href} className={classes} data-whatsapp-message={message}>
      <MessageCircle className="whatsapp-cta__icon" size={18} strokeWidth={2.3} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}
