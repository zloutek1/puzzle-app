import { Decoration } from ".";
import { Point } from "../general";

export interface Line extends Decoration {
    cells: Point[]
    thickness: number
}

export interface SudokuXLine extends Omit<Line, 'cells'> {
    type: "SudokuX"
    diagonal: "left" | "right"
}

export interface PalindromeLine extends Line {
    type: "Palindrome"
}

export interface RenbanLine extends Line {
    type: "Renban"
}

export type LineDecorations = {
    sudokuXs?: SudokuXLine[],
    palindromes?: PalindromeLine[],
    renbanLines?: RenbanLine[],
}