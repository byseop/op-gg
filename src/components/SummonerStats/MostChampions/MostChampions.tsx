import { useState, useCallback } from 'react';
import TabMenu, { ITabItem } from '@components/TabMenu';
import { useGetSummonerMost } from '@core/query/summoner';

import type { IChampion, IWinRate } from '@interfaces/summoner';
import { CSSProperties } from 'react';

interface IProps {
  className?: string;
  summonerName: string;
}

const MENU_ITEMS: ITabItem[] = [
  {
    label: '챔피언 승률',
    value: 'championWinRate'
  },
  {
    label: '7일간 랭크 승률',
    value: 'sevenDaysWinRate'
  }
];

const MostChampions: React.FC<IProps> = ({ className, summonerName }) => {
  const [sortType, setSortType] = useState<ITabItem['value']>(
    MENU_ITEMS[0].value
  );

  const { data } = useGetSummonerMost(summonerName);
  console.log(data);

  const handleChangeSortType = useCallback((value: ITabItem['value']) => {
    setSortType(value);
  }, []);

  const renderWinRate = useCallback(() => {
    if (!data) return null;

    switch (sortType) {
      case 'championWinRate':
        return (
          <WinRateByChampion
            data={data.champions.slice().sort((a, b) => b.games - a.games)}
          />
        );
      case 'sevenDaysWinRate':
        return <WinRateByDate data={data.recentWinRate} />;
    }
  }, [sortType, data]);

  return (
    <div className={`${className} most-champions`}>
      <TabMenu
        items={MENU_ITEMS}
        value={sortType}
        onChange={handleChangeSortType}
      />
      {renderWinRate()}
    </div>
  );
};

export default MostChampions;

const WinRateByChampion: React.FC<{
  data: IChampion[];
}> = ({ data }) => {
  return (
    <div className="winrate">
      <ul>
        {data.map((champion, index) => (
          <li key={'winrate' + champion.id + index}>
            <div className="champ-overview">
              <div className="champ-img">
                <img src={champion.imageUrl} alt={champion.name} />
              </div>
              <div className="champ-info">
                <div className="champ-name">
                  <span>
                    <strong>{champion.name}</strong>
                  </span>
                </div>
                <div className="champ-cs">
                  <span>
                    CS {champion.cs} ({champion.cs})
                  </span>
                </div>
              </div>
            </div>
            <div className="champ-stats">
              <div className="champ-avg">
                <span
                  style={getKdaColor(
                    (champion.kills + champion.assists) / champion.deaths
                  )}
                >
                  <strong>
                    {(
                      (champion.kills + champion.assists) /
                      champion.deaths
                    ).toFixed(2)}
                  </strong>
                </span>
              </div>
              <div className="kda">
                <span>
                  {(champion.kills / champion.games).toFixed(1)} /{' '}
                  {(champion.deaths / champion.games).toFixed(1)} /{' '}
                  {(champion.assists / champion.games).toFixed(1)}
                </span>
              </div>
            </div>
            <div className="champ-stats">
              <div>
                <span
                  style={getWinrateColor(
                    champion.wins / champion.wins + champion.losses
                  )}
                >
                  <strong>
                    {champion.wins / champion.wins + champion.losses}%
                  </strong>
                </span>
              </div>
              <div>
                <span>{champion.games}게임</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WinRateByDate: React.FC<{
  data: IWinRate[];
}> = ({ data }) => {
  return <div className="winrate">2</div>;
};

const getKdaColor = (n: number): CSSProperties | undefined => {
  if (n >= 5) {
    return { color: 'var(--kda-level-3)' };
  }
  if (n >= 4) {
    return { color: 'var(--kda-level-2)' };
  }
  if (n >= 3) {
    return { color: 'var(--kda-level-1)' };
  }
  return undefined;
};

const getWinrateColor = (n: number): CSSProperties | undefined => {
  if (n >= 60) {
    return { color: 'var(--winrate-level-1)' };
  }
  return undefined;
};
