import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import summonerStateSlice from './summoner';

const combineReducer = combineReducers({
  summonerState: summonerStateSlice.reducer
});

const rootReducer = (state: RootReducerTypes | undefined, action: AnyAction) =>
  combineReducer(state, action);

export type RootReducerTypes = ReturnType<typeof combineReducer>;

export default rootReducer;

const persistConfig = {
  key: 'root',
  storage,
  //   whitelist: [], // persist 사용할 state
  blacklist: [], // persist를 사용하지 않을 state
  stateReconciler: autoMergeLevel2
};

const reducer = persistReducer<RootReducerTypes>(persistConfig, rootReducer);
const enhancer = composeWithDevTools();
export const store = createStore(reducer, enhancer);
export const persistor = persistStore(store);
