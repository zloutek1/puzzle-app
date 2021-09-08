import styled from "styled-components"
import { SudokuXLine as SudokuXLineType } from "../../types/decorations/line"
import { Color } from "../../types/general"
import { line } from "../../utils"

type StyledProps = {
    x: number
    y: number
    length: number

    angle: number
    thickness: number
    color: Color

    cellSize: number
}

const StyledSudokuXLine = styled.div<StyledProps>`
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

const SudokuXLine = ({ color, thickness, diagonal }: SudokuXLineType) => {
    color = color ?? "gray"

    const rows = 9
    const columns = 9

    let x, y, length, angle
    switch (diagonal) {
        case "left":
            ;[x, y, length, angle] = line([0, 0], [columns, rows])
            break
        case "right":
            ;[x, y, length, angle] = line([0, rows], [columns, 0])
            break
    }

    return (
        <StyledSudokuXLine
            className="SudokuXLine"
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

export default SudokuXLine