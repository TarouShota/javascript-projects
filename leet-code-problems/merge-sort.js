
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

            return result = middle;
        }
        if (middle > target) {
            let leftSide = nums.slice(0, atIndex);
            return iterate(leftSide, target);
        }
        if (middle < target) {
            let rightSide = nums.slice(atIndex, nums.length);
            return iterate(rightSide, target);
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

console.log(searchInsert([-1, 0, 3, 5, 9, 12], 2));

var mergeSort = function (array) {
    compare = (givenSide) => {
        return givenSide
    }

    let middle = array[Math.floor(array.length / 2)];
    let atIndex = (array.indexOf(middle));
    let leftSide = array.slice(0, atIndex)
    let rightSide = array.slice(atIndex, array.length);
    if (leftSide.length <= 2) {
        return compare(leftSide)
    }
    if (rightSide.length <= 2) {
        return compare(rightSide)
    }
    return [mergeSort(leftSide), mergeSort(rightSide)];
    // return [mergeSort(leftSide), divide(rightSide)];


}

console.log(mergeSort([12, 11, 13, 5, 6, 7]));

