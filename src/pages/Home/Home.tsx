import SummonerSearchInput from '@components/SummonerSearchInput';

interface IProps {
  className?: string;
}

const Home: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} home-content`}>
      <SummonerSearchInput />
    </div>
  );
};

export default Home;
