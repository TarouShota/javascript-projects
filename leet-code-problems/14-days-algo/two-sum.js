/* Creating an array of numbers and a target number. */
let numbers = [2, 7, 11, 12, 13, 15, 99];
const target = 106;

/**
 * Given an array of integers, return the indices of the two numbers that add up to a specific target
 * @param arr - the array of numbers
 * @param targ - the target number
 * @returns undefined
 */
let twoPointer = function (arr, targ) {
    if (arr.length == 2) {
        if (nums[0] + nums[1] == target) {
            return `U found it${nums[0]} ${nums[1]}`
        } else {
            return undefined
        }
    }
    let middle = arr[Math.floor(arr.length / 2)];
    let atIndex = (arr.indexOf(middle));

    let i = 0;
    let j = arr.length - 1
    for (i; i < arr.length; i++) {

        for (j; j > -1; j = j - 1) {
            let sum = arr[i] + arr[j];
            console.log([i, j])
            console.log(sum);
            if (sum == targ) {
                return { i, j };
            }
            if (sum > targ) {
                continue
            }
            if (sum < targ) {
                break
            }


        }
    }
    return -1
}

/* This code is iterating through the array and checking if the target is equal to the middle element.
If it is, it returns the middle element. If it is not, it checks if the target is less than the
middle element. If it is, it iterates through the left side of the array. If it is not, it iterates
through the right side of the array. */
var searchInsert = function (nums, target) {

    iterate = function (nums, target) {
        if (nums.length == 1) {
            if (nums[0] == target) {
                return target
            } else {
                return undefined
            }
        }
        let middle = nums[Math.floor(nums.length / 2)];
        let atIndex = (nums.indexOf(middle))


        if (target === middle) {
            result = middle;
            return
        }
        if (middle > target) {
            let leftSide = nums.slice(0, atIndex);
            iterate(leftSide, target);
        }
        if (middle < target) {
            let rightSide = nums.slice(atIndex, nums.length);
            iterate(rightSide, target);
        }
    }
    addElem = function () {
        let counter = 0
        while (nums[counter] < target) {
            counter++
        }
        nums[counter] = target
        return nums.indexOf(target);
    }
    let output = iterate(nums, target);
    return (output !== undefined) ? nums.indexOf(output) : addElem();
}


console.log(twoPointer(numbers, target));



