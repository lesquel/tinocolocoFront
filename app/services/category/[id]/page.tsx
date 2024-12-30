import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { GetServicesByCategory } from '@/features/services/section/categoty/category';

interface CategoryServicesProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryServices({ params }: CategoryServicesProps) {
  // Resolvemos la promesa de params
  const { id } = await params;

  // Convertimos el ID de categoría a número
  const idcategory = parseInt(id, 10);

  if (isNaN(idcategory)) {
    return <div>Error: Invalid category ID</div>;
  }

  return (
    <Container>
      <Section>
        <GetServicesByCategory
          idcategory={idcategory}
          infoComponent={{ title: 'Todos', description: 'Los Servicios' }}
          size={10}
        />
      </Section>
    </Container>
  );
}
