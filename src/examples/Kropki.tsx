import Game from "../components/Game"
import { Kropki as KropkiType } from "../types/decorations/between"
import { Puzzle } from "../types/puzzle"
import { genEmptyCells } from "./defaults"

type Props = {
    rows: number
    columns: number
    kropkiDots: KropkiType[]
}

const Kropki = ({ rows, columns, kropkiDots }: Props) => {
    const rules = () => false

    const puzzle: Puzzle<number> = {
        type: "Kropki",
        cells: genEmptyCells(rows, columns),
        decorations: [
            ...kropkiDots
        ],
        rules: rules,
    }

    return <Game puzzle={puzzle} />
}

export default Kropki
