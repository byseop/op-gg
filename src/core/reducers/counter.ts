import { InitialState, Count } from '@interfaces/counter';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    countUp(state, action: PayloadAction<Count>) {
      state.count = state.count + action.payload;
    },
    countDown(state, action: PayloadAction<Count>) {
      state.count = state.count - action.payload;
    }
  }
});

export default counterSlice;
