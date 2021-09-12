import { createContext, KeyboardEvent, MouseEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { clearValue, loadPuzzle, setValue } from "../state/gameSlice"
import useHighlight from "../state/useHighlight"
import { BoardContext } from "../types/general"
import { Puzzle } from "../types/puzzle"
import Board from "./Board"

export const Context = createContext<BoardContext>({
    boardRows: 0,
    boardColumns: 0,
    cellSize: 0
})

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

    useEffect(() => {
        dispatch(loadPuzzle(puzzle))
    }, [dispatch, puzzle])

    const [rows, cols] = [puzzle.cells.length, puzzle.cells[0].length];

    const [ isHighlighting, setIsHighlighting ] = useState(false)
    const { highlightedCells, highlightCell, setHighlightedCells } = useHighlight();

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Backspace" || e.key === "Delete") {
            highlightedCells.forEach(([x, y]) =>
                dispatch(clearValue({x, y}))
            )
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
                dispatch(clearValue({x, y}))
            )
            return true;
        }

        if (isAcceptableCellInput(e)) {
            const value = getCellInput(e)
            highlightedCells.forEach(([x, y]) => {
                dispatch(setValue({x, y, value}))
            })
            return true
        }

        if (e.key === 'ArrowUp' || e.key.toUpperCase() === 'W') {
            if (highlightedCells.length >= 1) {
                if (e.ctrlKey || e.metaKey) {
                    const selectedCell = highlightedCells[highlightedCells.length - 1];
                    highlightCell(selectedCell[0], selectedCell[1] === 0 ? rows - 1 : selectedCell[1] - 1)
                } else if (highlightedCells.length !== 1) {
                    setHighlightedCells(highlightedCells.slice(-1));
                } else {
                    const selectedCell = highlightedCells[0];
                    setHighlightedCells([[selectedCell[0], selectedCell[1] === 0 ? rows - 1 : selectedCell[1] - 1]]);
                }
                return true;
            }
        }

        if (e.key === 'ArrowDown' || e.key.toUpperCase() === 'S') {
            if (highlightedCells.length >= 1) {
                if (e.ctrlKey || e.metaKey) {
                    const selectedCell = highlightedCells[highlightedCells.length - 1];
                    highlightCell(selectedCell[0], selectedCell[1] === rows - 1 ? 0 : selectedCell[1] + 1)
                } else if (highlightedCells.length !== 1) {
                    setHighlightedCells(highlightedCells.slice(-1));
                } else {
                    const selectedCell = highlightedCells[0];
                    setHighlightedCells([[selectedCell[0], selectedCell[1] === rows - 1 ? 0 : selectedCell[1] + 1]]);
                }
                return true;
            }
        }

        if (e.key === 'ArrowLeft' || e.key.toUpperCase() === 'A') {
            if (highlightedCells.length >= 1) {
                if (e.ctrlKey || e.metaKey) {
                    const selectedCell = highlightedCells[highlightedCells.length - 1];
                    highlightCell(selectedCell[0] === 0 ? cols - 1 : selectedCell[0] - 1, selectedCell[1])
                } else if (highlightedCells.length !== 1) {
                    setHighlightedCells(highlightedCells.slice(-1));
                } else {
                    const selectedCell = highlightedCells[0];
                    setHighlightedCells([[selectedCell[0] === 0 ? cols - 1 : selectedCell[0] - 1, selectedCell[1]]]);
                }
                return true;
            }
        }

        if (e.key === 'ArrowRight' || e.key.toUpperCase() === 'D') {
            if (highlightedCells.length >= 1) {
                if (e.ctrlKey || e.metaKey) {
                    const selectedCell = highlightedCells[highlightedCells.length - 1];
                    highlightCell(selectedCell[0] === cols - 1 ? 0 : selectedCell[0] + 1, selectedCell[1])
                } else if (highlightedCells.length !== 1) {
                    setHighlightedCells(highlightedCells.slice(-1));
                } else {
                    const selectedCell = highlightedCells[0];
                    setHighlightedCells([[selectedCell[0] === cols - 1 ? 0 : selectedCell[0] + 1, selectedCell[1]]]);
                }
                return true;
            }
        }

        if (e.key === 'Escape') {
            setHighlightedCells([])
            return true;
        }

        return false;
    }

    const onMouseDown = (e: MouseEvent | undefined, x: number, y: number) => {
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
        <Context.Provider
            value={{
                boardRows: puzzle.cells.length,
                boardColumns: puzzle.cells[0].length,
                cellSize: 50,
            }}
        >
            <StyledGame
                className="Game"
                tabIndex={0}
                onKeyDown={onKeyDown}
                onMouseUp={() => setIsHighlighting(false)}
            >
                <Board
                    highlightedCells={highlightedCells}
                    onMouseDown={onMouseDown}
                    onMouseEnter={onMouseEnter}
                />
            </StyledGame>
        </Context.Provider>
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
