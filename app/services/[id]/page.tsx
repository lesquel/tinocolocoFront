import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import ServicesCard from '@/features/services/components/ServicesCard';
import { SectionReview } from '@/features/services/section/services/reviews/secitonReview';

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Event({ params }: EventPageProps) {
  // Resolvemos la promesa de params
  const { id } = await params;

  // Convertimos el ID de servicio a número
  const servicesId = parseInt(id, 10);

  return (
    <Container>
      <Section>
        <ServicesCard id={servicesId} />
      </Section>
      <SectionReview serviceId={servicesId} />
    </Container>
  );
}
