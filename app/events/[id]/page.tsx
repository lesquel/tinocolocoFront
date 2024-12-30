import { Container } from '@/components/sections/layout/container';
import { Section } from '@/components/sections/layout/section';
import { GetEventsByCategory } from '@/features/events/section/category/category';

type Props = {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Page = ({ params }: Props) => {
  const idcategory = parseInt(params.id, 10);

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

export default Page;