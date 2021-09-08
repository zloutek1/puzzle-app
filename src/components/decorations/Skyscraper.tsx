import styled from "styled-components"
import { Skyscraper as SkyscraperType } from "../../types/decorations/side"

type StyledProps = {
    x: number
    y: number

    cellSize: number
    width: number
    height: number
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
    const width=5
    const height=5

    let x, y
    switch (orientation) {
        case "up":
            x = position
            y = -1
            break
        case "right":
            x = width
            y = position
            break
        case "down":
            x = width - position  - 1
            y = height
            break
        case "left":
            x = -1
            y = height - position - 1
            break
    }

    return (
        <StyledSkyscraper
            className="Skyscraper"
            x={x}
            y={y}

            cellSize={50}
            width={width}
            height={height}
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