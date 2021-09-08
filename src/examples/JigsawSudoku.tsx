import Game from "../components/Game"
import { SudokuRegion } from "../types/decorations/region"
import { Puzzle } from "../types/puzzle"
import { genCellsFromGiven, genEmptyCells } from "./defaults"

type Props = {
    rows: number
    columns: number
    regions: SudokuRegion[]
    values?: (number | null)[][]
}

const JigsawSudoku = ({ rows, columns, regions, values }: Props) => {
    const rules = () => false

    const puzzle: Puzzle<number> = {
        type: "JigsawSudoku",
        cells: values === undefined ? genEmptyCells(rows, columns) : genCellsFromGiven(rows, columns, values),
        decorations: [
            ...regions
        ],
        rules: rules,
    }

    return <Game puzzle={puzzle} />
}

export default JigsawSudoku
