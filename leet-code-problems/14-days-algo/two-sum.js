let numbers = [2, 7, 11, 12, 13, 15, 99];
const target = 114;

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



