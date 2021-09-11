import { MouseEvent } from "react"
import styled from "styled-components"
import { selectPuzzle } from "../state/gameSlice"
import { useAppSelector } from "../state/hooks"
import { Point } from "../types/general"
import Decorations from "./Decorations"
import Highlights from "./Highlights"
import Values from "./Values"

const StyledBoard = styled.div`
    position: relative;
`

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
        <StyledBoard className="Board">
            <Values cells={cells} onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} />
            <Decorations decorations={decorations} />
            <Highlights highlightedCells={highlightedCells} />
        </StyledBoard>
    )
}

export default Board
