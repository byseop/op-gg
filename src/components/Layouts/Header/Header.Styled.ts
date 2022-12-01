import styled from 'styled-components';
import Header from './Header';

const StyledHeader = styled(Header)`
  background: var(--bg-primary1);
  height: 97px;
  box-sizing: border-box;
  padding-bottom: 12px;

  .header-inner {
    display: flex;
    width: 1000px;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    margin: auto;
  }
`;

export default StyledHeader;
