import styled from "styled-components"
import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region"
import { equals } from "../../utils"

type StyledProps = {
    x: number
    y: number
    border: {
        top: boolean
        bottom: boolean
        left: boolean
        right: boolean
    }
}

const StyledBorder = styled.div<StyledProps>`
    position: absolute;
    top: calc(${({y}) => y} * 50px);
    left: calc(${({x}) => x} * 50px);
    width: 50px;
    height: 50px;

    box-sizing: border-box;
    ${({ border: { top } }) => top ? 'border-top: 5px solid #000000;' : ''}
    ${({ border: { bottom } }) => bottom ? 'border-bottom: 5px solid #000000;' : ''}
    ${({ border: { left } }) => left ? 'border-left: 5px solid #000000;' : ''}
    ${({ border: { right } }) => right ? 'border-right: 5px solid #000000;' : ''}
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
                <StyledBorder key={`region-${x}-${y}`} x={x} y={y} border={calculateBorder(x, y)} />
            ))}
        </div>
    )
}

export default SudokuRegion
