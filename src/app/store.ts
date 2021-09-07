import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import highlightReducer from '../features/highlights/highlightSlice';
import valueReducer from '../features/values/valueSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    value: valueReducer,
    highlight: highlightReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
