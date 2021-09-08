import styled from "styled-components"
import { Sojuko as SojukoType } from "../../types/decorations/between"
import { Dimensions } from "../../types/general"

type StyledProps = {
    x: number
    y: number
    cellSize: number
    dimensions: Dimensions
    target: number
}

const StyledXV = styled.div<StyledProps>`
    position: absolute;
    top: calc(${({ y, dimensions: {height}, cellSize }) => `${y} * ${cellSize}px + ${cellSize}px / 2 - ${height}px / 2`});
    left: calc(${({ x, dimensions: {width}, cellSize }) => `${x} * ${cellSize}px + ${cellSize}px / 2 - ${width}px / 2`});
    width: ${({ dimensions: { width } }) => width}px;
    height: ${({ dimensions: { height } }) => height}px;

    border-radius: 100%;
    background-color: white;
    border: solid 1px black;

    &:after {
        content: "${({target}) => target}";

        position: absolute;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Sojuko = ({ between, dimensions, target }: SojukoType) => {
    const [[x0, y0], [x1, y1], [x2, y2]] = between
    const x = x0 + (x1 - x0) / 2 + (x2 - x0) / 2
    const y = y0 + (y1 - y0) / 2 + (y2 - y0) / 2

    return <StyledXV x={x} y={y} dimensions={dimensions} target={target} cellSize={50} />
}

export default Sojuko
