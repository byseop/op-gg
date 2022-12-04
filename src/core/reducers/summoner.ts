import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IMatchPosition } from '@interfaces/summoner';

export interface ISummonerState {
  preferencePosition: IMatchPosition | null;
}

const initialState: ISummonerState = {
  preferencePosition: null
};

const summonerStateSlice = createSlice({
  name: 'summonerState',
  initialState,
  reducers: {
    updatePreferencePosition(state, action: PayloadAction<IMatchPosition>) {
      state.preferencePosition = action.payload;
    }
  }
});

export default summonerStateSlice;
