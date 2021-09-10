import styled from "styled-components"
import { Decorations as DecorationsType } from "../types/decorations"
import { EvenOdds } from "./decorations/EvenOdd"
import { Fortresses } from "./decorations/Fortresses"
import { KillerCages } from "./decorations/KillerCage"
import { Kropkis } from "./decorations/Kropki"
import { Palindromes, RenbanLines } from "./decorations/Line"
import { LittleKillers } from "./decorations/LittleKiller"
import { Nonograms } from "./decorations/Nonogram"
import { Skyscrapers } from "./decorations/Skyscraper"
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
        fortresses,
        evenOdds,
        skyscrapers,
        nonograms,
        littleKillers,
        killerCages
    }
}: Props) => {
    return (
        <StyledDecorations className="Decorations">
            {sudokuRegions && <SudokuRegions sudokuRegions={sudokuRegions} />}
            {kropkis &&       <Kropkis kropkis={kropkis} />}
            {xvs &&           <XVs xvs={xvs} />}
            {sojukos &&       <Sojukos sojukos={sojukos} />}
            {renbanLines &&   <RenbanLines renbanLines={renbanLines} />}
            {sudokuXs &&      <SudokuXs sudokuXs={sudokuXs} />}
            {palindromes &&   <Palindromes palindromes={palindromes} />}
            {fortresses &&    <Fortresses fortresses={fortresses} />}
            {evenOdds &&      <EvenOdds evenOdds={evenOdds} />}
            {skyscrapers &&   <Skyscrapers skyscrapers={skyscrapers} />}
            {nonograms &&     <Nonograms nonograms={nonograms} />}
            {littleKillers && <LittleKillers littleKillers={littleKillers} />}
            {killerCages &&   <KillerCages killerCages={killerCages} />}
        </StyledDecorations>
    )
}

export default Decorations
