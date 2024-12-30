import { TitleSection } from '@/components/utils/titleSection';
import { InforShorts } from '@/features/events/components/inforShorts';
import { AddRentalForm } from '@/features/rentals/sections/addRentalForm';

interface Props {
  params: Promise<{
    idEvent: string;
  }>;
}

export default async function AddRental({ params }: Props) {
  // Resolvemos la promesa de params
  const { idEvent } = await params;

  // Convertimos el ID del evento a número
  const eventId = parseInt(idEvent, 10);

  return (
    <div className="container mx-auto py-6 flex flex-col md:flex-row justify-center relative gap-6">
      <div className="sticky top-20 ">
        <TitleSection description="Evento" title="" />
        <InforShorts idEvent={eventId} />
      </div>
      <AddRentalForm idEvent={eventId} />
    </div>
  );
}
