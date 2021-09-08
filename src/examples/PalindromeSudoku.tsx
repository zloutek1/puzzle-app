import { Decorations } from "../types/decorations"
import { PalindromeLine } from "../types/decorations/line"
import Sudoku from "./Sudoku"

type Props = {
    type?: string

    rows?: number
    columns?: number
    values?: (number | null)[][]

    palindromeLines: PalindromeLine[]
    decorations?: Decorations
}

const PalindromeSudoku = ({ type, rows, columns, values, palindromeLines, decorations }: Props) => {
    return (
        <Sudoku
            type={type ?? "Palindrome Sudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={{
                palindromes: palindromeLines,
                ...(decorations ?? {})
            }}
        />
    )
}

export default PalindromeSudoku
