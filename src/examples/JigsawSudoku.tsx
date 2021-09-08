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
}

const JigsawSudoku = ({ type, rows, columns, regions, values, decorations }: Props) => {
    const rules = () => false

    rows = rows ?? 9
    columns = columns ?? 9

    const puzzle: Puzzle<number> = {
        type: type ?? "JigsawSudoku",
        cells: values === undefined ? genEmptyCells(rows, columns) : genCellsFromGiven(rows, columns, values),
        decorations: {
            sudokuRegions: regions,
            ...(decorations ?? {})
        },
        rules: rules,
    }

    return <Game puzzle={puzzle} />
}

export default JigsawSudoku
