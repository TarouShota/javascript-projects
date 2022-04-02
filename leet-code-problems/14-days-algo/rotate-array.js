
// /* Rotating an array by k elements. */
// let bruh = (damn, bro) => {
//     chicken = function (fuck, cunt) {
//         console.log(cunt);
//         if (cunt > 1) {
//             chicken(fuck, cunt - 1);
//         } else {
//             return 1
//         }
//     }
//     chicken(damn, bro);
// }
// bruh(1, 2);
let cunt = (bro, bruh) => {
    var rotate = function (nums, k = 0) {

        result = [nums.pop()].concat(nums);
       
        for (k; k > 1; k--) {

            rotate(result);
        }
        
        if (k == 1) {
            for (i = 0; i < result.length; i++) {
                nums[i] = result[i];
            }
        }

        return result
    };
    if (bruh == 0) {
        return bro
    }
    return rotate(bro, bruh);
}




console.log(cunt([-1, -100, 3, 99], 5));
console.log(cunt([1],0));