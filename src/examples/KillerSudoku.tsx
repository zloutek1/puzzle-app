import { Decorations } from "../types/decorations"
import { KillerCage } from "../types/decorations/region"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    killerCages: KillerCage[]
    decorations?: Decorations

    rules?: () => boolean
}

const KillerSudoku = ({ type, rows, columns, values, killerCages, decorations, rules }: Props) => {
    const killerRules = () => false

    return (
        <Sudoku
            type={type ?? "Killer Sudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                killerCages: killerCages,
                ...decorations
            }}
            rules={() => killerRules() && (!rules || rules())}
        />
    )
}

export default KillerSudoku
