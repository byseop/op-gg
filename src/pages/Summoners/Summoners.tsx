import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import SummonerInfo from '@components/SummonerInfo';
import * as SummonerStats from '@components/SummonerStats';
import MatchStats from '@components/MatchStats';

interface IProps {
  className?: string;
}

const Summoners: React.FC<IProps> = ({ className }) => {
  const { summonerName } = useParams<{ summonerName: string }>();
  return (
    <section className={`${className} summoners-content`}>
      <Suspense>
        <div className="section-wrap">
          <div className="content-inner">
            <SummonerInfo summonerName={summonerName || ''} />
          </div>
        </div>
        <div className="content-inner">
          <div className="summoner-record">
            <div className="summoner-stats">
              <div className="stats">
                <SummonerStats.League summonerName={summonerName || ''} />
              </div>
              <div className="stats">
                <SummonerStats.MostChampions
                  summonerName={summonerName || ''}
                />
              </div>
            </div>
            <div className="summoner-match">
              <MatchStats summonerName={summonerName || ''} />
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
};
export default Summoners;
