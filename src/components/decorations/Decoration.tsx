import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region"
import { PalindromeLine, RenbanLine, SudokuXLine as SudokuXLineType } from "../../types/decorations/line"
import { Decoration as DecorationType } from "../../types/decorations"
import { Kropki as KropkiType, Sojuko as SojukoType, XV as XVType } from "../../types/decorations/between"
import SudokuRegion from "./SudokuRegion"
import Kropki from "./Kropki"
import XV from "./XV"
import Sojuko from "./Sojuko"
import SudokuXLine from "./SudokuX"
import Line from "./Line"

type Props = {
    decoration: DecorationType
}

const Decoration = ({ decoration }: Props) => {
    switch (decoration.type) {
        case "SudokuRegion": return <SudokuRegion {...decoration as SudokuRegionType} />
        case "Kropki": return <Kropki {...decoration as KropkiType} />
        case "XV": return <XV {...decoration as XVType} />
        case "Sojuko": return <Sojuko {...decoration as SojukoType} />
        case "Renban": return <Line className={"RenbanLine"} {...decoration as RenbanLine} />
        case "Palindrome": return <Line className={"PalindromeLine"} {...decoration as PalindromeLine} />
        case "SudokuX": return <SudokuXLine {...decoration as SudokuXLineType} />
        default: return <div />
    }
}

export default Decoration
