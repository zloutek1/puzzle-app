import styled from "styled-components"
import { Puzzle } from "../types/puzzle"
import Board from "./Board"

type Props<T> = {
    puzzle: Puzzle<T>
}

const StyledGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Game = <T,>({ puzzle }: Props<T>) => {
    return (
        <StyledGame className="Game">
            <Board cells={puzzle.cells} decorations={puzzle.decorations} />
        </StyledGame>
    )
}

export default Game
