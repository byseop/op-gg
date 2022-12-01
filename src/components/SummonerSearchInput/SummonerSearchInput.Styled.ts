import styled from 'styled-components';
import SummonerSearchInput from './SummonerSearchInput';
import iconOPGG from '@assets/images/svg/icon-opgg.svg';

const StyledSummonerSearchInput = styled(SummonerSearchInput)`
  display: flex;
  align-items: center;
  width: 260px;
  height: 32px;
  background: var(--white1);
  padding: 0 14px;
  box-sizing: border-box;
  position: relative;

  button {
    border: none;
    width: 30px;
    height: 13px;
    cursor: pointer;
    background: transparent url(${iconOPGG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  input {
    flex: 1;
    color: var(--text-input-gray);
    border: none;
    outline: none;
    font-size: 1.2rem;

    &:placeholder {
      color: var(--text-placeholder-gray);
    }
  }
`;

export default StyledSummonerSearchInput;
