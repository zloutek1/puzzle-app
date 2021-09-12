import { MouseEvent } from "react"
import styled from "styled-components"

type StyledProps = {
    given: boolean
}

const StyledCell = styled.div<StyledProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow:
        1px 0 0 0 #000000,
        0 1px 0 0 #000000,
        1px 1px 0 0 #000000,   /* Just to fix the corner */
        1px 0 0 0 #000000 inset,
        0 1px 0 0 #000000 inset;

    cursor: pointer;
    font-size: 1.5rem;
    user-select: none;

    color ${({given}) => given ? "#000000" : "#4895ef"};
`

type Props<T> = {
    x: number
    y: number
    value: T | null
    editable: boolean

    onMouseDown: (e: MouseEvent, x: number, y: number) => void
    onMouseEnter: (e: MouseEvent, x: number, y: number) => void
}

const Cell = <T,>({ x, y, value, editable, onMouseDown, onMouseEnter }: Props<T>) => {
    return (
        <StyledCell
            className="Cell"
            given={!editable}
            onMouseDown={(e: MouseEvent) => onMouseDown(e, x, y)}
            onMouseEnter={(e: MouseEvent) => onMouseEnter(e, x, y)}
        >
            {value}
        </StyledCell>
    )
}

export default Cell