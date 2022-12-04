import { request } from './';

import type { IMatchDetailRes } from '@interfaces/match';

export const matchApi = {
  getMatch: (name: string, id: string) =>
    request<IMatchDetailRes>({
      url: `/summoner/${name}/matchDetail/${id}`,
      method: 'GET'
    })
};
