import Game from "../components/Game"
import { SudokuRegion } from "../types/decorations/region"
import { Puzzle } from "../types/puzzle"
import { genEmptyCells } from "./defaults"

type Props = {
    rows: number
    columns: number
    regions: SudokuRegion[]
}

const JigsawSudoku = ({ rows, columns, regions }: Props) => {
    const rules = () => false

    const puzzle: Puzzle<number> = {
        type: "JigsawSudoku",
        cells: genEmptyCells(rows, columns),
        decorations: [
            ...regions
        ],
        rules: rules,
    }

    return <Game puzzle={puzzle} />
}

export default JigsawSudoku
