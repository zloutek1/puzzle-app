import styled from "styled-components"
import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region"
import { equals } from "../../utils"

type StyledProps = {
    x: number
    y: number
    thickness: number
    border: {
        top: boolean
        bottom: boolean
        left: boolean
        right: boolean
    }
}

const StyledBorder = styled.div<StyledProps>`
    position: absolute;
    top: calc(${({y, thickness}) => `${y} * 50px - ${thickness}px / 2`});
    left: calc(${({x, thickness}) => `${x} * 50px - ${thickness}px / 2`});
    width: 50px;
    height: 50px;

    box-shadow:
        ${({ border: { top },           color, thickness }) =>
            top             ? `0 ${thickness}px 0 0 ${color ?? "#000000"} inset`        : `0 0 0 0 ${color ?? "#000000"} inset`},

        ${({ border: { bottom },        color, thickness }) =>
            bottom          ? `0 ${thickness}px 0 0 ${color ?? "#000000"}`              : `0 0 0 0 ${color ?? "#000000"}`},

        ${({ border: { bottom, right }, color, thickness }) =>
            bottom && right ? `${thickness}px ${thickness}px 0 0 ${color ?? "#000000"}` : `0 0 0 0 ${color ?? "#000000"}`}, // fix corner

        ${({ border: { left },          color, thickness }) =>
            left            ? `${thickness}px 0 0 0 ${color ?? "#000000"} inset`        : `0 0 0 0 ${color ?? "#000000"} inset`},

        ${({ border: { right },         color, thickness }) =>
            right           ? `${thickness}px 0 0 0 ${color ?? "#000000"}`              : `0 0 0 0 ${color ?? "#000000"}`};
`

const SudokuRegion = ({ cells }: SudokuRegionType) => {
    const calculateBorder = (x: number, y: number) => {
        const isUp = cells.find(cell => equals(cell, [x, y - 1]))
        const isDown = cells.find(cell => equals(cell, [x, y + 1]))
        const isLeft = cells.find(cell => equals(cell, [x - 1, y]))
        const isRight = cells.find(cell => equals(cell, [x + 1, y]))

        return {
            top: isUp === undefined,
            bottom: isDown === undefined,
            left: isLeft === undefined,
            right: isRight === undefined
        }
    }

    return (
        <div className="SudokuRegion">
            {cells.map(([x, y]) => (
                <StyledBorder key={`region-${x}-${y}`} x={x} y={y} thickness={5} border={calculateBorder(x, y)} />
            ))}
        </div>
    )
}

export default SudokuRegion
