import { Decorations } from "../types/decorations"
import { Fortress } from "../types/decorations/shape"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    fortresses: Fortress[]
    decorations?: Decorations
}

const FortressSudoku = ({ type, rows, columns, values, fortresses, decorations }: Props) => {
    return (
        <Sudoku
            type={type ?? "Fortress Sudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                fortresses: fortresses,
                ...decorations
            }}
        />
    )
}

export default FortressSudoku
