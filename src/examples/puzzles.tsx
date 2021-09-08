import Kropki from "./Kropki";
import Sudoku from "./Sudoku";

export const puzzles = [
    <Sudoku rows={9} columns={9} values={[
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
    ]} />
]