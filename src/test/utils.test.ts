import { equals, genCellsFromGiven, genEmptyCells } from "../utils"

describe("Utilities", () => {
    describe("#genEmptyCells", () => {
        it("should return empty cells", () => {
            expect(genEmptyCells(3, 3)).toEqual([
                [
                    {x: 0, y: 0, value: null, editable: true},
                    {x: 1, y: 0, value: null, editable: true},
                    {x: 2, y: 0, value: null, editable: true}
                ],
                [
                    {x: 0, y: 1, value: null, editable: true},
                    {x: 1, y: 1, value: null, editable: true},
                    {x: 2, y: 1, value: null, editable: true}
                ],
                [
                    {x: 0, y: 2, value: null, editable: true},
                    {x: 1, y: 2, value: null, editable: true},
                    {x: 2, y: 2, value: null, editable: true}
                ]
            ])
        })
    })

    describe("#genCellsFromGiven", () => {
        const given = [
            [   1, null,    3],
            [null,    5, null],
            [   9, null,    9]
        ]

        it("should return correct cells", () => {
            expect(genCellsFromGiven(3, 3, given)).toEqual([
                [
                    {x: 0, y: 0, value: 1, editable: false},
                    {x: 1, y: 0, value: null, editable: true},
                    {x: 2, y: 0, value: 3, editable: false}
                ],
                [
                    {x: 0, y: 1, value: null, editable: true},
                    {x: 1, y: 1, value: 5, editable: false},
                    {x: 2, y: 1, value: null, editable: true}
                ],
                [
                    {x: 0, y: 2, value: 9, editable: false},
                    {x: 1, y: 2, value: null, editable: true},
                    {x: 2, y: 2, value: 9, editable: false}
                ]
            ])
        })
    })

    describe("#equals", () => {
        const value = 5
        const array = [4, 6]
        const object = { three: 3, five: 5, seven: 7 }

        it("should values be comparable", () => {
            expect(equals(value, 5))
            expect(!equals(value, 0))
        })

        it("should arrays be coparable", () => {
            expect(equals(array, [4, 6]))
            expect(!equals(array, [4, 7]))
            expect(!equals(array, [5, 6]))
        })

        it("should objects be coparable", () => {
            expect(equals(object, { three: 3, five: 5, seven: 7 }))
            expect(!equals(object, { three: 8, five: 5, seven: 7 }))
            expect(!equals(object, { five: 5, seven: 7 }))
        })
    })
})
