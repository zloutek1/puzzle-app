import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, Puzzle } from "../types/puzzle";
import { deepCopy } from "../utils";
import { RootState } from "./store";

type SetValueAction<ValueType> = PayloadAction<{
    x: number,
    y: number,
    value: ValueType
}>

type ClearValueAction = PayloadAction<{
    x: number,
    y: number
}>


const initialState: Game<any> = {
    puzzle: undefined
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        loadPuzzle: <T,>(state: Game<T>, action: PayloadAction<Puzzle<T>>) => {
            return { puzzle: action.payload }
        },

        setValue: <T,>(state: Game<T>, action: SetValueAction<T>) => {
            if (!state.puzzle) return state

            const { x, y, value } = action.payload
            const cells = deepCopy(state.puzzle.cells)

            if (!cells[y][x].editable)
                return state

            cells[y][x].value = value

            return {
                ...state,
                puzzle: {
                    ...state.puzzle,
                    cells: cells,
                },
            }
        },

        clearValue: <T,>(state: Game<T>, action: ClearValueAction) => {
            if (!state.puzzle) return state

            const { x, y } = action.payload
            const cells = deepCopy(state.puzzle.cells)

            if (!cells[y][x].editable)
                return state

            cells[y][x].value = null

            return {
                ...state,
                puzzle: {
                    ...state.puzzle,
                    cells: cells,
                },
            }
        },
    },
})

export const { loadPuzzle, setValue, clearValue } = gameSlice.actions;
export const selectPuzzle = (state: RootState) => state.game.puzzle;
export default gameSlice.reducer;