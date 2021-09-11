import { useContext } from "react"
import styled from "styled-components"
import { Fortress as FortressType } from "../../types/decorations/shape"
import { Color, Dimensions } from "../../types/general"
import { equals } from "../../utils"
import { Context as BoardContext } from "../Game"

type StyledProps = {
    x: number
    y: number
    dimensions: Dimensions
    color: Color
    cellSize: number
}


const StyledFortress = styled.div<StyledProps>`
    position: absolute;
    top:  calc(${({y, cellSize, dimensions: { height }}) => `${y} * ${cellSize}px + ${(cellSize - height) / 2}px`});
    left: calc(${({x, cellSize, dimensions: { width  }}) => `${x} * ${cellSize}px + ${(cellSize - width ) / 2}px`});
    width:  ${({dimensions: { width }}) => width}px;
    height: ${({dimensions: { height }}) => height}px;

    background-color: ${({color}) => color};
    z-index: -10;

    display: grid;
    grid-template-areas:
        "top-left    top    top-right"
        "left        center right"
        "bottom-left bottom bottom-right";
    grid-template-columns: repeat(3, ${({cellSize}) => cellSize / 3})px;
    grid-template-rows: repeat(3, ${({cellSize}) => cellSize / 3}px);
    justify-items: center;
    align-items: center;
`

const StyledArrow = styled.div`
    min-width: 0;
    min-height: 0;

    &.top    { grid-area: top;    transform: rotate(90deg);  }
    &.bottom { grid-area: bottom; transform: rotate(-90deg);  }
    &.left   { grid-area: left;   transform: rotate(0deg);  }
    &.right  { grid-area: right;  transform: rotate(180deg);  }
`

type Props = {
    neighbours: {
        top: boolean,
        bottom: boolean,
        left: boolean,
        right: boolean
    }
}

export const Fortress = ({ coords, dimensions, inequality, color, neighbours }: FortressType & Props) => {
    const { cellSize } = useContext(BoardContext);
    color = color ?? "gray"

    return (
        <StyledFortress
            className="Fortress"
            x={coords[0]}
            y={coords[1]}
            dimensions={dimensions}
            color={color}
            cellSize={cellSize}
        >
            {neighbours.top && <StyledArrow className="top">{inequality}</StyledArrow>}
            {neighbours.bottom && <StyledArrow className="bottom">{inequality}</StyledArrow>}
            {neighbours.left && <StyledArrow className="left">{inequality}</StyledArrow>}
            {neighbours.right && <StyledArrow className="right">{inequality}</StyledArrow>}
        </StyledFortress>
    )
}

export const Fortresses = ({ fortresses }: { fortresses: FortressType[] }) => {
    const rows = 9;
    const columns = 9;

    const calculateNeighbours = (x: number, y: number) => {
        const isUp = fortresses.find((fort) => equals(fort.coords, [x, y - 1]))
        const isDown = fortresses.find((fort) => equals(fort.coords, [x, y + 1]))
        const isLeft = fortresses.find((fort) => equals(fort.coords, [x - 1, y]))
        const isRight = fortresses.find((fort) => equals(fort.coords, [x + 1, y]))

        return {
            top: isUp === undefined && y > 0,
            bottom: isDown === undefined && y < rows - 1,
            left: isLeft === undefined && x > 0,
            right: isRight === undefined && x < columns - 1,
        }
    }

    return (
        <div className="Fortresses">
            {fortresses.map((fortress, i) => (
                <Fortress
                    key={`fortress-${i}`}
                    {...fortress}
                    neighbours={calculateNeighbours(...fortress.coords)}
                />
            ))}
        </div>
    )
}