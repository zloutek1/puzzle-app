import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region"
import { RenbanLine as RenbanLineType, SudokuXLine as SudokuXLineType } from "../../types/decorations/line"
import { Decoration as DecorationType } from "../../types/decorations"
import { Kropki as KropkiType, Sojuko as SojukoType, XV as XVType } from "../../types/decorations/between"
import SudokuRegion from "./SudokuRegion"
import Kropki from "./Kropki"
import XV from "./XV"
import Sojuko from "./Sojuko"
import RenbanLine from "./RenbanLine"
import SudokuXLine from "./SudokuX"

type Props = {
    decoration: DecorationType
}

const Decoration = ({ decoration }: Props) => {
    switch (decoration.type) {
        case "SudokuRegion": return <SudokuRegion {...decoration as SudokuRegionType} />
        case "Kropki": return <Kropki {...decoration as KropkiType} />
        case "XV": return <XV {...decoration as XVType} />
        case "Sojuko": return <Sojuko {...decoration as SojukoType} />
        case "Renban": return <RenbanLine {...decoration as RenbanLineType} />
        case "SudokuX": return <SudokuXLine {...decoration as SudokuXLineType} />
        default: return <div />
    }
}

export default Decoration
