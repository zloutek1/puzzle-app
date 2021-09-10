import { useState } from "react";
import { Point } from "../types/general";
import { equals } from "../utils";

const useHighlight = (defaultValue: Point[] = []) => {
    const [highlightedCells, setHighlightedCells] = useState(defaultValue);

    const highlightCell = (x: number, y: number) => {
        const present = highlightedCells.findIndex((point) => equals(point, [x, y]))
        if (present === -1)
            setHighlightedCells([...highlightedCells, [x, y]])
    }

    const unhighlightCell = (x: number, y: number) => {
        const index = highlightedCells.findIndex((point) =>
            equals(point, [x, y])
        )

        if (index === -1)
            setHighlightedCells([
                ...highlightedCells.slice(0, index),
                ...highlightedCells.slice(index + 1, highlightedCells.length - 1),
            ])
    }

    return { highlightedCells, highlightCell, unhighlightCell, setHighlightedCells }
}

export default useHighlight