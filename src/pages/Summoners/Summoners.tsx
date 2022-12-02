import { useParams } from 'react-router-dom';
import { useGetSummoner } from '@core/query/summoner';
import SummonerInfo from '@components/SummonerInfo';

interface IProps {
  className?: string;
}

const Summoners: React.FC<IProps> = ({ className }) => {
  const { summonerName } = useParams<{ summonerName: string }>();
  useGetSummoner(summonerName as string);

  return (
    <section className={`${className} summoners-content`}>
      <div className="content-inner">
        <SummonerInfo />
      </div>
    </section>
  );
};
export default Summoners;
