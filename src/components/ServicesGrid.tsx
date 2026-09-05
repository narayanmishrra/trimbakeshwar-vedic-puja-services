/**
 * Lazy grid of all puja service cards (owns the heavy catalogue import).
 */
import React from 'react';
import { servicesData } from '../data';
import { Language } from '../types';
import ServiceCard from './ServiceCard';

interface Props {
  lang: Language;
  onSelect: (id: string) => void;
}

export default function ServicesGrid({ lang, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesData.map((service) => (
        <ServiceCard key={service.id} service={service} lang={lang} onSelect={onSelect} />
      ))}
    </div>
  );
}
