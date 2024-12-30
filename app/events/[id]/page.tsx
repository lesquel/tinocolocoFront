import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { SectionReview } from '@/features/events/section/events/review/secitonReview';
import EventCard from '@/features/events/components/EventCard';

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function Event({ params }: EventPageProps) {
  const eventId = parseInt(params.id, 10);

  return (
    <Container>
      <Section>
        <EventCard id={eventId} />
      </Section>
      <SectionReview eventId={eventId} />
    </Container>
  );
}
