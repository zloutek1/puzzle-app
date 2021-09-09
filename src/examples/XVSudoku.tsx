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

    rules?: string[]
}

const XVSudoku = ({ type, rows, columns, values, xvs, decorations, rules }: Props) => {
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
            rules={[...rules ?? [], "XV"]}
        />
    )
}

export default XVSudoku
