import { createContext, MouseEvent } from "react"
import styled from "styled-components"
import { selectPuzzle } from "../state/gameSlice"
import { useAppSelector } from "../state/hooks"
import { BoardContext, Point } from "../types/general"
import Decorations from "./Decorations"
import Highlights from "./Highlights"
import Values from "./Values"

const StyledBoard = styled.div`
    position: relative;
`

export const Context = createContext<BoardContext>({
    boardRows: 0,
    boardColumns: 0,
    cellSize: 0
})

type Props = {
    highlightedCells: Point[]

    onMouseDown: (e: MouseEvent, x: number, y: number) => void
    onMouseEnter: (e: MouseEvent, x: number, y: number) => void
}

const Board = ({ highlightedCells, onMouseDown, onMouseEnter }: Props) => {
    const puzzle = useAppSelector(selectPuzzle);

    if (puzzle === undefined)
        return <div>Puzzle not loaded</div>

    const { cells, decorations } = puzzle;

    return (
        <Context.Provider
            value={{
                boardRows: cells.length,
                boardColumns: cells[0].length,
                cellSize: 50,
            }}
        >
            <StyledBoard className="Board">
                <Values cells={cells} onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} />
                <Decorations decorations={decorations} />
                <Highlights highlightedCells={highlightedCells} />
            </StyledBoard>
        </Context.Provider>
    )
}

export default Board
