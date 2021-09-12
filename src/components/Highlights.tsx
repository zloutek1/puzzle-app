import { useContext } from "react";
import styled from "styled-components";
import { Point } from "../types/general";
import { equals } from "../utils";
import { Context as BoardContext } from "./Game";

type StyledProps = {
    x: number
    y: number
    cellSize: number
    thickness: number
    border: {
        top: boolean
        bottom: boolean
        left: boolean
        right: boolean
    }
}

const StyledHighlight = styled.div<StyledProps>`
${({x, y, cellSize, thickness, border}) => `
    position: absolute;
    top: calc(${y} * ${cellSize}px + 1px);
    left: calc(${x} * ${cellSize}px + 1px);
    width: calc(${cellSize}px - ${(border.right ? thickness : 0)}px - 1px);
    height: calc(${cellSize}px - ${(border.bottom ? thickness : 0)}px - 1px);

    pointer-events: none;
    `}

    box-shadow:
        ${({ border: { top },    color, thickness }) =>
            top             ? `0 ${thickness}px 0 0 ${color ?? "#4895ef"} inset`        : `0 0 0 0 ${color ?? "#000000"} inset`},

        ${({ border: { bottom }, color, thickness }) =>
            bottom          ? `0 ${thickness}px 0 0 ${color ?? "#4895ef"}`              : `0 0 0 0 ${color ?? "#000000"}`},

        ${({ border: { bottom, right }, color, thickness }) =>
            bottom && right ? `${thickness}px ${thickness}px 0 0 ${color ?? "#4895ef"}` : `0 0 0 0 ${color ?? "#000000"}`}, // fix corner

        ${({ border: { left },   color, thickness }) =>
            left            ? `${thickness}px 0 0 0 ${color ?? "#4895ef"} inset`        : `0 0 0 0 ${color ?? "#000000"} inset`},

        ${({ border: { right },  color, thickness }) =>
            right           ? `${thickness}px 0 0 0 ${color ?? "#4895ef"}`              : `0 0 0 0 ${color ?? "#000000"}`};
`

type Props = {
    highlightedCells: Point[]
}

const Highlights = ({ highlightedCells }: Props) => {
    const { boardRows, boardColumns, cellSize } = useContext(BoardContext);

    const calculateBorder = (x: number, y: number) => {
        const isHighlighted = highlightedCells.find((highlight) => equals(highlight, [x, y]))
        if (!isHighlighted) return { top: false, bottom: false, left: false, right: false }

        const isUp = highlightedCells.find((highlight) => equals(highlight, [x, y - 1]))
        const isDown = highlightedCells.find((highlight) => equals(highlight, [x, y + 1]))
        const isLeft = highlightedCells.find((highlight) => equals(highlight, [x - 1, y]))
        const isRight = highlightedCells.find((highlight) => equals(highlight, [x + 1, y]))

        return {
            top: isUp === undefined,
            bottom: isDown === undefined,
            left: isLeft === undefined,
            right: isRight === undefined,
        }
    }

    return (
        <div className="Highlights">
            {Array.from(Array(boardRows)).map((_, y) =>
                Array.from(Array(boardColumns)).map((_, x) =>
                    <StyledHighlight
                        key={`highlight-${x}-${y}`}
                        x={x}
                        y={y}
                        cellSize={cellSize}
                        border={calculateBorder(x, y)}
                        thickness={5}
                        />
                    ))}
        </div>
    )
}

export default Highlights