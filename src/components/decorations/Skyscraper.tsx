import { useContext } from "react"
import styled from "styled-components"
import { Skyscraper as SkyscraperType } from "../../types/decorations/side"
import { Context as BoardContext } from "../Game"

type StyledProps = {
    x: number
    y: number

    cellSize: number
}


const StyledSkyscraper = styled.div<StyledProps>`
    position: absolute;
    top:  calc(${({y, cellSize}) => `${y} * ${cellSize}px`});
    left: calc(${({x, cellSize}) => `${x} * ${cellSize}px`});
    width:  ${({cellSize}) => cellSize}px;
    height: ${({cellSize}) => cellSize}px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Skyscraper = ({ value, position, orientation }: SkyscraperType) => {
    const { boardRows, boardColumns, cellSize } = useContext(BoardContext);

    const getCoords = (orientation: "up" | "down"| "left" | "right") => {
        switch (orientation) {
            case "up": return [position, -1]
            case "right": return [boardColumns, position]
            case "down": return [boardColumns - position  - 1, boardRows]
            case "left": return [-1, boardRows - position - 1]
        }
    }
    const [x, y] = getCoords(orientation)

    return (
        <StyledSkyscraper
            className="Skyscraper"
            x={x}
            y={y}

            cellSize={cellSize}
        >
            {value}
        </StyledSkyscraper>
    )
}

export const Skyscrapers = ({ skyscrapers }: { skyscrapers: SkyscraperType[] }) => (
    <div className="Skyscrapers">
        {skyscrapers.map((skyscraper, i) => (
            <Skyscraper key={`Skyscraper-${i}`} {...skyscraper} />
        ))}
    </div>
)