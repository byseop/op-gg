import styled from 'styled-components';
import MostChampions from './MostChampions';

const StyledMostChampions = styled(MostChampions)`
  .winrate {
    border: 1px solid var(--border-gray3);
    border-top: none;

    li {
      display: flex;
      height: 53px;
      padding: 0 15px;
      align-items: center;
      justify-content: space-between;

      & + li {
        border-top: 1px solid var(--border-gray3);
      }

      .champ-overview {
        display: flex;
        width: 135px;
        gap: 10px;

        .champ-img {
          width: 45px;
          height: 45px;
          position: relative;
          overflow: hidden;
          border-radius: 100%;

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .champ-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          justify-content: center;

          .champ-name {
            color: var(--text-gray-selected1);
            font-size: 1.2rem;
          }
          .champ-cs {
            color: var(--text-gray2);
            font-size: 1.1rem;
          }
        }
      }

      .champ-stats {
        display: flex;
        flex-direction: column;
        gap: 3px;
        justify-content: center;
        align-items: center;
        > div {
          &:nth-child(1) {
            span {
              color: var(--text-gray-selected1);
              font-size: 1.3rem;
            }
          }
          &:nth-child(2) {
            span {
              color: var(--text-gray2);
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
`;

export default StyledMostChampions;
