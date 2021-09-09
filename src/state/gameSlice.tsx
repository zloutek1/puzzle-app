import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, Puzzle } from "../types/puzzle";
import { RootState } from "./store";

const initialState: Game<any> = {
    puzzle: undefined
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        loadPuzzle: <T,>(state: Game<T>, action: PayloadAction<Puzzle<T>>) => {
            return { puzzle: action.payload };
        }
    },
});

export const { loadPuzzle } = gameSlice.actions;
export const selectPuzzle = (state: RootState) => state.game.puzzle;
export default gameSlice.reducer;