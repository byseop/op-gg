import { memo } from 'react';
import { getGameLength, getRelativeTime } from '@core/utils/time';
import { useGetMatchQuery } from '@core/query/match';

import type { IMatchGame } from '@interfaces/summoner';
import { Link } from 'react-router-dom';

interface IProps {
  className?: string;
  data: IMatchGame;
}

const Match: React.FC<IProps> = ({ className, data }) => {
  const { data: matchDetail } = useGetMatchQuery(
    data.summonerName,
    data.gameId
  );

  return (
    <div className={`${className} match-containter`}>
      <div className="match" data-match-win={data.isWin}>
        <div className="match-div-1">
          <div className="match-type">
            <span>
              <strong>{data.gameType}</strong>
            </span>
          </div>
          <div className="match-date">
            <span>{getRelativeTime(data.createDate)}</span>
          </div>
          <div className="match-win">
            <span>
              <strong>{data.isWin ? '승리' : '패배'}</strong>
            </span>
          </div>
          <div className="match-time">
            <span>{getGameLength(data.gameLength)}</span>
          </div>
        </div>

        <div className="match-div-2">
          <div className="match-div-2-top">
            <div className="champ-img">
              <img src={data.champion.imageUrl} alt="챔피언" />
            </div>
            <div className="match-pick">
              <div className="spell-container">
                {data.spells.map((spell, index) => (
                  <div className="spell" key={`spell-${index}`}>
                    <img src={spell.imageUrl} alt="스펠" />
                  </div>
                ))}
              </div>
              <div className="peak-container">
                {data.peak.map((peak, index) => (
                  <div className="peak" key={`peak-${index}`}>
                    <img src={peak} alt="peak" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="match-div-2-bottom">
            <p>챔피언이름</p>
            {/* FIXME: 챔피언 이름 알 수 없는데...? */}
          </div>
        </div>

        <div className="match-div-3">
          <div className="kda">
            <strong>
              <span>{data.stats.general.kill}</span> /{' '}
              <span className="death">{data.stats.general.death}</span> /{' '}
              <span>{data.stats.general.death}</span>
            </strong>
          </div>
          <div className="avg">
            <strong>
              <span className="avg-number">{data.stats.general.kdaString}</span>
              <span> 평점</span>
            </strong>
          </div>
          {(data.stats.general.largestMultiKillString ||
            data.stats.general.opScoreBadge) && (
            <div className="badges">
              {data.stats.general.largestMultiKillString && (
                <div>
                  <span className="kill-badge">
                    {data.stats.general.largestMultiKillString}
                  </span>
                </div>
              )}
              {data.stats.general.opScoreBadge && (
                <div>
                  <span className="op-badge">
                    {data.stats.general.opScoreBadge}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="match-div-4">
          <div className="champ-lev">
            <span>레벨{data.champion.level}</span>
          </div>
          <div className="cs">
            <span>
              {data.stats.general.cs} ({data.stats.general.csPerMin}) CS
            </span>
          </div>
          <div className="kill-ctr">
            <span>킬관여 {data.stats.general.contributionForKillRate}</span>
          </div>
        </div>

        <div className="match-div-5">
          <div className="inventory">
            <div className="items">
              {new Array(8).fill(true).map((_, index) => (
                <div className="item" key={`item-${data.gameId}-${index}`}>
                  {data.items[index] && (
                    <img src={data.items[index].imageUrl} alt="아이템" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="ward">
            <span>제어 와드 {data.stats.ward.visionWardsBought}</span>
          </div>
        </div>

        <div className="match-div-6">
          <div className="match-member">
            {matchDetail?.teams.map((team) => (
              <div
                className={`team team-${team.teamId}`}
                key={`team-${data.gameId}-${team.teamId}`}
              >
                <ul>
                  {team.players.map((player) => (
                    <li key={`player-${team.teamId}-${player.summonerId}`}>
                      <Link to={`/summoners/${player.summonerName}`}>
                        <span className="img">
                          <img src={player.champion.imageUrl} alt="챔피언" />
                        </span>
                        <span>{player.summonerName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Match);
