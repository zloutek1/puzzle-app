import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region"
import { Decoration as DecorationType } from "../../types/decorations"
import SudokuRegion from "./SudokuRegion"

type Props = {
    decoration: DecorationType
}

const Decoration = ({ decoration }: Props) => {
    switch (decoration.type) {
        case "SudokuRegion": return <SudokuRegion {...decoration as SudokuRegionType} />
        default: return <div />
    }
}

export default Decoration
