import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region"
import { Decoration as DecorationType } from "../../types/decorations"
import SudokuRegion from "./SudokuRegion"
import { Kropki as KropkiType } from "../../types/decorations/between"
import Kropki from "./Kropki"

type Props = {
    decoration: DecorationType
}

const Decoration = ({ decoration }: Props) => {
    switch (decoration.type) {
        case "SudokuRegion": return <SudokuRegion {...decoration as SudokuRegionType} />
        case "Kropki": return <Kropki {...decoration as KropkiType} />
        default: return <div />
    }
}

export default Decoration
