import type { CSSProperties } from 'react';

export const getKdaColor = (n: number): CSSProperties | undefined => {
  if (n >= 5) {
    return { color: 'var(--kda-level-3)' };
  }
  if (n >= 4) {
    return { color: 'var(--kda-level-2)' };
  }
  if (n >= 3) {
    return { color: 'var(--kda-level-1)' };
  }
  return undefined;
};

export const getWinrateColor = (n: number): CSSProperties | undefined => {
  if (n >= 60) {
    return { color: 'var(--winrate-level-1)' };
  }
  return undefined;
};
