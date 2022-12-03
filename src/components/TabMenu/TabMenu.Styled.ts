import styled from 'styled-components';
import TabMenu from './TabMenu';

const StyledTabMenu = styled(TabMenu)`
  background: var(--bg-white1);

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      flex-basis: 50%;
      button {
        color: var(--text-gray2);
        cursor: pointer;
        outline: none;
        text-align: center;
        line-height: 44px;
        padding: 0;
        width: 100%;
        border: 1px solid var(--border-gray3);
        font-size: 1.2rem;
      }
      &:nth-child(2n) {
        button {
          border-left: none;
        }
      }
      &[data-selected='true'] {
        button {
          color: var(--text-gray-selected1);
          background: var(--bg-gray1);
          font-weight: bold;
          border-bottom-color: var(--bg-gray1);
        }
      }
    }
  }
`;

export default StyledTabMenu;
