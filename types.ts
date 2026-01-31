import React from 'react';

export type Page = 'home' | 'services' | 'work';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Added AIQuoteEstimation interface as required by geminiService.ts and SmartQuote.tsx
export interface AIQuoteEstimation {
  likelyIssue: string;
  severity: string;
  estimatedCostRange: string;
  professionalAdvice: string;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  WORK = 'work', // Added for Portfolio
  QUOTE = 'quote',
  ABOUT = 'about',
  CONTACT = 'contact'
}