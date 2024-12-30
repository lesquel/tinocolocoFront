import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { SectionReview } from '@/features/events/section/events/review/secitonReview';
import EventCard from '@/features/events/components/EventCard';

export default function Event({ params }: { params: { id: string } }) {
  // Convertimos el ID a número si es necesario
  const eventId = Number(params.id);

  return (
    <Container>
      <Section>
        <EventCard id={eventId} />
      </Section>

      <SectionReview eventId={eventId} />
    </Container>
  );
}
