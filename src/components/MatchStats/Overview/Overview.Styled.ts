import styled from 'styled-components';
import Overview from './Overview';
import defaultChamp from '@assets/images/svg/champion-default.svg';
import posTop from '@assets/images/svg/icon-mostposition-top.svg';
import posMid from '@assets/images/svg/icon-mostposition-mid.svg';
import posJug from '@assets/images/svg/icon-mostposition-jng.svg';
import posAdc from '@assets/images/svg/icon-mostposition-adc.svg';
import posSup from '@assets/images/svg/icon-mostposition-sup.svg';

const StyledOverview = styled(Overview)`
  display: flex;
  > div {
    box-sizing: border-box;
    height: 158px;
  }

  .match-overview-chart {
    width: 276px;
    border-right: 1px solid var(--border-gray3);
    display: flex;

    .left-box {
      padding: 20px 15px;
      text-align: center;
      .record-text {
        color: var(--text-gray4);
        font-size: 1.2rem;
      }
      .chart-container {
        margin-top: 9px;
        position: relative;

        .text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--text-gray3);
          font-size: 1.4rem;
        }
      }
    }

    .right-box {
      flex: 1;
      display: flex;
      align-items: center;

      .text-wrap {
        width: 100%;
        text-align: center;
        .kda {
          font-size: 1.1rem;
          color: var(--text-gray5);

          strong {
            color: var(--text-black4);
          }
        }

        .kda-2 {
          color: var(--winrate-level-1);
          margin-top: 6px;
          font-size: 1.6rem;
        }
      }
    }
  }

  .match-overview-champ {
    width: 228px;
    border-right: 1px solid var(--border-gray3);
    padding: 17px 16px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .champ-wrap {
      display: flex;
      align-items: center;
      .champ-img {
        width: 34px;
        height: 34px;
        position: relative;
        border-radius: 100%;
        overflow: hidden;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .champ-text {
        font-size: 1.1rem;
        margin-left: 8px;

        .champ-name {
          font-size: 1.4rem;
        }

        .champ-stats {
          margin-top: 3px;

          .avg {
            margin-left: 13px;
            position: relative;

            &:after {
              content: '';
              width: 1px;
              height: 11px;
              position: absolute;
              left: -7px;
              top: 1px;
              background: var(--border-gray3);
            }
          }
        }
      }

      &[data-state='fake'] {
        .champ-img {
          background: url(${defaultChamp});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .champ-text {
          color: var(--text-gray5);
        }
      }
    }
  }

  .match-overview-position {
    width: 184px;
    .most-positions {
      margin: 16px 0 0 16px;

      .box-title {
        color: var(--text-gray4);
        font-size: 1.2rem;
      }

      .positions {
        margin-top: 22px;

        .position {
          display: flex;
          align-items: center;

          & + .position {
            margin-top: 24px;
          }

          .position-image {
            width: 28px;
            height: 28px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            &.TOP {
              background-image: url(${posTop});
            }
            &.MID {
              background-image: url(${posMid});
            }
            &.JNG {
              background-image: url(${posJug});
            }
            &.ADC {
              background-image: url(${posAdc});
            }
            &.SUP {
              background-image: url(${posSup});
            }
          }

          .position-text {
            margin-left: 8px;

            .position-name {
              font-size: 1.4rem;
              color: var(--text-black4);
              font-weight: bold;
            }
            .position-stats {
              margin-top: 3px;
              font-size: 1.1rem;
              color: var(--text-gray4);

              .position-ratio {
                color: var(--text-primary1);
              }

              .pos-winrate {
                margin-left: 13px;
                position: relative;

                strong {
                  color: var(--text-black4);
                }

                &:after {
                  content: '';
                  width: 1px;
                  height: 11px;
                  position: absolute;
                  left: -7px;
                  top: 1px;
                  background: var(--border-gray3);
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledOverview;
