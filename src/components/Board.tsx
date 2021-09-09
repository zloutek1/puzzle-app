import styled from "styled-components"
import { Decorations as DecorationsType } from "../types/decorations"
import { BoardContext } from "../types/general"
import { Cell as CellType } from "../types/puzzle"
import Decorations from "./Decorations"
import Values from "./Values"

type Props<T> = {
    cells: CellType<T>[][]
    decorations: DecorationsType
}

const StyledBoard = styled.div`
    position: relative;
`

const Board = <T,>({ cells, decorations }: Props<T>) => {
    const columns = cells[0].length
    const rows = cells.length
    const cellSize = 50

    const context: BoardContext = {
        boardRows: rows,
        boardColumns: columns,
        cellSize: cellSize
    }

    return (
        <StyledBoard className="Board">
            <Values rows={rows} columns={columns} cells={cells} cellSize={cellSize} />
            <Decorations decorations={decorations} context={context} />
        </StyledBoard>
    )
}

export default Board
