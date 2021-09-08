import styled from "styled-components"
import { EvenOdd as EvenOddType } from "../../types/decorations/shape"
import { Color, Dimensions } from "../../types/general"

type StyledProps = {
    x: number
    y: number
    parity: "even" | "odd"

    dimensions: Dimensions
    color: Color
    cellSize: number
}


const StyledEvenOdd = styled.div<StyledProps>`
    position: absolute;
    top:  calc(${({y, cellSize, dimensions: { height }}) => `${y} * ${cellSize}px + ${(cellSize - height) / 2}px`});
    left: calc(${({x, cellSize, dimensions: { width  }}) => `${x} * ${cellSize}px + ${(cellSize - width ) / 2}px`});
    width:  ${({dimensions: { width }}) => width}px;
    height: ${({dimensions: { height }}) => height}px;

    background-color: ${({color}) => color};
    z-index: -10;

    ${({parity}) => parity === "odd" && "border-radius: 100%;"}
`

export const EvenOdd = ({ coords, dimensions, parity, color }: EvenOddType) => {
    color = color ?? "lightgray"

    return (
        <StyledEvenOdd
            className="EvenOdd"
            x={coords[0]}
            y={coords[1]}
            dimensions={dimensions}
            color={color}
            cellSize={50}
            parity={parity}
        />
    )
}

export const EvenOdds = ({ evenOdds }: { evenOdds: EvenOddType[] }) => (
    <div className="EvenOdds">
        {evenOdds.map((evenOdd, i) => (
            <EvenOdd key={`EvenOdd-${i}`} {...evenOdd} />
        ))}
    </div>
)