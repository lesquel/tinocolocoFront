// app/events/[id]/page.tsx

import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { SectionReview } from '@/features/events/section/events/review/secitonReview';
import EventCard from '@/features/events/components/EventCard';

// Define the type for the page props
interface EventPageProps {
  params: { id: string };
}

const Event = ({ params }: EventPageProps) => {
  const eventId = parseInt(params.id, 10);

  console.log('eventId', eventId);

  return (
    <Container>
      <Section>
        <EventCard id={eventId} />
      </Section>

      <SectionReview eventId={eventId} />
    </Container>
  );
};

export default Event;
