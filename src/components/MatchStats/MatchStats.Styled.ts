import styled from 'styled-components';
import MatchStats from './MatchStats';

const StyledMatchStats = styled(MatchStats)`
  border: 1px solid var(--border-gray3);
  .top-actions {
    border-bottom: 1px solid var(--border-gray3);
  }
`;

export default StyledMatchStats;
