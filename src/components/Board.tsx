import { DecorationType } from "../types/decorations"
import { Cell as CellType } from "../types/puzzle"
import Decoration from "./Decoration"
import Values from "./Values"

type Props<T> = {
    cells: CellType<T>[][]
    decorations: DecorationType[]
}


const Board = <T,>({ cells, decorations }: Props<T>) => {
    const columns = cells[0].length
    const rows = cells.length

    return (
        <div className="Board">
            <Values rows={rows} columns={columns} cells={cells} />
            <div className="Decorations">
                {decorations.map((decoration, i) => <Decoration key={`decoration-${i}`} decoration={decoration} />)}
            </div>
        </div>
    )
}

export default Board
