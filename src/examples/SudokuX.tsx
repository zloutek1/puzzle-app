import { Decorations } from "../types/decorations"
import { SudokuXLine } from "../types/decorations/line"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    diagonals: SudokuXLine[]
    decorations?: Decorations
}

const SudokuX = ({ type, rows, columns, values, diagonals, decorations }: Props) => {
    return (
        <Sudoku
            type={type ?? "SudokuX"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                sudokuXs: diagonals,
                ...(decorations ?? {})
            }}
        />
    )
}

export default SudokuX
