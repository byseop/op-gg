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

  > button {
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

  .recent-search-box {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--white1);
    margin-top: 5px;
    z-index: 100;
    box-shadow: rgb(0 0 0 / 30%) 0px 8px 12px 0px;

    .recent-summoners {
      ul {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 10px;
          font-size: 1.4rem;
          color: var(--text-black1);

          span {
            flex: 1;
            cursor: pointer;
          }

          &:hover {
            background: #f7f7f9;
          }

          > div {
            button {
              font-size: 15px;
              padding: 0;
              background: none;
              border: none;
              cursor: pointer;
              & + button {
                margin-left: 5px;
              }

              &[data-favorite='true'] {
                color: #ee5a52;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledSummonerSearchInput;
