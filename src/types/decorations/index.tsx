import { Color, Point } from "../general"
import { BetweenDecorations } from "./between"
import { LineDecorations } from "./line"
import { RegionDecorations } from "./region"
import { ShapeDecorations } from "./shape"
import { SideDecorations } from "./side"

export interface Decoration {
    type: string
    color?: Color
}

export interface SudokuArrow extends Decoration {
    type: "SudokuArrow"
    cells: Point[]
    thickness: number
    headLength: number
}

export interface Thermo extends Decoration {
    type: "Thermo"
    cells: Point[]
    thickness: number
}

export type Decorations = {
    sudokuArrows?: SudokuArrow[]
    thermos?: Thermo[]
} & BetweenDecorations &
    LineDecorations &
    RegionDecorations &
    ShapeDecorations &
    SideDecorations
