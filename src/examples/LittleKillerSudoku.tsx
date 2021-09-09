import { Decorations } from "../types/decorations"
import { LittleKiller as LittleKillerType } from "../types/decorations/side"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    littleKillers: LittleKillerType[]
    decorations?: Decorations

    rules?: () => boolean
}

const LittleKillerSudkou = ({ type, rows, columns, littleKillers, values, decorations, rules }: Props) => {
    const littleKillerRules = () => false

    rows = rows ?? 9
    columns = columns ?? 9

    return (
        <Sudoku
            type={type ?? "LittleKillerSudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                littleKillers: littleKillers,
                ...(decorations ?? {}),
            }}
            rules={() => littleKillerRules() && (!rules || rules())}
        />
    )
}

export default LittleKillerSudkou
