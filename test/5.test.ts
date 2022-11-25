// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2

import { describe } from "node:test"
import Five from "../src/5";

describe('five', () => {
    test('update grid', () => {
        const grid = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];

        const five = new Five();
        five.updateGrid([1,1], [1,2], grid);
        expect(grid[1][1]).toBe(1);
        expect(grid[1][2]).toBe(1);
    })
})