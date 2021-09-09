import Game from "../components/Game"
import { Decorations } from "../types/decorations"
import { Sojuko as SojukoType } from "../types/decorations/between"
import { Puzzle } from "../types/puzzle"
import { genCellsFromGiven, genEmptyCells } from "../utils"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    sojukos: SojukoType[]
    decorations?: Decorations

    rules?: () => boolean
}

const Sojuko = ({ type, rows, columns, values, sojukos, decorations, rules }: Props) => {
    const sojukoRules = () => false

    rows = rows ?? 3
    columns = columns ?? 3

    const puzzle: Puzzle<number> = {
        type: type ?? "Sojuko",
        cells: values === undefined ? genEmptyCells(rows, columns) : genCellsFromGiven(rows, columns, values),
        decorations: {
            sojukos: sojukos,
            ...(decorations ?? {})
        },
        valueOptions: [1, 2, 3],
        rules: () => sojukoRules() && (!rules || rules()),
    }

    return <Game puzzle={puzzle} />
}

export default Sojuko
