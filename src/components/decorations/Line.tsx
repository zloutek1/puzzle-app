import styled from "styled-components"
import { Line as LineType, PalindromeLine as PalindromeLineType, RenbanLine as RenbanLineType } from "../../types/decorations/line"
import { BoardContext, Color, Point } from "../../types/general"
import { line, zip } from "../../utils"

type StyledProps = {
    x: number
    y: number
    length: number

    angle: number
    thickness: number
    color: Color

    cellSize: number
}

type ContextProp = {
     context: BoardContext
}

type Props = LineType & ContextProp & {
    className: string
}

const StyledRenbanLine = styled.div<StyledProps>`
    height: ${({ thickness }) => thickness}px;
    background-color: ${({ color }) => color};
    line-height: 1px;

    position: absolute;
    top: calc(${({ y, cellSize }) => `${y} * ${cellSize}px`});
    left: calc(${({ x, cellSize }) => `${x} * ${cellSize}px`});
    width: calc(${({ length, cellSize }) => `${length} * ${cellSize}px`});

    ${({ angle }) => `
        -moz-transform: rotate(${angle}deg);
        -webkit-transform: rotate(${angle}deg);
        -o-transform: rotate(${angle}deg);
        -ms-transform: rotate(${angle}deg);
        transform: rotate(${angle}deg);'
    `}
`

export const Line = ({ className, color, cells, thickness, context }: Props) => {
    color = color ?? "gray"

    const centers = cells.map(([x, y]) => [x + 0.5, y + 0.5])

    const lineSegments: JSX.Element[] = []
    for (const [a, b] of zip(centers, centers.slice(1))) {
        const [x, y, length, angle] = line(a as Point, b as Point)

        lineSegments.push(
            <StyledRenbanLine
                key={`Line ${a}-${b}`}
                x={x}
                y={y}
                length={length}
                angle={angle}
                thickness={thickness}
                color={color}
                cellSize={context.cellSize}
            />
        )
    }

    return <div className={className}>{lineSegments}</div>
}

export const RenbanLine = (props: RenbanLineType & ContextProp) => (
    <Line className="RenbanLine" {...props} />
)

export const RenbanLines = ({ renbanLines, context }: { renbanLines: RenbanLineType[] } & ContextProp) => (
    <div className="RenbanLines">
        {renbanLines.map((renbanLine, i) =>
            <RenbanLine  key={`Renban-${i}`} {...renbanLine} context={context} />
        )}
    </div>
)

export const PalindromeLine = (props: PalindromeLineType & ContextProp) => (
    <Line className="PalindromeLine" {...props} />
)

export const Palindromes = ({ palindromes, context }: { palindromes: PalindromeLineType[] } & ContextProp) => (
    <div className="PalindromeLines">
        {palindromes.map((palindrome, i) =>
            <PalindromeLine  key={`Palindrome-${i}`} {...palindrome} context={context} />
        )}
    </div>
)