
let testNumbers = [1, 2, 3, 4, 5, 6, 7];
let kValue = 2;


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

    for (i = 0; i < Math.floor(arr.length / 2); i++) {
        arr[i] = (arr[i]) - (arr[j])
        arr[j] = arr[i] + arr[j];
        arr[i] = -(arr[i]) + (arr[j]);
        j--

        console.log(arr);
    }
    return [arr];
}

var rotate = function (nums, k) {
    // let result = [];
    while (k != 0) {
        let lastElem = nums.pop();
        let result = [lastElem].concat(nums);
        console.log(lastElem);
        console.log(result);
        k = k - 1;

    }
    //  return result;
};

console.log(rotate(testNumbers, kValue));
console.log(twoPointer(testNumbers));
//console.log(rotate(testNumbers, kValue));


numbers = [-1, -100, 3, 99];
nums2 = [1, 2, 3, 4, 5, 6, 7];
k2 = 3;

k1 = 2;

var rotate = function (nums, k) {


    let toConcat = function (array) {
        lastElem = array.pop();
        result = [lastElem].concat(array);
        //console.log(result);


        while (k != 1) {
            k--
            return toConcat(result);
        }
        nums = [...result];
        return nums
    }

    toConcat(nums);
    console.log(nums)
    return nums;
};

console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate(numbers, k1));
// console.log(rotate(numbers, k1));

// console.log(rotate(nums2, k2));
// console.log(rotate([-1, -100, 3, 99], k1));



//const clone = [...rotate(numbers,k1)];
//console.log(clone);

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

