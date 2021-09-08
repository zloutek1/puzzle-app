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
}

const Kropki = ({ rows, columns, kropkiDots, decorations }: Props) => {
    const rules = () => false

    const puzzle: Puzzle<number> = {
        type: "Kropki",
        cells: genEmptyCells(rows, columns),
        decorations: {
            kropkis: kropkiDots,
            ...(decorations ?? {})
        },
        rules: rules,
    }

    return <Game puzzle={puzzle} />
}

export default Kropki
