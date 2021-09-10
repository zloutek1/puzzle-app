import { KeyboardEvent, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { clearValue, loadPuzzle, setValue } from "../state/gameSlice"
import useHighlight from "../state/useHighlight"
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

    const [ isHighlighting, setIsHighlighting ] = useState(false)
    const { highlightedCells, highlightCell, setHighlightedCells } = useHighlight();

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Backspace" || e.key === "Delete") {

            return true;
        }

        if ((e.ctrlKey || e.metaKey) && (e.key.toUpperCase() === 'Z')) {
            //dispatch(undo());
            return true;
        }

        if ((e.ctrlKey || e.metaKey) && (e.key.toUpperCase() === 'Y')) {
            //dispatch(redo());
            return true;
        }

        if ((e.key === '0' || (e.nativeEvent && e.nativeEvent.code === 'Digit0') || (e.nativeEvent && e.nativeEvent.code === 'Numpad0'))) {
            highlightedCells.forEach(([x, y]) =>
                dispatch(clearValue({
                        x,
                        y
                    })
                )
            )
            return true;
        }

        if (isAcceptableCellInput(e)) {
            const value = getCellInput(e)
            highlightedCells.forEach(([x, y]) => {
                dispatch(
                    setValue({
                        x,
                        y,
                        value,
                    })
                )
            })
            return true
        }

        return false;
    }

    const onMouseDown = (e: MouseEvent | undefined, x: number, y: number) => {
        e?.preventDefault()

        if (e && (e.ctrlKey || e.metaKey))
            highlightCell(x, y);
        else {
            setHighlightedCells([[x, y]]);
        }
        setIsHighlighting(true);
    };

    const onMouseEnter = (e: MouseEvent | undefined, x: number, y: number) => {
        e?.preventDefault()
        if (isHighlighting) highlightCell(x, y);
    };

    return (
        <StyledGame className="Game" tabIndex={0} onKeyDown={onKeyDown} onMouseUp={() => setIsHighlighting(false)}>
            <Board highlightedCells={highlightedCells} onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} />
        </StyledGame>
    )
}

const isAcceptableCellInput = (e: KeyboardEvent) =>
    e.key.match(/^[1-9]$/) !== null ||
    (e.nativeEvent.code &&
        e.nativeEvent.code.match(/^(?:Digit|Numpad)[1-9]$/) !== null)

const getCellInput = (e: KeyboardEvent) => {

    const singleCharMatch = e.key.match(/^[1-9]$/);
    const digitCodeMatch = e.nativeEvent.code && e.nativeEvent.code.match(/^(?:Digit|Numpad)([1-9])$/);

    if (!!singleCharMatch) {
        return e.key.toUpperCase();
    } else if (!!digitCodeMatch) {
        return digitCodeMatch[1];
    } else {
        return '';
    }
};

export default Game
