export interface IPlayer {
  champion: {
    imageUrl: string;
    level: string;
  };
  summonerId: string;
  summonerName: string;
}

export interface ITeam {
  players: IPlayer[];
  teamId: string;
}

export interface IMatchDetailRes {
  gameId: string;
  teams: ITeam[];
}
