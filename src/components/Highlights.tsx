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
    position: absolute;
    top: calc(${({y, cellSize}) => `${y} * ${cellSize}px`});
    left: calc(${({x, cellSize}) => `${x} * ${cellSize}px`});
    width: ${({cellSize}) => cellSize}px;
    height: ${({cellSize}) => cellSize}px;

    box-shadow:
        ${({ border: { top },           color, thickness }) =>
            top             ? `0 ${thickness}px 0 0 ${color ?? "#4895ef"} inset`        : `0 0 0 0 ${color ?? "#000000"} inset`},

        ${({ border: { bottom },        color, thickness }) =>
            bottom          ? `0 ${thickness}px 0 0 ${color ?? "#4895ef"}`              : `0 0 0 0 ${color ?? "#000000"}`},

        ${({ border: { bottom, right }, color, thickness }) =>
            bottom && right ? `${thickness}px ${thickness}px 0 0 ${color ?? "#4895ef"}` : `0 0 0 0 ${color ?? "#000000"}`}, // fix corner

        ${({ border: { left },          color, thickness }) =>
            left            ? `${thickness}px 0 0 0 ${color ?? "#4895ef"} inset`        : `0 0 0 0 ${color ?? "#000000"} inset`},

        ${({ border: { right },         color, thickness }) =>
            right           ? `${thickness}px 0 0 0 ${color ?? "#4895ef"}`              : `0 0 0 0 ${color ?? "#000000"}`};
`

type Props = {
    highlightedCells: Point[]
}

const Highlights = ({ highlightedCells }: Props) => {
    const { cellSize } = useContext(BoardContext);

    const calculateBorder = (x: number, y: number) => {
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
            {highlightedCells.map(([x, y]) => (
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