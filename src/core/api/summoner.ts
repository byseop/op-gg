import { request } from './';

import type { ISummonerInfoRes } from '@interfaces/summoner';

export const summonerApi = {
  getSummonerInfo: (name: string) =>
    request<ISummonerInfoRes>({
      url: `/summoner/${name}`,
      method: 'GET'
    })
};
