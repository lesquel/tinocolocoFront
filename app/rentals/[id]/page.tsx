import { RentalSection } from '@/features/rentals/sections/RentalSection';

interface RentalPageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function RentalPage({ params }: RentalPageProps) {
  const id = parseInt(params.id, 10);

  return (
    <div className="w-full pt-4">
      <RentalSection id={id} />
    </div>
  );
}