import { useGetSummonerMatches } from '@core/query/summoner';
import { PieChart, Pie, Cell } from 'recharts';
import { useMemo } from 'react';
import {
  getKdaColor,
  getWinrateColor,
  getAvgColor
} from '@core/utils/getStyles';
import { positionConstant } from '@core/utils/positionConstant';

interface IProps {
  className?: string;
  summonerName: string;
}

const DEFINED_MAX_CHAMPION_COUNT = 3;

const Overview: React.FC<IProps> = ({ className, summonerName }) => {
  const { data } = useGetSummonerMatches(summonerName);

  const chartData = useMemo(() => {
    if (!data) return undefined;
    return [
      { name: 'wins', value: data.summary.wins, color: '#1f8ecd' },
      { name: 'losses', value: data.summary.losses, color: '#ee5a52' }
    ];
  }, [data]);

  return (
    <div className={`${className} match-overview`}>
      <div className="match-overview-chart">
        <div className="left-box">
          <div className="record-text">
            {data && (
              <span>
                {data.summary.wins + data.summary.losses}전 {data.summary.wins}
                승 {data.summary.losses}패
              </span>
            )}
          </div>
          <div className="chart-container">
            {data && (
              <span className="text">
                {Math.round(
                  (data.summary.wins /
                    (data.summary.wins + data.summary.losses)) *
                    100
                )}
                %
              </span>
            )}
            <PieChart width={100} height={100}>
              <Pie
                data={chartData}
                dataKey="value"
                cx={45}
                cy={45}
                innerRadius={30}
                outerRadius={45}
              >
                {chartData?.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={chartData[index].color} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="right-box">
          <div className="text-wrap">
            <div className="kda">
              <span>
                <strong>{data?.summary.kills}</strong> /{' '}
                <strong>{data?.summary.assists}</strong> /{' '}
                <strong>{data?.summary.deaths}</strong>
              </span>
            </div>
            <div className="kda-2">
              {data && (
                <span>
                  <strong
                    style={getKdaColor(
                      (data.summary.kills + data.summary.assists) /
                        data.summary.deaths
                    )}
                  >
                    {(
                      (data.summary.kills + data.summary.assists) /
                      data.summary.deaths
                    ).toFixed(2)}
                  </strong>{' '}
                  <span
                    style={getWinrateColor(
                      (data.summary.wins /
                        (data.summary.wins + data.summary.losses)) *
                        100
                    )}
                  >
                    (
                    {Math.round(
                      (data.summary.wins /
                        (data.summary.wins + data.summary.losses)) *
                        100
                    )}
                    %)
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="match-overview-champ">
        {data?.champions.map((champion, index) => (
          <div className="champ-wrap" key={`most-${champion.id}-${index}`}>
            <div className="champ-img">
              <img
                src={champion.imageUrl}
                alt={`overview-champ-${champion.id}`}
              />
            </div>
            <div className="champ-text">
              <div className="champ-name">
                <span>{champion.name}</span>
              </div>
              <div className="champ-stats">
                <span>
                  <strong
                    style={getWinrateColor(
                      Math.round(
                        (champion.wins / (champion.wins + champion.losses)) *
                          100
                      )
                    )}
                  >
                    {Math.round(
                      (champion.wins / (champion.wins + champion.losses)) * 100
                    )}
                  </strong>
                  % ({champion.wins}승 {champion.losses}패)
                  <strong
                    className="avg"
                    style={getAvgColor(
                      champion.kills + champion.assists / champion.deaths
                    )}
                  >
                    {(
                      champion.kills +
                      champion.assists / champion.deaths
                    ).toFixed(2)}{' '}
                    평점
                  </strong>
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* 챔피언 갯수가 3개보다 적을때 채워주기 */}
        {data &&
          new Array(DEFINED_MAX_CHAMPION_COUNT - data.champions.length)
            .fill(true)
            .map((_, index) => (
              <div
                className="champ-wrap"
                data-state="fake"
                key={`fake-${index}`}
              >
                <div className="champ-wrap">
                  <div className="champ-img" />
                  <div className="champ-text">
                    <p>챔피언 정보가 없습니다.</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="match-overview-position">
        <div className="most-positions">
          <div className="box-title">
            <p>선호 포지션 (랭크)</p>
          </div>
          <div className="positions">
            {data?.positions.map((pos, index) => (
              <div className="position" key={`pos-${pos.position}-${index}`}>
                <div className={`position-image ${pos.position}`} />
                <div className="position-text">
                  <div className="position-name">
                    {
                      positionConstant[
                        pos.positionName as keyof typeof positionConstant
                      ]
                    }
                  </div>
                  <div className="position-stats">
                    <span className="position-ratio">
                      <strong>
                        {Math.round(
                          (pos.games /
                            (data.summary.wins + data.summary.losses)) *
                            100
                        )}
                      </strong>
                      %
                    </span>
                    <span className="pos-winrate">
                      승률{' '}
                      <strong>
                        {pos.wins
                          ? Math.round(
                              (pos.wins / (pos.wins + pos.losses)) * 100
                            )
                          : 0}
                      </strong>
                      %
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
