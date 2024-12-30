import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { GetEventsByCategory } from '@/features/events/section/category/category';

interface CategoryEventProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function CategoryEvent({ params }: CategoryEventProps) {
  const { id } = params;
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