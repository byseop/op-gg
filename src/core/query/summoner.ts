import { useQuery } from 'react-query';
import { summonerApi } from '@core/api/summoner';
import { useDispatch } from 'react-redux';
import summonerStateSlice from '@core/reducers/summoner';

export const queryKey = {
  getSummonerInfo: (name: string) => ['summoner-info', name] as const,
  getSummonerMost: (name: string) => ['summoner-most', name] as const,
  getSummonerMatches: (name: string) => ['summoner-matches', name] as const
};

export const useGetSummoner = (name: string) => {
  return useQuery(
    queryKey.getSummonerInfo(name),
    () => summonerApi.getSummonerInfo(name),
    {
      suspense: true
    }
  );
};

export const useGetSummonerMost = (name: string) => {
  return useQuery(
    queryKey.getSummonerMost(name),
    () => summonerApi.getSummonerMost(name),
    {
      suspense: true
    }
  );
};

export const useGetSummonerMatches = (name: string) => {
  const dispatch = useDispatch();

  return useQuery(
    queryKey.getSummonerMatches(name),
    () => summonerApi.getSummonerMatches(name),
    {
      suspense: true,
      onSuccess: (res) => {
        // 가장 많이 플레이한 포지션을 저장
        const max = res.positions.slice().sort((a, b) => b.games - a.games)[0];
        dispatch(summonerStateSlice.actions.updatePreferencePosition(max));
      }
    }
  );
};
