import EvenOddSudoku from "./EvenOddSudoku";
import FortressSudoku from "./FortressSudoku";
import Kropki from "./Kropki";
import Nonogram from "./Nonogram";
import PalindromeSudoku from "./PalindromeSudoku";
import RenbanSudoku from "./RenbanLine";
import Skyscraper from "./Skyscraper";
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
    ]} />,

    <FortressSudoku values={[
        [null, null, null,     2,    1,    3,     6, null, null],
        [null, null, null,     5, null, null,     8,    2,    4],
        [null, null,    2,     4, null, null,  null, null, null],

        [null, null,    5,  null, null, null,  null, null, null],
        [null, null,    8,     7,    3,    2,     1, null, null],
        [null, null, null,  null, null, null,     7, null, null],

        [null, null, null,  null, null,    7,     4, null, null],
        [   4,    1,    7,  null, null,    6,  null, null, null],
        [null, null,    6,     3,    4,    5,  null, null, null]
    ]}

    fortresses={[
        {type: "Fortress", coords: [1, 0], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [8, 0], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [1, 1], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [8, 3], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [2, 5], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [1, 6], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [4, 6], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [8, 6], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [3, 7], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [6, 7], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [1, 8], inequality: "<", dimensions: {width: 50, height: 50}},
        {type: "Fortress", coords: [8, 8], inequality: "<", dimensions: {width: 50, height: 50}},
    ]} />,

    <EvenOddSudoku values={[
        [null, null, null,  null,    9, null,  null,    4, null],
        [null, null, null,     1, null, null,     7, null, null],
        [null, null,    7,  null, null, null,  null,    5, null],

        [null,    4, null,  null, null, null,     1, null, null],
        [null, null, null,  null, null, null,  null, null, null],
        [null, null,    3,  null, null, null,  null,    2, null],

        [null,    9, null,  null, null, null,     8, null, null],
        [null, null,    2,  null, null,    6,  null, null, null],
        [null,    7, null,  null,    3, null,  null, null, null]
    ]}

    evenOdds={[
        {type: "EvenOdd", coords: [2,0], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [5,0], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [8,0], parity: "odd", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [1,1], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [4,1], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [7,1], parity: "even", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [0,2], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [3,2], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [6,2], parity: "odd", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [2,3], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [5,3], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [8,3], parity: "odd", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [1,4], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [4,4], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [7,4], parity: "even", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [0,5], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [3,5], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [6,5], parity: "odd", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [2,6], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [4,6], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [8,6], parity: "even", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [1,7], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [4,7], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [7,7], parity: "odd", dimensions: {width: 40, height: 40}},

        {type: "EvenOdd", coords: [0,8], parity: "odd", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [3,8], parity: "even", dimensions: {width: 40, height: 40}},
        {type: "EvenOdd", coords: [6,8], parity: "even", dimensions: {width: 40, height: 40}},
    ]} />,

    <Skyscraper rows={5} columns={5} skyscrapers={[
        {type: "Skyscraper", value: 1, position: 1, orientation: "up"},
        {type: "Skyscraper", value: 3, position: 2, orientation: "up"},
        {type: "Skyscraper", value: 2, position: 3, orientation: "up"},
        {type: "Skyscraper", value: 3, position: 4, orientation: "up"},

        {type: "Skyscraper", value: 2, position: 0, orientation: "right"},
        {type: "Skyscraper", value: 2, position: 1, orientation: "right"},
        {type: "Skyscraper", value: 5, position: 2, orientation: "right"},
        {type: "Skyscraper", value: 1, position: 4, orientation: "right"},

        {type: "Skyscraper", value: 1, position: 0, orientation: "down"},
        {type: "Skyscraper", value: 2, position: 2, orientation: "down"},
        {type: "Skyscraper", value: 3, position: 3, orientation: "down"},

        {type: "Skyscraper", value: 1, position: 2, orientation: "left"},
        {type: "Skyscraper", value: 4, position: 3, orientation: "left"},
        {type: "Skyscraper", value: 2, position: 4, orientation: "left"},
    ]} />,

    <Nonogram rows={10} columns={10} nonograms={[
        {type: "Nonogram", values: [1,4,1], position: 0, orientation: "up"},
        {type: "Nonogram", values: [3,4,1], position: 1, orientation: "up"},
        {type: "Nonogram", values: [1,3], position: 2, orientation: "up"},
        {type: "Nonogram", values: [1,1], position: 3, orientation: "up"},
        {type: "Nonogram", values: [3,1], position: 4, orientation: "up"},
        {type: "Nonogram", values: [5], position: 5, orientation: "up"},
        {type: "Nonogram", values: [5,1], position: 6, orientation: "up"},
        {type: "Nonogram", values: [4,1,1], position: 7, orientation: "up"},
        {type: "Nonogram", values: [5,1], position: 8, orientation: "up"},
        {type: "Nonogram", values: [3], position: 9, orientation: "up"},

        {type: "Nonogram", values: [3,5], position: 0, orientation: "left"},
        {type: "Nonogram", values: [1,5], position: 1, orientation: "left"},
        {type: "Nonogram", values: [1,6], position: 2, orientation: "left"},
        {type: "Nonogram", values: [5], position: 3, orientation: "left"},
        {type: "Nonogram", values: [2,4,1], position: 4, orientation: "left"},
        {type: "Nonogram", values: [2,1], position: 5, orientation: "left"},
        {type: "Nonogram", values: [3], position: 6, orientation: "left"},
        {type: "Nonogram", values: [5,1], position: 7, orientation: "left"},
        {type: "Nonogram", values: [1], position: 8, orientation: "left"},
        {type: "Nonogram", values: [2,1,1], position: 9, orientation: "left"},
    ]} />,

    <Nonogram rows={15} columns={15} nonograms={[
        {type: "Nonogram", values: [2], position: 0, orientation: "up"},
        {type: "Nonogram", values: [2,1,2], position: 1, orientation: "up"},
        {type: "Nonogram", values: [1,7,1], position: 2, orientation: "up"},
        {type: "Nonogram", values: [1,3,1,1,1,3], position: 3, orientation: "up"},
        {type: "Nonogram", values: [1,1,1,1,1,5,1,1], position: 4, orientation: "up"},
        {type: "Nonogram", values: [5,1,3,1,1,1,4], position: 5, orientation: "up"},
        {type: "Nonogram", values: [3,1,10], position: 6, orientation: "up"},
        {type: "Nonogram", values: [3,11], position: 7, orientation: "up"},
        {type: "Nonogram", values: [3,1,10], position: 8, orientation: "up"},
        {type: "Nonogram", values: [5,1,3,1,1,1,4], position: 9, orientation: "up"},
        {type: "Nonogram", values: [1,1,1,1,1,5,1,1], position: 10, orientation: "up"},
        {type: "Nonogram", values: [1,3,1,1,1,3], position: 11, orientation: "up"},
        {type: "Nonogram", values: [1,7,1], position: 12, orientation: "up"},
        {type: "Nonogram", values: [2,1,2], position: 13, orientation: "up"},
        {type: "Nonogram", values: [2], position: 14, orientation: "up"},

        {type: "Nonogram", values: [2,2], position: 0, orientation: "left"},
        {type: "Nonogram", values: [1,1], position: 1, orientation: "left"},
        {type: "Nonogram", values: [5], position: 2, orientation: "left"},
        {type: "Nonogram", values: [5], position: 3, orientation: "left"},
        {type: "Nonogram", values: [7], position: 4, orientation: "left"},
        {type: "Nonogram", values: [1,9,1], position: 5, orientation: "left"},
        {type: "Nonogram", values: [2,4,1,4,2], position: 6, orientation: "left"},
        {type: "Nonogram", values: [2,1,2,1,2,1,2], position: 7, orientation: "left"},
        {type: "Nonogram", values: [1,1,1,1,1,1,1,1,1,1,1], position: 8, orientation: "left"},
        {type: "Nonogram", values: [2,5,1,5,2], position: 9, orientation: "left"},
        {type: "Nonogram", values: [1,1,1,1,1,1,1,1,1,1,1,1,1], position: 10, orientation: "left"},
        {type: "Nonogram", values: [5,1,5], position: 11, orientation: "left"},
        {type: "Nonogram", values: [2,1,2,1,2,1,2], position: 12, orientation: "left"},
        {type: "Nonogram", values: [2,4,1,4,2], position: 13, orientation: "left"},
        {type: "Nonogram", values: [1,2,1,2,1], position: 14, orientation: "left"},
    ]} />


]