import { RentalSection } from '@/features/rentals/sections/RentalSection';

interface RentalPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RentalPage({ params }: RentalPageProps) {
  // Resolvemos la promesa de params
  const { id } = await params;

  // Convertimos el ID a número
  const rentalId = parseInt(id, 10);

  return (
    <div className="w-full pt-4">
      <RentalSection id={rentalId} />
    </div>
  );
}
