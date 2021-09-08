import styled from "styled-components"
import { Kropki as KropkiType } from "../../types/decorations/between"
import { BoardContext, Color, Dimensions } from "../../types/general"

type StyledProps = {
    x: number
    y: number
    dimensions: Dimensions
    color: Color
    cellSize: number
}

const StyledKropki = styled.div<StyledProps>`
    position: absolute;
    top: calc(${({ y, dimensions: {height}, cellSize }) => `${y} * ${cellSize}px + ${cellSize}px / 2 - ${height}px / 2`});
    left: calc(${({ x, dimensions: {width}, cellSize }) => `${x} * ${cellSize}px + ${cellSize}px / 2 - ${width}px / 2`});
    width: ${({ dimensions: { width } }) => width}px;
    height: ${({ dimensions: { height } }) => height}px;

    border-radius: 100%;
    border: 1px solid black;
    background-color: ${({ color }) => color};
`

type Props = {
    context: BoardContext
}

export const Kropki = ({ between, dimensions, color, context }: KropkiType & Props) => {
    const [[x0, y0], [x1, y1]] = between
    const x = x0 + (x1 - x0) / 2
    const y = y0 + (y1 - y0) / 2

    return <StyledKropki x={x} y={y} dimensions={dimensions} color={color} cellSize={context.cellSize} />
}

export const Kropkis = ({ kropkis, context }: { kropkis: KropkiType[] } & Props) => (
    <div className="Kropkis">
        {kropkis.map((kropki, i) =>
            <Kropki key={`Kropki-${i}`} {...kropki} context={context} />
        )}
    </div>
)