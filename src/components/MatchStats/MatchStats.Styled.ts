import styled from 'styled-components';
import MatchStats from './MatchStats';

const StyledMatchStats = styled(MatchStats)`
  .top-actions {
    border: 1px solid var(--border-gray3);
  }

  .match-overview-container {
    border-top: 1px solid var(--border-gray3);
    background: var(--bg-gray3);
  }

  .match-list-container {
    margin 16px 0;
  }
`;

export default StyledMatchStats;
