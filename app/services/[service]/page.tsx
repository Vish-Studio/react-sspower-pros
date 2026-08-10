import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ServiceLandingPage,
  serviceLandingPages,
  serviceSlugs,
} from '@/components/service-landing-page/service-landing-page';

type ServicePageProps = {
  params: Promise<{
    service: string;
  }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = serviceLandingPages[serviceSlug];

  if (!service) {
    return {};
  }

  return {
    title: `${service.navLabel} Service | SS Power Pros`,
    description: service.lead,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = serviceLandingPages[serviceSlug];

  if (!service) {
    notFound();
  }

  return <ServiceLandingPage service={service} />;
}
