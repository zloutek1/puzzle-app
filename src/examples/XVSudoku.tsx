import { Decorations } from "../types/decorations"
import { XV } from "../types/decorations/between"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    xvs: XV[]
    decorations?: Decorations
}

const XVSudoku = ({ type, rows, columns, values, xvs, decorations }: Props) => {
    return (
        <Sudoku
            type={type ?? "XV Sudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                xvs: xvs,
                ...(decorations ?? {})
            }}
        />
    )
}

export default XVSudoku
