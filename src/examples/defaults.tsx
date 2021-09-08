export const genEmptyCells = (rows: number, columns: number) =>
    Array.from(Array(rows), (y: number) =>
        Array.from(Array(columns), (x: number) => ({
            x,
            y,
            value: 1,
            highlight: "",
            editable: true,
        }))
    )
