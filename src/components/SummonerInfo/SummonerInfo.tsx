import { useGetSummoner } from '@core/query/summoner';

interface IProps {
  className?: string;
  summonerName: string;
}

const SummonerInfo: React.FC<IProps> = ({ className, summonerName }) => {
  const { data } = useGetSummoner(summonerName as string);

  return (
    <div className={`${className} summoner-info`}>
      <div className="previous-tier">
        <ul>
          {data?.summoner.previousTiers.map((tier) => (
            <li key={tier.season}>
              <strong>S{tier.season}</strong> {tier.tierDivision}
            </li>
          ))}
        </ul>
      </div>
      <div className="summoner-wrap">
        <div className="summoner-profile">
          <div className="profile-img-wrap">
            <img
              src={data?.summoner.profileImageUrl}
              alt="소환사 프로필 이미지"
            />
          </div>
          <div className="profile-img-border">
            <img
              src={data?.summoner.profileBorderImageUrl}
              alt="프로필 이미지 테두리"
            />
          </div>
          {/* <div className="profile-level">20</div> */}
        </div>
        <div className="summoner-detail">
          <div className="summoner-name">
            <p>{data?.summoner.name}</p>
          </div>
          <div className="summoner-rank">
            <span>
              래더 랭킹{' '}
              <strong>{data?.summoner.ladderRank.rank.toLocaleString()}</strong>
              위 (상위 {data?.summoner.ladderRank.rankPercentOfTop}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummonerInfo;
