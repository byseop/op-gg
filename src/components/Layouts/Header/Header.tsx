import SummonerSearchInput from '@components/SummonerSearchInput';

interface IProps {
  className?: string;
}

const Header: React.FC<IProps> = ({ className }) => {
  return (
    <header className={`${className} header`}>
      <div className="header-inner">
        <div className="actions">
          <SummonerSearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
