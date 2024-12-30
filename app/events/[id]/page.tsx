import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { SectionReview } from '@/features/events/section/events/review/secitonReview';
import EventCard from '@/features/events/components/EventCard';

export default async function Event({ params }: { params: Promise<{ id: string }> }) {
  // Resolvemos la promesa de params
  const { id } = await params;

  // Convertimos el ID a número si es necesario
  const eventId = Number(id);

  return (
    <Container>
      <Section>
        <EventCard id={eventId} />
      </Section>

      <SectionReview eventId={eventId} />
    </Container>
  );
}
