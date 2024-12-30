import { useState } from 'react';

export const useAsyncAction = (action: (data: any, id?: number) => Promise<any>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const execute = async (data: any, onSuccess?: (response: any) => void) => {
    setLoading(true);
    setError(null);
    try {
      const response = await action(data);

      onSuccess?.(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, execute };
};
