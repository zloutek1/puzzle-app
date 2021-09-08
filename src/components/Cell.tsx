import styled from "styled-components"

type Props<T> = {
    x: number
    y: number
    value: T | null

    highlight: string
    editable: boolean
}

const StyledCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Cell = <T,>({ x, y, value, highlight, editable }: Props<T>) => {
    return <StyledCell className="Cell">
        {value}
    </StyledCell>
}

export default Cell