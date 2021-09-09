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

    rules?: () => boolean
}

const SudokuX = ({ type, rows, columns, values, diagonals, decorations, rules }: Props) => {
    const sudokuXRules = () => false

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
            rules={() => sudokuXRules() && (!rules || rules())}
        />
    )
}

export default SudokuX
