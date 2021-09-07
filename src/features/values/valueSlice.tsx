import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ValueType } from "../../app/types";

const initialState: ValueType[][] = [
    [null, null, null,  null, null, null,  null, null, null],
    [null, null, null,  null, null, null,  null, null, null],
    [null, null, null,  null, null, null,  null, null, null],

    [null, null, null,  null, null, null,  null, null, null],
    [null, null, null,  null, null, null,  null, null, null],
    [null, null, null,  null, null, null,  null, null, null],

    [null, null, null,  null, null, null,  null, null, null],
    [null, null, null,  null, null, null,  null, null, null],
    [null, null, null,  null, null, null,  null, null, null],
]

export const valueSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        reset: (state) => initialState,
        load: (state, action: PayloadAction<ValueType[][]>) => (
            action.payload
        ),
        set: (state, action: PayloadAction<{x: number, y: number, value: ValueType}>) => {
            const {x, y, value} = action.payload
            state[y][x] = value
        }
    }
})

export const selectValue = (state: RootState) => state.value;

export default valueSlice.reducer;