import rules from "../rules";
import { selectPuzzle } from "../state/gameSlice";
import { useAppSelector } from "../state/hooks";


const GameControls = () => {
    const puzzle = useAppSelector(selectPuzzle);
    if (puzzle === undefined)
        return <div></div>


    const didWin = () =>
        puzzle.rules
            .map((rule) => rules[rule](puzzle))
            .every((val) => val === true)

    const onClick = () => {
        console.log(didWin())
    }

    return (<div className="GameControls">
        <button onClick={() => onClick()}>Check</button>
    </div>)
}

export default GameControls