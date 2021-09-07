import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: boolean[][] = [
    [false, false, false,  false, false, false,  false, false, false],
    [false, false, false,  false, false, false,  false, false, false],
    [false, false, false,  false, false, false,  false, false, false],

    [false, false, false,  false, false, false,  false, false, false],
    [false, false, false,  false, false, false,  false, false, false],
    [false, false, false,  false, false, false,  false, false, false],

    [false, false, false,  false, false, false,  false, false, false],
    [false, false, false,  false, false, false,  false, false, false],
    [false, false, false,  false, false, false,  false, false, false],
]

export const highlightSlice = createSlice({
    name: 'highlight',
    initialState,
    reducers: {
        reset: (state) => initialState,
        load: (state, action: PayloadAction<boolean[][]>) => (
            action.payload
        ),
        highlight: (state, action: PayloadAction<{x: number, y: number}>) => {
            const {x, y} = action.payload
            state[y][x] = true
        },
        unhighlight: (state, action: PayloadAction<{x: number, y: number}>) => {
            const {x, y} = action.payload
            state[y][x] = false
        },
        toggleHighlight: (state, action: PayloadAction<{x: number, y: number}>) => {
            const {x, y} = action.payload
            state[y][x] = !state[y][x]
        },
        resetAndHighlight: (state, action: PayloadAction<{x: number, y: number}>) => {
            const {x, y} = action.payload
            const new_state = Array.from(initialState.map(row => Array.from(row)));
            new_state[y][x] = true
            return new_state;
        }
    }
})

export const { reset, load, highlight, unhighlight, toggleHighlight, resetAndHighlight } = highlightSlice.actions;

export const selectHighlights = (state: RootState) => state.highlight;

export default highlightSlice.reducer;