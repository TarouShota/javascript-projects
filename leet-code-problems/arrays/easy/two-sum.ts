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
// 3 hours prep if working
// practice an interview process, problem solve daily
// should I grab the book? I think so, ye
// Aishamen? Ta ne, ne hochetsya, sharshap kelem uje, tamak dayindau kerek bolad
// Aitpa, ertenge daiyndalamyz, oltirip tastau kerek phoplem solfingdy

console.log(twoSum([1, 2], 1));