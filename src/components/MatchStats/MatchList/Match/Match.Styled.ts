import styled from 'styled-components';
import Match from './Match';
import wardBlue from '@assets/images/svg/icon-ward-blue.svg';
import wardRed from '@assets/images/svg/icon-ward-red.svg';

const StyledMatch = styled(Match)`
  & + .match-containter {
    margin-top: 8px;
  }
  .match {
    padding: 4px 14px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &[data-match-win='true'] {
      background: var(--match-win-bg);
      border: 1px solid var(--match-win-border);
      .match-win {
        color: var(--match-win-text1);
      }

      .item {
        background: var(--bg-primary2);
      }

      .ward {
        span {
          background-image: url(${wardBlue});
        }
      }
    }
    &[data-match-win='false'] {
      background: var(--match-lose-bg);
      border: 1px solid var(--match-lose-border);
      .match-win {
        color: var(--match-lose-text1);
        &:after {
          background-color: var(--match-lose-div) !important;
        }
      }

      .item {
        background: var(--bg-secondary1);
      }

      .ward {
        span {
          background-image: url(${wardRed});
        }
      }
    }

    .match-div-1 {
      width: 58px;
      text-align: center;
      font-size: 1.1rem;
      letter-spacing: -0.42px;
      .match-type {
        color: var(--text-gray3);
      }
      .match-date {
        margin-top: 4px;
        color: var(--text-gray3);
      }
      .match-win {
        margin-top: 9px;
        position: relative;

        &:after {
          position: absolute;
          left: 50%;
          top: -6px;
          height: 1px;
          width: 27px;
          content: '';
          transform: translateX(-50%);
          background: var(--match-win-div);
        }
      }
      .match-time {
        margin-top: 4px;
        color: var(--text-gray3);
      }
    }

    .match-div-2 {
      margin-left: 14px;

      .match-div-2-top {
        display: flex;
        .champ-img {
          width: 46px;
          height: 46px;
          position: relative;
          border-radius: 100%;
          overflow: hidden;

          img {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 100%;
            transform: translate(-50%, -50%);
          }
        }

        .match-pick {
          margin-left: 6px;
          display: flex;
          gap: 4px;
          > div {
            display: flex;
            flex-flow: column;
            gap: 4px;
            > div {
              width: 22px;
              height: 22px;
              img {
                display: block;
                width: 100%;
              }
            }
          }
        }
      }
      .match-div-2-bottom {
        text-align: center;
        margin-top: 9px;
        color: var(--text-gray3);
      }
    }

    .match-div-3 {
      width: 91px;
      margin-left: 22px;
      text-align: center;
      .kda {
        font-size: 1.5rem;
        color: var(--text-gray6);

        span {
          color: var(--text-black3);
          &.death {
            color: var(--match-lose-text1);
          }
        }
      }

      .avg {
        margin-top: 6px;
        letter-spacing: -0.42px;
        font-size: 1.1rem;
        color: var(--text-black3);

        .avg-number {
          color: var(--text-black4);
        }
      }

      .badges {
        display: flex;
        margin-top: 11px;
        gap: 4px;
        justify-content: center;
        span {
          border-radius: 9px;
          color: var(--white1);
          padding: 3px 5px 1px 5px;

          &.kill-badge {
            background: #ec4f48;
            border: 1px solid #bf3b36;
          }

          &.op-badge {
            background: #8c51c5;
            border: 1px solid #7f3590;
          }
        }
      }
    }

    .match-div-4 {
      width: 56px;
      text-align: center;
      margin-left: 33px;
      .champ-lev {
        font-size: 1.1rem;
        color: var(--text-black3);
      }
      .cs {
        margin-top: 6px;
        font-size: 1.1rem;
        color: var(--text-black3);
      }
      .kill-ctr {
        margin-top: 6px;
        font-size: 1.1rem;
        color: var(--match-lose-text1);
      }
    }

    .match-div-5 {
      margin-left: 30px;
      width: 94px;

      .items {
        display: flex;
        height: 46px;
        flex-flow: column;
        flex-wrap: wrap;
        gap: 2px;

        .item {
          width: 22px;
          height: 22px;
          border-radius: 2px;
          overflow: hidden;

          img {
            width: 100%;
          }

          .tooltip {
            max-width: 280px;

            p {
              font-size: 1.1rem;
              line-height: 15px;
            }
          }
        }
      }

      .ward {
        text-align: center;
        margin-top: 9px;
        color: var(--black);
        letter-spacing: -0.42px;
        font-size: 1.1rem;

        span {
          padding: 4px 0 2px 20px;
          background-size: 16px;
          background-repeat: no-repeat;
          background-position: left center;
        }
      }
    }

    .match-div-6 {
      margin-left: 11px;

      .match-member {
        display: flex;
        gap: 13px;

        .team {
          li {
            & + li {
              margin-top: 2px;
            }
            a {
              display: flex;
              align-items: center;
              gap: 3px;
              .img {
                width: 16px;
                height: 16px;
                img {
                  width: 100%;
                }
              }

              span:nth-child(2) {
                display: block;
                width: 50px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 1.1rem;
                color: var(--text-gray3);
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledMatch;
