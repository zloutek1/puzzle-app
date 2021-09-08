import styled from "styled-components"
import { Decorations as DecorationsType } from "../types/decorations"
import { BoardContext } from "../types/general"
import { EvenOdds } from "./decorations/EvenOdd"
import { Fortresses } from "./decorations/Fortresses"
import { Kropkis } from "./decorations/Kropki"
import { Palindromes, RenbanLines } from "./decorations/Line"
import { Nonograms } from "./decorations/Nonogram"
import { Skyscrapers } from "./decorations/Skyscraper"
import { Sojukos } from "./decorations/Sojuko"
import { SudokuRegions } from "./decorations/SudokuRegion"
import { SudokuXs } from "./decorations/SudokuX"
import { XVs } from "./decorations/XV"

type StyledProps = {}

type Props = {
    decorations: DecorationsType
    context: BoardContext
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
        fortresses,
        evenOdds,
        skyscrapers,
        nonograms
    },
    context
}: Props) => {
    return (
        <StyledDecorations className="Decorations">
            {sudokuRegions && <SudokuRegions sudokuRegions={sudokuRegions} context={context} />}
            {kropkis &&       <Kropkis kropkis={kropkis} context={context} />}
            {xvs &&           <XVs xvs={xvs} context={context} />}
            {sojukos &&       <Sojukos sojukos={sojukos} context={context} />}
            {renbanLines &&   <RenbanLines renbanLines={renbanLines} context={context} />}
            {sudokuXs &&      <SudokuXs sudokuXs={sudokuXs} context={context} />}
            {palindromes &&   <Palindromes palindromes={palindromes} context={context} />}
            {fortresses &&    <Fortresses fortresses={fortresses} context={context} />}
            {evenOdds &&      <EvenOdds evenOdds={evenOdds} context={context} />}
            {skyscrapers &&   <Skyscrapers skyscrapers={skyscrapers} context={context} />}
            {nonograms &&     <Nonograms nonograms={nonograms} context={context} />}
        </StyledDecorations>
    )
}

export default Decorations
