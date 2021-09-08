import styled from "styled-components"
import { RenbanLine as RenbanLineType } from "../../types/decorations/line"
import { Color } from "../../types/general"
import { zip } from "../../utils"

type StyledProps = {
    x: number
    y: number
    length: number

    angle: number
    thickness: number
    color: Color

    cellSize: number
}

const StyledRenbanLine = styled.div<StyledProps>`
    height: ${({ thickness }) => thickness}px;
    background-color: ${({ color }) => color};
    line-height: 1px;

    position: absolute;
    top: calc(${({ y, cellSize }) => `${y} * ${cellSize}px`});
    left: calc(${({ x, cellSize }) => `${x} * ${cellSize}px`});
    width: calc(${({ length, cellSize }) => `${length} * ${cellSize}px`});

    ${({ angle }) => `
        -moz-transform: rotate(${angle}deg);
        -webkit-transform: rotate(${angle}deg);
        -o-transform: rotate(${angle}deg);
        -ms-transform: rotate(${angle}deg);
        transform: rotate(${angle}deg);'
    `}
`

const RenbanLine = ({ color, cells, thickness }: RenbanLineType) => {
    color = color ?? "gray"

    const centers = cells.map(([x, y]) => [x + 0.5, y + 0.5])

    const lineSegments: JSX.Element[] = []
    for (const [[x0, y0], [x1, y1]] of zip(centers, centers.slice(1))) {
        const length = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2))
        const angle = Math.atan2(y0 - y1, x0 - x1) * (180 / Math.PI)

        const x = (x0 + x1) / 2 - length / 2
        const y = (y0 + y1) / 2

        lineSegments.push(
            <StyledRenbanLine
                key={`RenbanLine ${[x0, y0]}-${[x1, y1]}`}
                x={x}
                y={y}
                length={length}
                angle={angle}
                thickness={thickness}
                color={color}
                cellSize={50}
            />
        )
    }

    return <div className="RenbanLine">{lineSegments}</div>
}

export default RenbanLine
