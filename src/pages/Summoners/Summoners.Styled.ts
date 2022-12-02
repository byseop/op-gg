import styled from 'styled-components';
import Summoners from './Summoners';

const StyledSummoners = styled(Summoners)`
  min-height: calc(100vh - 97px);
  background: var(--bg-gray1);

  .content-inner {
    width: 1000px;
    margin: auto;
  }
`;

export default StyledSummoners;
