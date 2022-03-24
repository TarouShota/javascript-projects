// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
testNumbers = [0, 1];
kValue = 1;


var rotate = function (nums, k) {
    while (k !== 0) {
        let lastElem = nums.pop();
        nums.unshift(lastElem);
        k -= 1;
        console.log(nums);
    }
    return nums;
};


console.log(rotate(testNumbers, kValue));


