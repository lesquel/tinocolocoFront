"use client";
import { useState } from "";
import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { SectionReview } from '@/features/events/section/events/review/secitonReview';
import EventCard from '@/features/events/components/EventCard';

export default async function Event({ params }: { params: { id: string } }) {
  const eventId = await params.id;
  return (
    <Container>
      <Section>
        <EventCard id={eventId} />
      </Section>

      <SectionReview eventId={eventId} />
    </Container>
  );
}
