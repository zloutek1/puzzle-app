import Game from "../components/Game"
import { Decorations } from "../types/decorations"
import { Kropki as KropkiType } from "../types/decorations/between"
import { Puzzle } from "../types/puzzle"
import { genEmptyCells } from "../utils"

type Props = {
    rows: number
    columns: number

    kropkiDots: KropkiType[]
    decorations?: Decorations

    rules?: () => boolean
}

const Kropki = ({ rows, columns, kropkiDots, decorations, rules }: Props) => {
    const kropkiRules = () => false

    const puzzle: Puzzle<number> = {
        type: "Kropki",
        cells: genEmptyCells(rows, columns),
        decorations: {
            kropkis: kropkiDots,
            ...(decorations ?? {})
        },
        valueOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        rules: () => kropkiRules() && (!rules || rules()),
    }

    return <Game puzzle={puzzle} />
}

export default Kropki
