import { AST } from "highcharts"//let i = 1
let i;
let A = [1, 2, 3]


function twoSum(nums: number[], target: number): number {
    for (i = 1; i <= A.length + 1; i++) {
        if (A.includes(i)) {
            continue
        } else {
            return i
        }
        // if (i == A.length) {
        //     return i
        // }
    }
};

//lol, 66% from this
// aphpahp
// need the solve 2 problems at least daily,
// hours prep if working

console.log(twoSum([1, 2], 1));