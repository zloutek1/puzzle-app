import styled from "styled-components"
import { XV as XVType } from "../../types/decorations/between"
import { BoardContext, Dimensions } from "../../types/general"

type StyledProps = {
    x: number
    y: number
    dimensions: Dimensions
    cellSize: number
    text: string
}

const StyledXV = styled.div<StyledProps>`
    position: absolute;
    top: calc(${({ y, dimensions: {height}, cellSize }) => `${y} * ${cellSize}px + ${cellSize}px / 2 - ${height}px / 2`});
    left: calc(${({ x, dimensions: {width}, cellSize }) => `${x} * ${cellSize}px + ${cellSize}px / 2 - ${width}px / 2`});
    width: ${({ dimensions: { width } }) => width}px;
    height: ${({ dimensions: { height } }) => height}px;

    border-radius: 100%;
    background-color: white;

    &:after {
        content: "${({text}) => text}";

        position: absolute;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

type Props = {
    context: BoardContext
}

export const XV = ({ between, dimensions, text, context }: XVType & Props) => {
    const [[x0, y0], [x1, y1]] = between
    const x = x0 + (x1 - x0) / 2
    const y = y0 + (y1 - y0) / 2

    return <StyledXV x={x} y={y} dimensions={dimensions} text={text} cellSize={context.cellSize} />
}

export const XVs = ({ xvs, context }: { xvs: XVType[] } & Props) => (
    <div className="XVs">
        {xvs.map((xv, i) =>
            <XV key={`XV-${i}`} {...xv} context={context} />
        )}
    </div>
)
