import Game from "../components/Game"
import { DecorationType } from "../types/decorations"
import { SudokuRegion } from "../types/decorations/region"
import { Puzzle } from "../types/puzzle"
import { genCellsFromGiven, genEmptyCells } from "../utils"

type Props = {
    type?: string
    rows: number
    columns: number
    regions: SudokuRegion[]
    values?: (number | null)[][]
    decorations?: DecorationType[]
}

const JigsawSudoku = ({ type, rows, columns, regions, values, decorations }: Props) => {
    const rules = () => false

    const puzzle: Puzzle<number> = {
        type: type ?? "JigsawSudoku",
        cells: values === undefined ? genEmptyCells(rows, columns) : genCellsFromGiven(rows, columns, values),
        decorations: [
            ...regions,
            ...(decorations ?? [])
        ],
        rules: rules,
    }

    return <Game puzzle={puzzle} />
}

export default JigsawSudoku
