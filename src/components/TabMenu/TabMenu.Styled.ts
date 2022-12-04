import styled from 'styled-components';
import TabMenu from './TabMenu';

const StyledTabMenu = styled(TabMenu)`
  &[data-type='win-rate'] {
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
  }

  &[data-type='match-overview'] {
    background: var(--bg-white1);
    height: 36px;

    ul {
      display: flex;
      padding: 0 16px;
      gap: 16px;

      li {
        color: var(--text-gray3);
        position: relative;

        &[data-selected='true'] {
          color: var(--text-primary1);

          button {
            font-weight: bold;
          }

          &:before {
            display: block;
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--text-primary1);
          }
        }

        button {
          padding: 12px 0 10px 0;
          border: none;
          font-size: 1.2rem;
          background: none;
          cursor: pointer;
          color: inherit;
        }
      }
    }
  }
`;

export default StyledTabMenu;
