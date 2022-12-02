import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import SummonerInfo from '@components/SummonerInfo';
import * as SummonerStats from '@components/SummonerStats';

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
              <SummonerStats.League summonerName={summonerName || ''} />
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
};
export default Summoners;
