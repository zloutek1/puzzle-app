import styled from "styled-components"
import { Skyscraper as SkyscraperType } from "../../types/decorations/side"
import { BoardContext } from "../../types/general"

type StyledProps = {
    x: number
    y: number

    context: BoardContext
}


const StyledSkyscraper = styled.div<StyledProps>`
    position: absolute;
    top:  calc(${({y, context: {cellSize}}) => `${y} * ${cellSize}px`});
    left: calc(${({x, context: {cellSize}}) => `${x} * ${cellSize}px`});
    width:  ${({context: {cellSize}}) => cellSize}px;
    height: ${({context: {cellSize}}) => cellSize}px;

    display: flex;
    justify-content: center;
    align-items: center;
`

type Props = {
    context: BoardContext
}

export const Skyscraper = ({ value, position, orientation, context }: SkyscraperType & Props) => {
    const { boardRows, boardColumns } = context;

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

            context={context}
        >
            {value}
        </StyledSkyscraper>
    )
}

export const Skyscrapers = ({ skyscrapers, context }: { skyscrapers: SkyscraperType[] } & Props) => (
    <div className="Skyscrapers">
        {skyscrapers.map((skyscraper, i) => (
            <Skyscraper key={`Skyscraper-${i}`} {...skyscraper} context={context} />
        ))}
    </div>
)