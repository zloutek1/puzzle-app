import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "../types/general";
import { equals } from "../utils";
import { RootState } from "./store";

const initialState: Point[] = []

export const highlightSlice = createSlice({
    name: "highlight",
    initialState,
    reducers: {
        clear: (state: Point[], action: Action) => (
            initialState
        ),

        highlight: (state: Point[], action: PayloadAction<Point>) => {
            const present = state.find(point => equals(point, action.payload))
            return present ? state : [...state, action.payload]
        }
    },
})

export const { clear, highlight } = highlightSlice.actions;
export const selectHighlight = (state: RootState) => state.highlight;
export default highlightSlice.reducer;