import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRootState from '@core/hooks/useRootState';
import TabMenu, { ITabItem } from '@components/TabMenu';
import { IoClose } from 'react-icons/io5';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import summonerStateSlice from '@core/reducers/summoner';

interface IProps {
  className?: string;
}

const ITEMS = [
  { value: 'recently', label: '최근 검색' },
  { value: 'favorite', label: '즐겨찾기' }
];

const SummonerSearchInput: React.FC<IProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { recentlySearches, favoriteSummoners } = useRootState(
    (state) => state.summonerState
  );
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<ITabItem['value']>(
    ITEMS[0].value
  );

  const boxData = useMemo(() => {
    switch (selectedType) {
      case 'recently':
        return recentlySearches;
      case 'favorite':
        return favoriteSummoners;
      default:
        return [];
    }
  }, [selectedType, recentlySearches, favoriteSummoners]);

  /** 사용자 이름으로 검색 */
  const searchBySummonerName = (name: string) => {
    navigate(`/summoners/${name}`);
    setVisible(false);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
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

  const handleFocusInput = () => {
    setVisible(true);
  };

  const handleChangeType = useCallback((value: ITabItem['value']) => {
    setSelectedType(value);
  }, []);

  /** 최근 검색한 소환사 클릭 */
  const handleClickRecentSummoner = (summoner: string) => {
    searchBySummonerName(summoner);
  };

  /** 최근 검색한 소환사 제거 */
  const handleClickRemoveRecentSummoner = (summoner: string) => {
    dispatch(summonerStateSlice.actions.removeRecentlySearch(summoner));
  };

  /** 즐겨찾기 토글 */
  const handleToggleFavorite = (summoner: string) => {
    dispatch(summonerStateSlice.actions.toggleFavorite(summoner));
  };

  useEffect(() => {
    const outerClickChecker = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.summoner-search-input')) {
        setVisible(false);
      }
    };
    document.body.addEventListener('click', outerClickChecker);

    return () => {
      document.body.removeEventListener('click', outerClickChecker);
    };
  }, []);

  return (
    <div className={`${className} summoner-search-input`}>
      <input
        type="text"
        placeholder="소환사명,챔피언…"
        ref={inputRef}
        onKeyDown={handleKeydownButton}
        onFocus={handleFocusInput}
      />
      <button type="button" onClick={handleClickButton} />

      {visible && (
        <div className="recent-search-box">
          <TabMenu
            items={ITEMS}
            value={selectedType}
            type="input-menu"
            onChange={handleChangeType}
          />
          <div className="recent-summoners">
            <ul>
              {boxData.map((summoner) => (
                <li key={`box-${summoner}`}>
                  <span onClick={() => handleClickRecentSummoner(summoner)}>
                    {summoner}
                  </span>
                  <div>
                    <button
                      className="favorite"
                      onClick={() => handleToggleFavorite(summoner)}
                      data-favorite={favoriteSummoners.includes(summoner)}
                    >
                      {favoriteSummoners.includes(summoner) ? (
                        <MdFavorite />
                      ) : (
                        <MdFavoriteBorder />
                      )}
                    </button>
                    {selectedType === 'recently' && (
                      <button
                        onClick={() =>
                          handleClickRemoveRecentSummoner(summoner)
                        }
                      >
                        <IoClose />
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummonerSearchInput;
