import Game from "../components/Game"
import { Decorations } from "../types/decorations"
import { Nonogram as NonogramType } from "../types/decorations/side"
import { Color } from "../types/general"
import { Puzzle } from "../types/puzzle"
import { genCellsFromGiven, genEmptyCells } from "../utils"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (Color | null)[][]

    nonograms: NonogramType[]
    decorations?: Decorations

    rules?: () => boolean
}

const Nonogram = ({ type, rows, columns, nonograms, values, decorations, rules }: Props) => {
    const nonogramRules = () => false

    rows = rows ?? 9
    columns = columns ?? 9

    const puzzle: Puzzle<Color> = {
        type: type ?? "Nonogram",
        cells: values === undefined ? genEmptyCells(rows, columns) : genCellsFromGiven(rows, columns, values),
        decorations: {
            nonograms: nonograms,
            ...(decorations ?? {})
        },
        valueOptions: ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFFFFF", "#ABCDEF"],
        rules: () => nonogramRules() && (!rules || rules()),
    }

    return <Game puzzle={puzzle} />
}

export default Nonogram
