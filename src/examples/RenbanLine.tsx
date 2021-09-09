import { Decorations } from "../types/decorations"
import { RenbanLine } from "../types/decorations/line"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    renbanLines: RenbanLine[]
    decorations?: Decorations

    rules?: () => boolean
}

const RenbanSudoku = ({ type, rows, columns, values, renbanLines, decorations, rules }: Props) => {
    const renbanRules = () => false

    return (
        <Sudoku
            type={type ?? "Renban Sudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                renbanLines: renbanLines,
                ...(decorations ?? {})
            }}
            rules={() => renbanRules() && (!rules || rules())}
        />
    )
}

export default RenbanSudoku
