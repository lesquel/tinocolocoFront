import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { GetEventsByCategory } from '@/features/events/section/category/category';

export default function CategoryEvent({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;  // No need to await params
  const idcategory = parseInt(id, 10);

  return (
    <Container>
      <Section>
        <GetEventsByCategory
          idcategory={idcategory}
          infoComponent={{ title: 'Todos', description: 'Los Eventos' }}
          size={10}
        />
      </Section>
    </Container>
  );
}
