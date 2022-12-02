import styled from 'styled-components';
import Summoners from './Summoners';

const StyledSummoners = styled(Summoners)`
  min-height: calc(100vh - 97px);
  background: var(--bg-gray1);

  .section-wrap {
    border: 1px solid var(--border-gray2);
    margin-bottom: 10px;
  }

  .content-inner {
    width: 1000px;
    margin: auto;
  }

  .summoner-record {
    display: flex;
    gap: 10px;

    > div {
      flex: 1;
    }

    .summoner-stats {
      max-width: 300px;
    }
  }
`;

export default StyledSummoners;
