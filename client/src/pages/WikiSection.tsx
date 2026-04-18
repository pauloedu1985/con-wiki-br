import React, { useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { WikiRenderer } from '@/components/WikiRenderer';
import { getSectionById, getPreviousSection, getNextSection, wikiSections } from '@/data/wikiContent';
import NotFound from './NotFound';

export default function WikiSection() {
  const [match, params] = useRoute('/wiki/:id');
  const [, setLocation] = useLocation();

  if (!match) return null;

  const sectionId = params?.id as string;
  const section = getSectionById(sectionId);

  if (!section) {
    return <NotFound />;
  }

  const previousSection = getPreviousSection(sectionId);
  const nextSection = getNextSection(sectionId);

  // Get related sections with full data
  const relatedSectionsData = section.relatedSections
    .map(id => getSectionById(id))
    .filter(Boolean) as typeof wikiSections;

  return (
    <WikiRenderer
      title={section.title}
      icon={section.icon}
      content={section.content}
      category={section.category}
      onPrevious={previousSection ? () => setLocation(`/wiki/${previousSection.id}`) : undefined}
      onNext={nextSection ? () => setLocation(`/wiki/${nextSection.id}`) : undefined}
      previousTitle={previousSection?.title}
      nextTitle={nextSection?.title}
      relatedSections={relatedSectionsData.map(s => ({
        id: s.id,
        title: s.title,
        icon: s.icon
      }))}
    />
  );
}
