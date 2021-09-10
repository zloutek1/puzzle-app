import { useContext } from "react"
import styled from "styled-components"
import { LittleKiller as LittleKillerType } from "../../types/decorations/side"
import { BoardContext as BoardContextType } from "../../types/general"
import { Context as BoardContext } from "../Board"

type StyledProps = {
    x: number
    y: number
    orientation: "up" | "down" | "left" | "right"

    context: BoardContextType
}


const StyledLittleKiller = styled.div<StyledProps>`
    position: absolute;
    top:  calc(${({y, context: {cellSize}}) => `${y} * ${cellSize}px`});
    left: calc(${({x, context: {cellSize}}) => `${x} * ${cellSize}px`});
    width:  ${({context: {cellSize}}) => cellSize}px;
    height: ${({context: {cellSize}}) => cellSize}px;

    display: grid;

    ${({orientation}) =>
        orientation === "up" ? `
            grid-template-areas: ". value" "arrow .";
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 1fr 2fr;
        ` :
        orientation === "right" ? `
            grid-template-areas: "arrow ." ". value";
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 2fr 1fr;
        ` :
        orientation === "down" ? `
            grid-template-areas: ". arrow" "value .";
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 2fr 1fr;
        `  :
        orientation === "left" ? `
            grid-template-areas: "value ." ". arrow";
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 1fr 2fr;
        ` :
        ""
    };

    align-items: center;
    justify-items: center;
`

type ArrowProps = {
    orientation: "up" | "down" | "left" | "right"
}

const StyledArrow = styled.div<ArrowProps>`
    grid-area: arrow;

    background: #000;
    height: 3px;
    width: 20px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;

    ${({orientation}) =>
        orientation === "up" ? "transform: rotate(135deg);" :
        orientation === "right" ? "transform: rotate(-135deg);" :
        orientation === "down" ? "transform: rotate(-45deg);" :
        orientation === "left" ? "transform: rotate(45deg);" :
        ""
    }

    &:before,
    &:after {
        content: "";
        background: #000;
        position: absolute;
        height: 3px;
        width: 13px;
    }

    &:before {
        right: -5px;
        bottom: -4px;
        transform: rotate(-45deg);
    }

    &:after {
        right: -5px;
        top: -3px;
        transform: rotate(45deg);
    }

`

export const LittleKiller = ({ value, position, orientation }: LittleKillerType) => {
    const context = useContext(BoardContext)
    const { boardRows, boardColumns } = context;

    const getCoords = (orientation: "up" | "down"| "left" | "right") => {
        switch (orientation) {
            case "up": return [position + 1, -1]
            case "right": return [boardColumns, position + 1]
            case "down": return [boardColumns - position  - 1 - 1, boardRows]
            case "left": return [-1, boardRows - position - 1 - 1]
        }
    }
    const [x, y] = getCoords(orientation)

    return (
        <StyledLittleKiller
            className="LittleKiller"
            x={x}
            y={y}
            orientation={orientation}

            context={context}
        >
            <div style={{gridArea: "value"}}>{value}</div>
            <StyledArrow orientation={orientation} />
        </StyledLittleKiller>
    )
}

export const LittleKillers = ({ littleKillers }: { littleKillers: LittleKillerType[] }) => (
    <div className="LittleKillers">
        {littleKillers.map((littleKiller, i) => (
            <LittleKiller key={`LittleKiller-${i}`} {...littleKiller} />
        ))}
    </div>
)