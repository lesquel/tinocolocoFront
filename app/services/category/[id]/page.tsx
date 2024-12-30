import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { GetServicesByCategory } from '@/features/services/section/categoty/category';

interface CategoryServicesProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function CategoryServices({ params }: CategoryServicesProps) {
  const idcategory = parseInt(params.id, 10);

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