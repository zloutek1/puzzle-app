import { DecorationType } from "../types/decorations"
import { XV as XVType } from "../types/decorations/between"
import Sudoku from "./Sudoku"

type Props = {
    type?: string
    rows?: number
    columns?: number
    values?: (number | null)[][]
    decorations?: DecorationType[]
    xvs: XVType[]
}

const XV = ({ type, rows, columns, values, xvs, decorations }: Props) => {
    return (
        <Sudoku
            type={type ?? "XV Sudoku"}
            rows={rows}
            columns={columns}
            values={values}
            decorations={(xvs as DecorationType[]).concat(decorations ?? [])}
        />
    )
}

export default XV
