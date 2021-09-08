import { Puzzle } from "../types/puzzle"
import Board from "./Board"

type Props<T> = {
    puzzle: Puzzle<T>
}

const Game = <T,>({ puzzle }: Props<T>) => {
    return (
        <div className="Game">
            <Board cells={puzzle.cells} decorations={puzzle.decorations} />
        </div>
    )
}

export default Game
