import { Decorations } from "./decorations";

export interface Cell<ValueType> {
    x: number
    y: number
    value: ValueType | null
    editable: boolean
}

export interface Puzzle<CellValueType> {
    type: string,
    cells: Cell<CellValueType>[][]
    decorations: Decorations
    rules: string[]
    valueOptions: CellValueType[]
}

export interface Game<CellValueType> {
    puzzle?: Puzzle<CellValueType>
}