import Game from "../components/Game"
import { Decorations } from "../types/decorations"
import { Skyscraper as SkyscraperType } from "../types/decorations/side"
import { Puzzle } from "../types/puzzle"
import { genCellsFromGiven, genEmptyCells } from "../utils"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    skyscrapers: SkyscraperType[]
    decorations?: Decorations

    rules?: string[]
}

const Skyscraper = ({ type, rows, columns, skyscrapers, values, decorations, rules }: Props) => {
    rows = rows ?? 5
    columns = columns ?? 5

    const puzzle: Puzzle<number> = {
        type: type ?? "Skyscraper",
        cells: values === undefined ? genEmptyCells(rows, columns) : genCellsFromGiven(rows, columns, values),
        decorations: {
            skyscrapers: skyscrapers,
            ...(decorations ?? {})
        },
        valueOptions: [1, 2, 3, 4, 5],
        rules: [...rules ?? [], "skyscraper"],
    }

    return <Game puzzle={puzzle} />
}

export default Skyscraper
