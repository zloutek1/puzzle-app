import Game from "../components/Game"
import { SudokuRegion } from "../types/decorations/region"
import { Puzzle } from "../types/puzzle"

type Props = {
    rows: number
    columns: number
    regions: SudokuRegion[]
}

const JigsawSudoku = ({ rows, columns, regions }: Props) => {
    const emptyCells = Array.from(Array(rows), (y: number) =>
        Array.from(Array(columns), (x: number) => ({
            x,
            y,
            value: 1,
            highlight: "",
            editable: true,
        }))
    )

    const rules = () => false

    const puzzle: Puzzle<number> = {
        type: "JigsawSudoku",
        cells: emptyCells,
        decorations: [
            ...regions
        ],
        rules: rules,
    }

    return <Game puzzle={puzzle} />
}

export default JigsawSudoku
