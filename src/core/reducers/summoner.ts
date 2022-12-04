import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IMatchPosition } from '@interfaces/summoner';

export interface ISummonerState {
  preferencePosition: IMatchPosition | null;
  recentlySearches: string[];
  favoriteSummoners: string[];
}

const initialState: ISummonerState = {
  preferencePosition: null,
  recentlySearches: [],
  favoriteSummoners: []
};

const summonerStateSlice = createSlice({
  name: 'summonerState',
  initialState,
  reducers: {
    updatePreferencePosition(state, action: PayloadAction<IMatchPosition>) {
      state.preferencePosition = action.payload;
    },
    updateRecentlySearch(state, action: PayloadAction<string>) {
      // 최대 20개까지만 저장한다고 가정
      state.recentlySearches = [
        action.payload,
        ...state.recentlySearches
          .filter((value) => value !== action.payload)
          .slice(0, 19)
      ];
    },
    removeRecentlySearch(state, action: PayloadAction<string>) {
      state.recentlySearches = state.recentlySearches.filter(
        (value) => value !== action.payload
      );
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      if (state.favoriteSummoners.includes(action.payload)) {
        state.favoriteSummoners = state.favoriteSummoners.filter(
          (value) => value !== action.payload
        );
      } else {
        state.favoriteSummoners = state.favoriteSummoners.concat(
          action.payload
        );
      }
    }
  }
});

export default summonerStateSlice;
