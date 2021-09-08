import styled from "styled-components"
import { DecorationType } from "../types/decorations"
import { Cell as CellType } from "../types/puzzle"
import Decorations from "./Decorations"
import Values from "./Values"

type Props<T> = {
    cells: CellType<T>[][]
    decorations: DecorationType[]
}

const StyledBoard = styled.div`
    position: relative;
`

const Board = <T,>({ cells, decorations }: Props<T>) => {
    const columns = cells[0].length
    const rows = cells.length

    return (
        <StyledBoard className="Board">
            <Values rows={rows} columns={columns} cells={cells} />
            <Decorations decorations={decorations} />
        </StyledBoard>
    )
}

export default Board
