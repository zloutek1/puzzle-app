import styled from "styled-components"
import { Cell as CellType } from "../types/puzzle"
import Cell from "./Cell"

type StyledProps = {
    rows: number
    columns: number
}

type Props<T> = {
    rows: number
    columns: number
    cells: CellType<T>[][]
}

const StyledValues = styled.div<StyledProps>`
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 50px);
    grid-template-rows: repeat(${({ rows }) => rows}, 50px);
`

const Values = <T,>({ rows, columns, cells }: Props<T>) => {
    return (
        <StyledValues className="Values" rows={rows} columns={columns}>
            {cells.map((row, y) =>
                row.map((cell, x) => <Cell key={`cell-${x}-${y}`} {...cell} />)
            )}
        </StyledValues>
    )
}

export default Values
