import styled from "styled-components"

type Props<T> = {
    x: number
    y: number
    value: T | null
}

const StyledCell = styled.div`
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
`

const Cell = <T,>({ value }: Props<T>) => {
    return <StyledCell className="Cell">
        {value}
    </StyledCell>
}

export default Cell