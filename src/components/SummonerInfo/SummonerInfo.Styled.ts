import styled from 'styled-components';
import SummonerInfo from './SummonerInfo';

const StyledSummonerInfo = styled(SummonerInfo)`
  padding: 15px 0;

  .previous-tier {
    ul {
      display: flex;
      gap: 7px;

      li {
        strong {
          font-weight: bold;
        }
        font-size: 1.1rem;
        color: var(--text-gray1);
        letter-spacing: -0.42px;
        border: 1px solid var(--border-gray1);
        padding: 4px 5px 3px 5px;
        background: var(--bg-gray2);
        border-radius: 2px;
      }
    }
  }
`;

export default StyledSummonerInfo;
