import { Decorations } from "../types/decorations"
import { EvenOdd } from "../types/decorations/shape"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    evenOdds: EvenOdd[]
    decorations?: Decorations
}

const EvenOddSudoku = ({ type, rows, columns, values, evenOdds, decorations }: Props) => {
    return (
        <Sudoku
            type={type ?? "Even/Odd Sudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                evenOdds: evenOdds,
                ...decorations
            }}
        />
    )
}

export default EvenOddSudoku
