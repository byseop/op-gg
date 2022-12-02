import { useMemo } from 'react';
import { useGetSummoner } from '@core/query/summoner';
import { deromanize } from '@core/utils/deromanize';

interface IProps {
  className?: string;
  summonerName: string;
}

const RANK_TYPE_ENUM = {
  SOLO_RANK: '솔랭',
  TEAM_RANK: '자유 5:5 랭크'
};

const League: React.FC<IProps> = ({ className, summonerName }) => {
  const { data } = useGetSummoner(summonerName);

  const soloRank = useMemo(() => {
    if (!data) return undefined;
    return data.summoner.leagues.find(
      (league) => league.tierRank.name === RANK_TYPE_ENUM.SOLO_RANK
    );
  }, [data]);

  const teamRank = useMemo(() => {
    if (!data) return undefined;
    return data.summoner.leagues.find(
      (league) => league.tierRank.name === RANK_TYPE_ENUM.TEAM_RANK
    );
  }, [data]);

  return (
    <div className={`league-container ${className}`}>
      <div className="league">
        {soloRank ? (
          <>
            <div className="league-medal">
              <img
                src={soloRank.tierRank.imageUrl}
                alt={soloRank.tierRank.tierDivision}
              />
            </div>
            <div className="league-stats">
              <div className="league-type">
                <span>솔로 랭크</span>
              </div>
              <div className="league-games">
                <span>
                  <strong>탑</strong> (총{' '}
                  {(soloRank.wins + soloRank.losses).toLocaleString()}게임)
                </span>
              </div>
              <div className="league-tier">
                <span>
                  <strong>{`${soloRank.tierRank.tier} ${deromanize(
                    soloRank.tierRank.division
                  )}`}</strong>
                </span>
              </div>
              <div className="league-record">
                <span>
                  <strong>{soloRank.tierRank.lp} LP</strong> / {soloRank.wins}승{' '}
                  {soloRank.losses}패
                </span>
              </div>
              <div className="league-winrate">
                <span>
                  승률{' '}
                  {Math.round(
                    (soloRank.wins / (soloRank.wins + soloRank.losses)) * 100
                  )}
                  %
                </span>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="league">
        {teamRank ? (
          <>
            <div className="league-medal">
              <img
                src={teamRank.tierRank.imageUrl}
                alt={teamRank.tierRank.tierDivision}
              />
            </div>
            <div className="league-stats">
              <div className="league-type">
                <span>자유 5:5 랭크</span>
              </div>
              <div className="league-games">
                <span>
                  <strong>탑</strong> (총{' '}
                  {(teamRank.wins + teamRank.losses).toLocaleString()}게임)
                </span>
              </div>
              <div className="league-tier">
                <span>
                  <strong>{`${teamRank.tierRank.tier} ${deromanize(
                    teamRank.tierRank.division
                  )}`}</strong>
                </span>
              </div>
              <div className="league-record">
                <span>
                  <strong>{teamRank.tierRank.lp} LP</strong> / {teamRank.wins}승{' '}
                  {teamRank.losses}패
                </span>
              </div>
              <div className="league-winrate">
                <span>
                  승률{' '}
                  {Math.round(
                    (teamRank.wins / (teamRank.wins + teamRank.losses)) * 100
                  )}
                  %
                </span>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default League;
