


let numbers = [
    -1, 0, 3,
    5, 9, 12];
let targets = 9;

console.log(Math.round(targets));
//console.log(nums[nums.length / 2])


search = function (nums, target) {

    iterate = function (nums, target) {
        if (nums.length == 1) {
            if (nums[0] == target) {
                return target
            } else {
                return undefined
            }
        }
        let middle = nums[Math.floor(nums.length / 2)];
        let atIndex = Math.round(nums.indexOf(middle))
        console.log(middle)


        if (target === middle) {
            return result = middle;
        }
        if (middle > target) {
            let leftSide = nums.slice(0, atIndex);
            console.log(leftSide);

            return iterate(leftSide, target);
        }
        if (middle < target) {
            let rightSide = nums.slice(atIndex, nums.length);
            console.log(rightSide)

            return iterate(rightSide, target);
        }
    }
    return (iterate(nums, target) != undefined) ? nums.indexOf(iterate(nums, target)) : -1;
}

console.log(search(numbers, 9));
console.log(search([5], 5));
console.log(search([-1, 0, 3, 5, 9, 12], 2));



