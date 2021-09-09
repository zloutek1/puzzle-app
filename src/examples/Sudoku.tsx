import { Decorations } from "../types/decorations"
import { SudokuRegion } from "../types/decorations/region"
import JigsawSudoku from "./JigsawSudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    decorations?: Decorations

    rules?: string[]
}

const Sudoku = ({ type, rows, columns, values, decorations, rules }: Props) => {
    rows = rows ?? 9
    columns = columns ?? 9

    const regions = [
        {type: "SudokuRegion", cells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]], unique: true},
        {type: "SudokuRegion", cells: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]], unique: true},
        {type: "SudokuRegion", cells: [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]], unique: true},
        {type: "SudokuRegion", cells: [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]], unique: true},
        {type: "SudokuRegion", cells: [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]], unique: true},
        {type: "SudokuRegion", cells: [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]], unique: true},
        {type: "SudokuRegion", cells: [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]], unique: true},
        {type: "SudokuRegion", cells: [[6, 3], [6, 4], [6, 5], [8, 3], [8, 4], [8, 5], [7, 3], [7, 4], [7, 5]], unique: true},
        {type: "SudokuRegion", cells: [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]], unique: true},
    ] as SudokuRegion[]

    return (
        <JigsawSudoku
            type={type ?? "Sudoku"}
            rows={rows}
            columns={columns}
            regions={regions}
            values={values}
            decorations={decorations}
            rules={rules}
        />
    )
}

export default Sudoku
