import { useQuery } from 'react-query';
import { matchApi } from '@core/api/match';

const queryKey = {
  getMatch: (name: string, id: string) => ['match', name, id] as const
};

export const useGetMatchQuery = (name: string, id: string) => {
  return useQuery(
    queryKey.getMatch(name, id),
    () => matchApi.getMatch(name, id),
    {
      suspense: true
    }
  );
};
