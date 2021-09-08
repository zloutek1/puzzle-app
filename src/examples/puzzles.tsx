import Kropki from "./Kropki";
import PalindromeSudoku from "./PalindromeSudoku";
import RenbanSudoku from "./RenbanLine";
import Sojuko from "./Sojuko";
import Sudoku from "./Sudoku";
import SudokuX from "./SudokuX";
import XV from "./XVSudoku";

export const puzzles = [
    <Sudoku values={[
        [   5,    3, null,  null,    7, null,  null, null, null],
        [   6, null, null,     1,    9,    5,  null, null, null],
        [null,    9,    8,  null, null, null,  null,    6, null],

        [   8, null, null,  null,    6, null,  null, null,    3],
        [   4, null, null,     8, null,    3,  null, null,    1],
        [   7, null, null,  null,    2, null,  null, null,    6],

        [null,    6, null,  null, null, null,     2,    8, null],
        [null, null, null,      4,    1,    9,  null, null,   5],
        [null, null, null,  null,    8, null,  null,    7,    9]
    ]} />,

    <Kropki rows={4} columns={4} kropkiDots={[
        {type: "Kropki", between: [[0,0], [1,0]], dimensions: {width: 10, height: 10}, color: "black"},
        {type: "Kropki", between: [[2,0], [3,0]], dimensions: {width: 10, height: 10}, color: "white"},

        {type: "Kropki", between: [[0,0], [0,1]], dimensions: {width: 10, height: 10}, color: "white"},
        {type: "Kropki", between: [[2,0], [2,1]], dimensions: {width: 10, height: 10}, color: "white"},

        {type: "Kropki", between: [[0,1], [1,1]], dimensions: {width: 10, height: 10}, color: "white"},
        {type: "Kropki", between: [[1,1], [2,1]], dimensions: {width: 10, height: 10}, color: "black"},
        {type: "Kropki", between: [[2,1], [3,1]], dimensions: {width: 10, height: 10}, color: "black"},

        {type: "Kropki", between: [[1,1], [1,2]], dimensions: {width: 10, height: 10}, color: "black"},
        {type: "Kropki", between: [[2,1], [2,2]], dimensions: {width: 10, height: 10}, color: "black"},

        {type: "Kropki", between: [[0,2], [1,2]], dimensions: {width: 10, height: 10}, color: "black"},
        {type: "Kropki", between: [[1,2], [2,2]], dimensions: {width: 10, height: 10}, color: "black"},
        {type: "Kropki", between: [[2,2], [3,2]], dimensions: {width: 10, height: 10}, color: "white"},

        {type: "Kropki", between: [[1,2], [1,3]], dimensions: {width: 10, height: 10}, color: "white"},
        {type: "Kropki", between: [[3,2], [3,3]], dimensions: {width: 10, height: 10}, color: "white"},

        {type: "Kropki", between: [[0,3], [1,3]], dimensions: {width: 10, height: 10}, color: "white"},
        {type: "Kropki", between: [[2,3], [3,3]], dimensions: {width: 10, height: 10}, color: "black"},
    ]} />,

    <XV values={[
        [null, null, null,  null, null, null,  null, null, null],
        [null, null, null,  null, null, null,  null, null, null],
        [null, null,    2,  null, null, null,     4, null,    5],

        [null, null, null,  null, null, null,  null, null, null],
        [null, null, null,  null, null, null,  null, null, null],
        [null, null, null,  null, null, null,  null, null, null],

        [   5, null,    4,  null, null, null,     1, null, null],
        [null, null, null,  null, null, null,  null, null, null],
        [null, null, null,  null, null, null,  null, null, null]
    ]}

    xvs={[
        {type: "XV", between: [[2,0], [3,0]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[7,0], [8,0]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[0,0], [0,1]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[4,0], [4,1]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[6,0], [6,1]], dimensions: {width: 15, height: 15}, text: "V"},

        {type: "XV", between: [[5,1], [6,1]], dimensions: {width: 15, height: 15}, text: "V"},
        {type: "XV", between: [[6,1], [7,1]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[3,1], [3,2]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[3,2], [3,3]], dimensions: {width: 15, height: 15}, text: "V"},
        {type: "XV", between: [[5,2], [5,3]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[4,3], [6,3]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[7,3], [8,3]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[1,3], [1,4]], dimensions: {width: 15, height: 15}, text: "V"},

        {type: "XV", between: [[0,4], [1,4]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[5,4], [7,4]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[4,4], [4,5]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[5,4], [5,5]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[8,4], [8,5]], dimensions: {width: 15, height: 15}, text: "V"},

        {type: "XV", between: [[4,5], [4,6]], dimensions: {width: 15, height: 15}, text: "V"},

        {type: "XV", between: [[3,6], [4,6]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[7,6], [8,6]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[0,7], [1,7]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[3,7], [4,7]], dimensions: {width: 15, height: 15}, text: "X"},
        {type: "XV", between: [[7,7], [8,7]], dimensions: {width: 15, height: 15}, text: "X"},

        {type: "XV", between: [[7,8], [8,8]], dimensions: {width: 15, height: 15}, text: "X"},
    ]} />,

    <Sojuko rows={3} columns={3} sojukos={[
        {type: "Sojuko", between: [[0,0], [1,0], [0,1], [1,1]], dimensions: {width: 30, height: 30}, target: 30},
        {type: "Sojuko", between: [[1,0], [2,0], [1,1], [2,1]], dimensions: {width: 30, height: 30}, target: 22},
        {type: "Sojuko", between: [[0,1], [1,1], [0,2], [1,2]], dimensions: {width: 30, height: 30}, target: 20},
        {type: "Sojuko", between: [[1,1], [2,1], [1,2], [2,2]], dimensions: {width: 30, height: 30}, target: 17},
    ]} />,

    <RenbanSudoku values={[
        [null, null, null,     2, null,    7,  null, null, null],
        [   1, null,    2,  null, null, null,     9, null, null],
        [null,    8, null,  null, null, null,  null,    4, null],

        [   9, null, null,  null, null, null,  null, null,    1],
        [null, null, null,     5, null,    4,  null, null, null],
        [   2, null, null,  null, null, null,  null, null,    9],

        [null,    3, null,  null, null, null,  null,    1, null],
        [null, null,    9,  null, null, null,     5, null,    8],
        [null, null, null,     8, null,    6,  null, null, null]
    ]}

    renbanLines={[
        {type: "Renban", cells: [[0,0],[1,1],[2,2],[3,3]], thickness: 4},
        {type: "Renban", cells: [[3,1],[4,0],[5,1]], thickness: 4},
        {type: "Renban", cells: [[8,0],[7,1],[6,2],[5,3]], thickness: 4},
        {type: "Renban", cells: [[1,3],[0,4],[1,5]], thickness: 4},
        {type: "Renban", cells: [[0,8],[1,7],[2,6],[3,5]], thickness: 4},
        {type: "Renban", cells: [[3,7],[4,8],[5,7]], thickness: 4},
        {type: "Renban", cells: [[8,8],[7,7],[6,6],[5,5]], thickness: 4},
        {type: "Renban", cells: [[7,3],[8,4],[7,5]], thickness: 4},
    ]} />,

    <SudokuX diagonals={[
        {type: "SudokuX", diagonal: "left", thickness: 2},
        {type: "SudokuX", diagonal: "right", thickness: 2}
    ]} />,

    <PalindromeSudoku values={[
        [null,    2, null,  null, null, null,  null,    4, null],
        [   6, null, null,  null, null, null,  null, null,    3],
        [null, null, null,  null, null,    7,  null, null, null],

        [null, null,    1,  null, null, null,     9, null, null],
        [null, null, null,  null, null, null,  null, null, null],
        [null, null,    9,  null, null, null,     3, null, null],

        [null, null, null,     7, null, null,  null, null, null],
        [null, null, null,  null, null, null,  null, null,    5],
        [null,    4, null,  null, null, null,  null, null, null]
    ]}

    palindromeLines={[
        {type: "Palindrome", cells: [[5,8],[6,8],[7,7],[8,6],[8,5],[8,4],[8,3],[8,2],[7,1],[6,0],[5,0],[4,0],[3,0],[2,1],[1,2],[0,3],[0,4],[0,5],[1,6],[2,7],[3,7],[4,6],[5,5],[5,4],[4,3],[3,4]], thickness: 4}
    ]} />
]