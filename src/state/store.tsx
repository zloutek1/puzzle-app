import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import highlightReducer from "./highlightSlice";

export const store = configureStore({
    reducer: {
        game: gameReducer,
        highlight: highlightReducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;