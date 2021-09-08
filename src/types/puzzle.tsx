import { Decoration, DecorationType } from "./decorations";

export interface Cell<ValueType> {
    x: number
    y: number
    value: ValueType | null

    highlight: string
    editable: boolean
}

export interface Puzzle<CellValueType> {
    type: string,
    cells: Cell<CellValueType>[][],
    decorations: DecorationType[]
    rules: () => boolean
}

export interface Game<CellValueType> {
    puzzle: Puzzle<CellValueType>
}