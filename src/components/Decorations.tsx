import styled from "styled-components"
import { Decorations as DecorationsType } from "../types/decorations"
import { Kropkis } from "./decorations/Kropki"
import { Palindromes, RenbanLines } from "./decorations/Line"
import { Sojukos } from "./decorations/Sojuko"
import { SudokuRegions } from "./decorations/SudokuRegion"
import { SudokuXs } from "./decorations/SudokuX"
import { XVs } from "./decorations/XV"

type StyledProps = {}

type Props = {
    decorations: DecorationsType
}

const StyledDecorations = styled.div<StyledProps>`
    * {
        pointer-events: none;
    }
`

const Decorations = ({
    decorations: {
        sudokuRegions,
        kropkis,
        xvs,
        sojukos,
        renbanLines,
        palindromes,
        sudokuXs,
    },
}: Props) => {
    return (
        <StyledDecorations className="Decorations">
            {sudokuRegions && <SudokuRegions sudokuRegions={sudokuRegions} />}
            {kropkis && <Kropkis kropkis={kropkis} />}
            {xvs && <XVs xvs={xvs} />}
            {sojukos && <Sojukos sojukos={sojukos} />}
            {renbanLines && <RenbanLines renbanLines={renbanLines} />}
            {sudokuXs && <SudokuXs sudokuXs={sudokuXs} />}
            {palindromes && <Palindromes palindromes={palindromes} />}
        </StyledDecorations>
    )
}

export default Decorations
