import styled from "styled-components"
import { Cell as CellType } from "../types/puzzle"
import Cell from "./Cell"

type StyledProps = {
    rows: number
    columns: number
    cellSize: number
}

type Props<T> = {
    rows: number
    columns: number
    cells: CellType<T>[][]
    cellSize: number
}

const StyledValues = styled.div<StyledProps>`
    display: grid;
    grid-template-columns: ${({ columns, cellSize }) => `repeat(${columns}, ${cellSize}px);`}
    grid-template-rows: ${({ rows, cellSize }) => `repeat(${rows}, ${cellSize}px);`}
`

const Values = <T,>({ rows, columns, cells, cellSize }: Props<T>) => {
    return (
        <StyledValues className="Values" rows={rows} columns={columns} cellSize={cellSize}>
            {cells.map((row, y) =>
                row.map((cell, x) => <Cell key={`cell-${x}-${y}`} {...cell} />)
            )}
        </StyledValues>
    )
}

export default Values
