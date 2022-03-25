// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
let testNumbers = [1, 2, 3, 4, 5, 6, 7]
let kValue = 3


var rotate = function (nums, k) {
    let newArray = [0];
    for (i = 0; i < nums.length; i++) {
        newArray.push(nums[i])
    }
    console.log(newArray)
    while (k !== 0) {
        newArray.push(nums.pop());

        k -= 1;
        console.log(nums);
    }
    nums.unshift(newArray);
    return nums;
};
//testNumbers = [1, 2, 3, 4, 5, 6, 7]
// rotate 1 steps to the right: [7,1,2,3,4,5,6]

var twoPointer = function (arr) {
    let j = arr.length - 1;

    for (i = 0; i < 1; i++) {
        arr[i] = (arr[i]) - (arr[j])
        arr[j] = arr[i] + arr[j];
        arr[i] = -(arr[i]) + (arr[j]);

        console.log(arr);
    }
    return [arr];
}
console.log(twoPointer(testNumbers));

console.log(rotate(testNumbers, kValue));


