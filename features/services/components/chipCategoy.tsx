import { useCallback } from 'react';
import { Chip } from '@nextui-org/react';

import { getServiceCategory } from '../services/services';

import { useApiRequest } from '@/hooks/useApiRequest';

export function ChipCategory({ idCategory }: { idCategory: number }) {
  const fetchCategoryService = useCallback(
    () => getServiceCategory(idCategory),
    [idCategory],
  );
  const { data, error } = useApiRequest(fetchCategoryService);

  if (error) {
    return <div>Error al obtener los datos</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      Categoría: <Chip>{data.event_category_description.toUpperCase()}</Chip>
    </div>
  );
}
