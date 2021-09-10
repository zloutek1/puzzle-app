import { useContext } from "react"
import styled from "styled-components"
import { Cell as CellType } from "../types/puzzle"
import { Context as BoardContext } from "./Board"
import Cell from "./Cell"

type StyledProps = {
    rows: number
    columns: number
    cellSize: number
}

const StyledValues = styled.div<StyledProps>`
    display: grid;
    grid-template-columns: ${({ columns, cellSize }) => `repeat(${columns}, ${cellSize}px);`}
    grid-template-rows: ${({ rows, cellSize }) => `repeat(${rows}, ${cellSize}px);`}
`

type Props<T> = {
    cells: CellType<T>[][]
}

const Values = <T,>({ cells }: Props<T>) => {
    const { boardRows, boardColumns, cellSize } = useContext(BoardContext);

    return (
        <StyledValues
            className="Values"
            rows={boardRows}
            columns={boardColumns}
            cellSize={cellSize}
        >
            {cells.map((row, y) =>
                row.map((cell, x) => <Cell key={`cell-${x}-${y}`} {...cell} />)
            )}
        </StyledValues>
    )
}

export default Values
