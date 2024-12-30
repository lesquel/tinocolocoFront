import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import ServicesCard from '@/features/services/components/ServicesCard';
import { SectionReview } from '@/features/services/section/services/reviews/secitonReview';

interface Params {
  id: string;
}

interface Props {
  params: Params;
}

export default function Event({ params }: Props) {
  const servicesId = parseInt(params.id, 10);

  if (isNaN(servicesId)) {
    return <div>Error: Invalid service ID</div>;
  }

  return (
    <Container>
      <Section>
        <ServicesCard id={servicesId} />
      </Section>
      <SectionReview serviceId={servicesId} />
    </Container>
  );
}
