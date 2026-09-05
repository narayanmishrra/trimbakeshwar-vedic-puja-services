/**
 * Lazy route wrapper: resolves a service id against the full catalogue.
 * Keeps `data.ts` out of the initial bundle.
 */
import React from 'react';
import { servicesData } from '../data';
import { Language } from '../types';
import ServiceDetail from './ServiceDetail';

interface Props {
  id: string;
  lang: Language;
  onBack: () => void;
}

export default function ServiceDetailRoute({ id, lang, onBack }: Props) {
  const service = servicesData.find((s) => s.id === id);
  if (!service) return null;
  return <ServiceDetail service={service} lang={lang} onBack={onBack} />;
}
