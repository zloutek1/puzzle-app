import { Puzzle } from "../types/puzzle";
import sudokuRules from "./sudoku";

const rules: { [key: string]: <T>(puzzle: Puzzle<T>) => boolean; } = {
    "sudoku": sudokuRules
}

export default rules