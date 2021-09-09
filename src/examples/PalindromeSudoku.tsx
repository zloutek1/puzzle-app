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

    rules?: () => boolean
}

const PalindromeSudoku = ({ type, rows, columns, values, palindromeLines, decorations, rules }: Props) => {
    const palindromeRules = () => false

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
            rules={() => palindromeRules() && (!rules || rules())}
        />
    )
}

export default PalindromeSudoku
