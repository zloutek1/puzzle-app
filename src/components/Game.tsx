import { useDispatch } from "react-redux"
import styled from "styled-components"
import { loadPuzzle } from "../state/gameSlice"
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
    const dispatch = useDispatch()
    dispatch(loadPuzzle(puzzle))

    return (
        <StyledGame className="Game">
            <Board />
        </StyledGame>
    )
}

export default Game
