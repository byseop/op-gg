import { useState, useCallback, Suspense } from 'react';
import TabMenu, { ITabItem } from '@components/TabMenu';
import Overview from './Overview';
import MatchList from './MatchList';

interface IProps {
  className?: string;
  summonerName: string;
}

const MENU_ITEMS: ITabItem[] = [
  {
    label: '전체',
    value: 'all'
  },
  {
    label: '솔로게임',
    value: '솔랭'
  },
  {
    label: '자유랭크',
    value: '자유 5:5 랭크'
  }
];

const MatchStats: React.FC<IProps> = ({ className, summonerName }) => {
  const [sortType, setSortType] = useState<ITabItem['value']>('all');

  const handleChangeSortType = useCallback((value: ITabItem['value']) => {
    setSortType(value);
  }, []);

  return (
    <div className={`match-stats-container ${className}`}>
      <div className="top-actions">
        <TabMenu
          items={MENU_ITEMS}
          value={sortType}
          onChange={handleChangeSortType}
        />
        <div className="match-overview-container">
          <Overview summonerName={summonerName} />
        </div>
      </div>
      <div className="match-list-container">
        <Suspense
        // fallback={} TODO: fallback 을 추가할 수 있음
        >
          <MatchList summonerName={summonerName} sortType={sortType} />
        </Suspense>
      </div>
    </div>
  );
};

export default MatchStats;
