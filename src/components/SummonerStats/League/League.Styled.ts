import styled from 'styled-components';
import League from './League';

const StyledLeague = styled(League)`
  .league {
    & + .league {
      margin-top: 8px;
    }
    display: flex;
    gap: 8px;
    padding: 10px 8px;
    background: var(--bg-white1);
    border: 1px solid var(--border-gray3);
    border-radius: 2px;

    .league-medal {
      width: 104px;
      height: 104px;

      img {
        width: 100%;
      }
    }

    .league-type {
      font-size: 1.1rem;
      color: var(--text-gray2);
      margin-top: 6px;
    }

    .league-games {
      font-size: 1.2rem;
      color: var(--text-black2);
      margin-top: 4px;
    }

    .league-tier {
      margin-top: 6px;
      font-size: 1.5rem;
      color: var(--text-primary1);
    }

    .league-record {
      margin-top: 6px;
      color: var(--text-black3);
      font-size: 1.2rem;
    }

    .league-winrate {
      margin-top: 2px;
      color: var(--text-gray2);
      font-size: 1.2rem;
    }
  }
`;

export default StyledLeague;
