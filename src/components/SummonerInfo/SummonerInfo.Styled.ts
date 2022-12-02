import styled from 'styled-components';
import SummonerInfo from './SummonerInfo';

const StyledSummonerInfo = styled(SummonerInfo)`
  padding: 15px 0;

  .previous-tier {
    ul {
      display: flex;
      gap: 7px;

      li {
        strong {
          font-weight: bold;
        }
        font-size: 1.1rem;
        color: var(--text-gray1);
        letter-spacing: -0.42px;
        border: 1px solid var(--border-gray1);
        padding: 4px 5px 3px 5px;
        background: var(--bg-gray2);
        border-radius: 2px;
      }
    }
  }

  .summoner-wrap {
    margin-top: 6px;
    display: flex;
    gap: 17px;

    .summoner-profile {
      width: 120px;
      height: 120px;
      position: relative;
      background-size: cover;
      background-repeat: no-repeat;

      .profile-img-border {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        img {
          display: block;
          width: 100%;
        }
      }

      .profile-img-wrap {
        position: absolute;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
          display: block;
          width: 100%;
        }
      }

      .profile-level {
        width: 44px;
        height: 24px;
        border-style: solid;
        border-width: 1px;
        border-image-source: linear-gradient(to bottom, #f6e08f, #ca9a2c 99%);
        border-image-slice: 1;
        background-color: #2c3548;
      }
    }

    .summoner-detail {
      .summoner-name {
        margin-top: 10px;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: -0.77px;
        color: var(--text-black1);
      }
      .summoner-rank {
        margin-top: 4px;
        letter-spacing: -0.42px;
        font-size: 1.1rem;
        color: var(--text-gray1);

        strong {
          font-weight: bold;
        }
      }
    }
  }
`;

export default StyledSummonerInfo;
