import { useContext } from "react"
import styled from "styled-components"
import { Nonogram as NonogramType } from "../../types/decorations/side"
import { BoardContext as BoardContextType } from "../../types/general"
import { Context as BoardContext } from "../Game"

type StyledProps = {
    x: number
    y: number
    orientation: "up" | "left"
    valueCount: number

    context: BoardContextType
}


const StyledNonogram = styled.div<StyledProps>`
    position: absolute;
    top:  calc(${({y, context: {cellSize}, orientation, valueCount}) => `${y} * ${cellSize}px ${(orientation === "up") ? `- ${valueCount} * 1.25rem` : ''}`});
    left: calc(${({x, context: {cellSize}, orientation, valueCount}) => `${x} * ${cellSize}px ${(orientation === "left") ? `- ${valueCount} * 1.25rem`: ''}`});

    ${({orientation, context: {cellSize}, valueCount}) => orientation === "up" ? `
        width:  ${cellSize}px;
        height: calc(${valueCount} * 1.25rem);

        flex-flow: column;

        div {
            width:  ${cellSize}px;
            height: 1.25rem;
        }
    ` : `
        width:  calc(${valueCount} * 1.25rem);
        height: ${cellSize}px;

        flex-flow: row;

        div {
            width:  1.25rem;
            height: ${cellSize}px;
        }
    `}

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Nonogram = ({ values, position, orientation }: NonogramType) => {
    const context = useContext(BoardContext)

    const getCoords = (orientation: "up" | "left") => {
        switch (orientation) {
            case "up": return [position, 0]
            case "left": return [0, position]
        }
    }
    const [x, y] = getCoords(orientation)

    return (
        <StyledNonogram
            className="Nonogram"
            x={x}
            y={y}
            orientation={orientation}
            context={context}
            valueCount={values.length}
        >
            {values.map((value, i) => <div key={`NonoVal-${i}`}>{value}</div>)}
        </StyledNonogram>
    )
}

export const Nonograms = ({ nonograms }: { nonograms: NonogramType[] }) => (
    <div className="Nonograms">
        {nonograms.map((nonogram, i) => (
            <Nonogram key={`Nonogram-${i}`} {...nonogram} />
        ))}
    </div>
)