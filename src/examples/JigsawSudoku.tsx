import Game from "../components/Game"
import { Decorations } from "../types/decorations"
import { SudokuRegion } from "../types/decorations/region"
import { Puzzle } from "../types/puzzle"
import { genCellsFromGiven, genEmptyCells } from "../utils"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    regions: SudokuRegion[]
    decorations?: Decorations

    rules?: () => boolean
}

const JigsawSudoku = ({ type, rows, columns, regions, values, decorations, rules }: Props) => {
    const sudokuRules = () => false

    rows = rows ?? 9
    columns = columns ?? 9

    const puzzle: Puzzle<number> = {
        type: type ?? "JigsawSudoku",
        cells: values === undefined ? genEmptyCells(rows, columns) : genCellsFromGiven(rows, columns, values),
        decorations: {
            sudokuRegions: regions,
            ...(decorations ?? {})
        },
        valueOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        rules: () => sudokuRules() && (!rules || rules()),
    }

    return <Game puzzle={puzzle} />
}

export default JigsawSudoku
