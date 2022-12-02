import { useParams } from 'react-router-dom';
import { useGetSummoner } from '@core/query/summoner';

interface IProps {
  className?: string;
}

const SummonerInfo: React.FC<IProps> = ({ className }) => {
  const { summonerName } = useParams<{ summonerName: string }>();
  const { data } = useGetSummoner(summonerName as string);
  console.log(data);

  return (
    <div className={`${className} summoner-info`}>
      <div className="previous-tier">
        <ul>
          {data?.summoner.previousTiers.map((tier) => (
            <li>
              <strong>S{tier.season}</strong> {tier.tierDivision}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummonerInfo;
