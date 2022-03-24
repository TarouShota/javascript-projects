




let numbers = [
    -1, 0, 3,
    5, 9, 12];
let targets = 9;

console.log(Math.round(targets));
//console.log(nums[nums.length / 2])


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

console.log(searchInsert(numbers, 9));
console.log(searchInsert([3], 1));
console.log(searchInsert([-1, 0, 3, 5, 9, 12], 2));




