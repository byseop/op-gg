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

          &[data-size='s'] {
            min-width: 32px;
            min-height: 32px;
            width: 32px;
            height: 32px;
          }

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

      .champ-winrate {
        display: flex;
        gap: 12px;
        align-items: center;

        .champ-winrate-text {
          font-size: 1.3rem;
          color: var(--text-gray2);
        }

        .champ-chart {
          .chart {
            width: 123px;
            height: 24px;
            border-radius: 4px;
            background: var(--chart-winrate2);
            overflow: hidden;
            position: relative;

            .winrate-bar {
              position: absolute;
              height: 100%;
              left: 0;
              top: 0;
              background: var(--chart-winrate1);
            }

            &:before,
            &:after {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              color: var(--white1);
              font-size: 1.2rem;
              z-index: 1;
            }
            &:before {
              left: 4px;
              content: attr(data-wins);
            }
            &:after {
              right: 4px;
              content: attr(data-losses);
            }
          }
        }
      }
    }
  }
`;

export default StyledMostChampions;
