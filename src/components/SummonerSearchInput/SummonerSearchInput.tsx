import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  className?: string;
}

const SummonerSearchInput: React.FC<IProps> = ({ className }) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  /** 사용자 이름으로 검색 */
  const searchBySummonerName = (name: string) => {
    navigate(`/summoners/${name}`);
  };

  /** 검색버튼 클릭 이벤트핸들러 */
  const handleClickButton = () => {
    if (!inputRef.current) {
      return;
    }
    searchBySummonerName(inputRef.current.value);
  };

  /** 검색인풋에서 Enter 시 검색 */
  const handleKeydownButton = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      searchBySummonerName(inputRef.current.value);
    }
  };

  return (
    <div className={`${className} summoner-search-input`}>
      <input
        type="text"
        placeholder="소환사명,챔피언…"
        ref={inputRef}
        onKeyDown={handleKeydownButton}
      />
      <button type="button" onClick={handleClickButton} />
    </div>
  );
};

export default SummonerSearchInput;
