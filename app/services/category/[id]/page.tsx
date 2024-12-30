import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { GetServicesByCategory } from '@/features/services/section/categoty/category';

interface Params {
  id: string;
}

interface Props {
  params: Params;
}

export default function CategoryServices({ params }: Props) {
  const idcategory = parseInt(params.id, 10); // Convertir a número si es necesario

  // Check if idcategory is valid
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
