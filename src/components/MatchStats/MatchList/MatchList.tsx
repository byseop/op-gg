import { useMemo } from 'react';
import { useGetSummonerMatches } from '@core/query/summoner';
import Match from './Match';

interface IProps {
  className?: string;
  summonerName: string;
  sortType: string;
}

const MatchList: React.FC<IProps> = ({ className, summonerName, sortType }) => {
  const { data } = useGetSummonerMatches(summonerName);

  const sortedData = useMemo(() => {
    if (!data) return null;
    if (sortType === 'all') {
      return data.games;
    }

    return data.games.filter((game) => game.gameType === sortType);
  }, [data, sortType]);

  return (
    <div className={`match-list-wrap ${className}`}>
      {sortedData?.map((game) => (
        <Match data={game} key={game.gameId} />
      ))}
    </div>
  );
};

export default MatchList;
