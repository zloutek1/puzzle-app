import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region"
import { Decoration as DecorationType } from "../../types/decorations"
import SudokuRegion from "./SudokuRegion"
import { Kropki as KropkiType, XV as XVType } from "../../types/decorations/between"
import Kropki from "./Kropki"
import XV from "./XV"

type Props = {
    decoration: DecorationType
}

const Decoration = ({ decoration }: Props) => {
    switch (decoration.type) {
        case "SudokuRegion": return <SudokuRegion {...decoration as SudokuRegionType} />
        case "Kropki": return <Kropki {...decoration as KropkiType} />
        case "XV": return <XV {...decoration as XVType} />
        default: return <div />
    }
}

export default Decoration
