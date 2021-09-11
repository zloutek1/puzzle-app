import { useContext } from "react"
import styled from "styled-components"
import { KillerCage as KillerCageType } from "../../types/decorations/region"
import { equals } from "../../utils"
import { Context as BoardContext } from "../Game"

type StyledProps = {
    x: number
    y: number
    cellSize: number
    thickness: number

    offset: {
        top: number,
        bottom: number,
        left: number,
        right: number
    }

    border: {
        top: boolean
        bottom: boolean
        left: boolean
        right: boolean
    }
}

const StyledBorder = styled.div<StyledProps>`
    position: absolute;
    top: calc(${({y, cellSize, offset: {top}}) => `${y * cellSize}px + ${top}px`});
    left: calc(${({x, cellSize, offset: {left}}) => `${x * cellSize}px + ${left}px`});
    width: ${({cellSize, offset: {left, right}}) => cellSize - left - right}px;
    height: ${({cellSize, offset: {top, bottom}}) => cellSize - top - bottom}px;

    border-top:
        ${({ border: { top },   color, thickness }) =>
            top             ? `${thickness}px dashed ${color ?? "#000000"}` : `none`};
    border-bottom:
        ${({ border: { bottom },color, thickness }) =>
            bottom          ? `${thickness}px dashed ${color ?? "#000000"}` : `none`};
    border-left:
        ${({ border: { left },  color, thickness }) =>
            left            ? `${thickness}px dashed ${color ?? "#000000"}` : `none`};
    border-right:
        ${({ border: { right }, color, thickness }) =>
            right           ? `${thickness}px dashed ${color ?? "#000000"}` : `none`};
`

type TargetProps = {
    x: number,
    y: number,
    cellSize: number
}

const StyledTarget = styled.div<TargetProps>`
    position: absolute;
    top: calc(${({y, cellSize}) => `${y} * ${cellSize}px + 3px`});
    left: calc(${({x, cellSize}) => `${x} * ${cellSize}px + 3px`});
    background-color: #FFFFFF;
`

export const KillerCage = ({ cells, target }: KillerCageType) => {
    const { cellSize } = useContext(BoardContext);

    const calculateBorder = (x: number, y: number) => {
        const isUp = cells.find((cell) => equals(cell, [x, y - 1]))
        const isDown = cells.find((cell) => equals(cell, [x, y + 1]))
        const isLeft = cells.find((cell) => equals(cell, [x - 1, y]))
        const isRight = cells.find((cell) => equals(cell, [x + 1, y]))

        return {
            top: isUp === undefined,
            bottom: isDown === undefined,
            left: isLeft === undefined,
            right: isRight === undefined,
        }
    }

    const calculateOffset = (border: any) => {
        return {
            top: border.top ? 5 : 0,
            bottom: border.bottom ? 5 : 0,
            left: border.left ? 5 : 0,
            right: border.right ? 5 : 0
        }
    }

    const getTargetCoords = () => {
        let min = cells[0]
        for (let [x, y] of cells) {
            if (x < min[0] && y <= min[1]) {
                min = [x, y]
            }
        }
        return min
    }
    const [targetX, targetY] = getTargetCoords()

    return (
        <div className="KillerCage">
            {cells.map(([x, y]) => {
                const border = calculateBorder(x, y)
                return (
                    <StyledBorder
                        key={`killerCage-${x}-${y}`}
                        x={x}
                        y={y}
                        cellSize={cellSize}
                        thickness={2}
                        offset={calculateOffset(border)}
                        border={border}
                    />
                )
            })}
            <StyledTarget x={targetX} y={targetY} cellSize={cellSize}>
                {target}
            </StyledTarget>
        </div>
    )
}

export const KillerCages = ({ killerCages }: { killerCages: KillerCageType[] }) => (
    <div className="KillerCages">
        {killerCages.map((region, i) =>
            <KillerCage key={`Region-${i}`} {...region} />
        )}
    </div>
)
