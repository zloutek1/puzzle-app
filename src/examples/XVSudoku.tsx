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

    rules?: () => boolean
}

const XVSudoku = ({ type, rows, columns, values, xvs, decorations, rules }: Props) => {
    const XVRules = () => false

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
            rules={() => XVRules() && (!rules || rules())}
        />
    )
}

export default XVSudoku
