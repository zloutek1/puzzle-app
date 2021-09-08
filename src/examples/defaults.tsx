export const genEmptyCells = (rows: number, columns: number) =>
    Array.from(Array(rows), (y: number) =>
        Array.from(Array(columns), (x: number) => ({
            x,
            y,
            value: null,
            highlight: "",
            editable: true,
        }))
    )

export const genCellsFromGiven = <T,>(rows: number, columns: number, values: T[][]) =>
    values.map((row, y) =>
        row.map((value, x) => ({
            x,
            y,
            value,
            highlight: "",
            editable: true
        }))
    )