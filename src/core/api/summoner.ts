import { request } from './';

import type {
  ISummonerInfoRes,
  ISummonerMostRes,
  IMatchRes
} from '@interfaces/summoner';

export const summonerApi = {
  getSummonerInfo: (name: string) =>
    request<ISummonerInfoRes>({
      url: `/summoner/${name}`,
      method: 'GET'
    }),

  getSummonerMost: (name: string) =>
    request<ISummonerMostRes>({
      url: `/summoner/${name}/mostInfo`,
      method: 'GET'
    }),

  getSummonerMatches: (name: string) =>
    request<IMatchRes>({
      url: `/summoner/${name}/matches`,
      method: 'GET'
    })
};
