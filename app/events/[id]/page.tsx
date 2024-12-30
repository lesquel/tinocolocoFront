import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { SectionReview } from '@/features/events/section/events/review/secitonReview';
import EventCard from '@/features/events/components/EventCard';

// Use the correct type from Next.js or ensure compatibility with dynamic routing
interface EventPageProps {
  params: {
    id: string;
  };
}

export default function Event({ params }: { params: { id: string } }) {
  const eventId = parseInt(params.id, 10); // Convert string ID to a number

  return (
    <Container>
      <Section>
        <EventCard id={eventId} />
      </Section>
      <SectionReview eventId={eventId} />
    </Container>
  );
}
