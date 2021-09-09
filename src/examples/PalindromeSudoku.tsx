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

    rules?: string[]
}

const PalindromeSudoku = ({ type, rows, columns, values, palindromeLines, decorations, rules }: Props) => {
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
            rules={[...rules ?? [], "palindrome"]}
        />
    )
}

export default PalindromeSudoku
