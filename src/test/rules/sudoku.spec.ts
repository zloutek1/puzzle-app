import sudokuRules from "../../rules/sudoku"
import { Puzzle } from "../../types/puzzle"
import { genCellsFromGiven } from "../../utils"

describe("Sudoku rules", () => {
    const initialState: Puzzle<number> = {
        type: "Sudoku",
        cells: genCellsFromGiven(9, 9, [
            [null,    2, null,  null, null,   4,     3, null, null],
            [   9, null, null,  null,    2, null,  null, null,   8],
            [null, null, null,     6, null,   9,  null,   5, null],

            [null, null, null,  null, null, null,  null, null,   1],
            [null,    4,    2,    5, null,    1,     6,    8, null],
            [   6, null, null,  null, null, null,  null, null, null],

            [null,    8, null,     2, null,   5,  null, null, null],
            [   1, null, null,  null,    9, null,  null, null,   2],
            [null, null,   9,      8, null, null,  null,   6, null]
        ]),
        decorations: {
            sudokuRegions: [
                {type: "SudokuRegion", cells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]], unique: true},
                {type: "SudokuRegion", cells: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]], unique: true},
                {type: "SudokuRegion", cells: [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]], unique: true},
                {type: "SudokuRegion", cells: [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]], unique: true},
                {type: "SudokuRegion", cells: [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]], unique: true},
                {type: "SudokuRegion", cells: [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]], unique: true},
                {type: "SudokuRegion", cells: [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]], unique: true},
                {type: "SudokuRegion", cells: [[6, 3], [6, 4], [6, 5], [8, 3], [8, 4], [8, 5], [7, 3], [7, 4], [7, 5]], unique: true},
                {type: "SudokuRegion", cells: [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]], unique: true},
            ]
        },
        rules: ["sudoku"],
        valueOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    const finalState: Puzzle<number> = {
        type: "Sudoku",
        cells: genCellsFromGiven(9, 9, [
            [8, 2, 7,  1, 5, 4,  3, 9, 6],
            [9, 6, 5,  3, 2, 7,  1, 4, 8],
            [3, 4, 1,  6, 8, 9,  7, 5, 2],

            [5, 9, 3,  4, 6, 8,  2, 7, 1],
            [4, 7, 2,  5, 1, 3,  6, 8, 9],
            [6, 1, 8,  9, 7 ,2,  4, 3, 5],

            [7, 8, 6,  2, 3, 5,  9, 1, 4],
            [1, 5, 4,  7, 9, 6,  8, 2, 3],
            [2, 3, 9,  8, 4, 1,  5, 6, 7]
        ]),
        decorations: {
            sudokuRegions: [
                {type: "SudokuRegion", cells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]], unique: true},
                {type: "SudokuRegion", cells: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]], unique: true},
                {type: "SudokuRegion", cells: [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]], unique: true},
                {type: "SudokuRegion", cells: [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]], unique: true},
                {type: "SudokuRegion", cells: [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]], unique: true},
                {type: "SudokuRegion", cells: [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]], unique: true},
                {type: "SudokuRegion", cells: [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]], unique: true},
                {type: "SudokuRegion", cells: [[6, 3], [6, 4], [6, 5], [8, 3], [8, 4], [8, 5], [7, 3], [7, 4], [7, 5]], unique: true},
                {type: "SudokuRegion", cells: [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]], unique: true},
            ]
        },
        rules: ["sudoku"],
        valueOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    it("should return false for unfilled sudoku", () => {
        expect(sudokuRules(initialState)).toEqual(false)
    })

    it("should return true for correct sudoku", () => {
        expect(sudokuRules(finalState)).toEqual(true)
    })
})
