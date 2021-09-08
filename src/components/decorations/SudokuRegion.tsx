import { SudokuRegion as SudokuRegionType } from "../../types/decorations/region";

const SudokuRegion = ({cells}: SudokuRegionType) => {
    return <div className="SudokuRegion">
        {cells.map(([x, y]) => <div key={`region-${x}-${y}`}/>)}
    </div>
}

export default SudokuRegion