import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { GetEventsByCategory } from '@/features/events/section/category/category';

interface CategoryEventProps {
  params: Promise<{
    id: string;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function CategoryEvent({ params }: CategoryEventProps) {
  // Resolvemos la promesa de params
  const { id } = await params;

  // Convertimos el ID a número
  const idcategory = Number(id);

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
