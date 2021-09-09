import styled from "styled-components"
import { selectPuzzle } from "../state/gameSlice"
import { useAppSelector } from "../state/hooks"
import { BoardContext } from "../types/general"
import Decorations from "./Decorations"
import Values from "./Values"

const StyledBoard = styled.div`
    position: relative;
`

const Board = () => {
    const puzzle = useAppSelector(selectPuzzle);

    if (puzzle === undefined)
        return <div>Puzzle not loaded</div>

    const { cells, decorations } = puzzle;

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
