export interface ISummonerInfoRes {
  summoner: ISummoner;
}

export interface ISummoner {
  ladderRank: {
    rank: number;
    rankPercentOfTop: number;
  };
  leagues: [
    {
      hasResults: true;
      wins: number;
      losses: number;
      tierRank: {
        division: string;
        imageUrl: string;
        lp: number;
        name: string;
        season: number;
        shortString: string;
        string: string;
        tier: string;
        tierDivision: string;
        tierRankPoint: number;
      };
    }
  ];
  level: number;
  name: string;
  previousTiers: [
    {
      division: string;
      imageUrl: string;
      lp: number;
      name: string;
      season: number;
      shortString: string;
      string: string;
      tier: string;
      tierDivision: string;
      tierRankPoint: number;
    }
  ];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export interface IChampion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface IWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface ISummonerMostRes {
  champions: IChampion[];
  recentWinRate: IWinRate[];
}
