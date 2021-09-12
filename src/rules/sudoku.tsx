import { Puzzle } from "../types/puzzle";
import { check_non_empty, check_unique } from "../utils";

const sudokuRules = <T,>(puzzle: Puzzle<T>) => {
    const [rows, cols] = [puzzle.cells.length, puzzle.cells[0].length];

    const regions = puzzle.decorations.sudokuRegions
    if (regions === undefined) return false

    let win = true;

    // row
    for (let i = 0; i < rows; ++i) {
        const row = puzzle.cells[i].map(cell => cell.value);
        win = win && check_non_empty(row) && check_unique(row)
    }

    // col
    for (let j = 0; j < cols; ++j) {
        const col = puzzle.cells.map(row => row[j]).map(cell => cell.value);
        win = win && check_non_empty(col) && check_unique(col)
    }

    // box
    for (let box of regions) {
        const region = box.cells.map(([x, y]) => puzzle.cells[y][x].value)
        win = win && check_non_empty(region) && check_unique(region)
    }

    return win
}

export default sudokuRules