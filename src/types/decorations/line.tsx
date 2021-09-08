import { Decoration } from ".";
import { Point } from "../general";

export interface Line extends Decoration {
    cells: Point[]
    thickness: number
}

export interface SudokuXLine extends Line {
    type: "SudokuX"
}

export interface PalindromeLine extends Line {
    type: "Palindrome"
}

export interface RenbanLine extends Line {
    type: "Renban"
}

export type LineType = SudokuXLine | PalindromeLine | RenbanLine