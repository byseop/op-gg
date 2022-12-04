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

export interface IMatchChampion {
  assists: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  wins: number;
}

export interface IMatchGame {
  champion: IMatchChampion;
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: true;
  items: [
    {
      imageUrl: string;
    }
  ];
  mapInfo: {
    imageUrl: string;
    mapId: number;
  };
  mmr: number;
  needRenew: true;
  peak: [string];
  spells: [
    {
      imageUrl: string;
    }
  ];
  stats: {
    general: {
      assist: number;
      contributionForKillRate: string;
      cs: number;
      csPerMin: number;
      death: number;
      goldEarned: number;
      kdaString: string;
      kill: number;
      largestMultiKillString: string;
      opScoreBadge: string;
      totalDamageDealtToChampions: number;
    };
    ward: {
      sightWardsBought: number;
      visionWardsBought: number;
    };
  };
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

export interface IMatchPosition {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

export interface IMatchSummary {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
}

export interface IMatchRes {
  champions: IMatchChampion[];
  games: IMatchGame[];
  positions: IMatchPosition[];
  summary: IMatchSummary;
}
