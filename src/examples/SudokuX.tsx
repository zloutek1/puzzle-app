import { DecorationType } from "../types/decorations"
import { SudokuXLine } from "../types/decorations/line"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    diagonals: SudokuXLine[]
    decorations?: DecorationType[]
}

const SudokuX = ({ type, rows, columns, values, diagonals, decorations }: Props) => {
    return (
        <Sudoku
            type={type ?? "SudokuX"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={(diagonals as DecorationType[]).concat(decorations ?? [])}
        />
    )
}

export default SudokuX
