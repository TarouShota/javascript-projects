let twoPointer = function (arr: Array<number>, targ: number): object | string {
    if (arr.length == 2) {
        if (arr[0] !== arr[1]) {
            return arr
        } else {
            return []
        }
    }
    // let middle = arr[Math.floor(arr.length / 2)];
    // let atIndex = (arr.indexOf(middle));

    let i = 0;
    let j = i + 1;
    let filteredArr: Array<number> = []
    for (i; i < arr.length; i++) {

        for (j; j < arr.length; j = j + 1) {
            let sum = arr[i] + arr[j];
            console.log([i, j])
            console.log(sum);
            // if (sum == targ) {
            //     return { i, j };
            // }
            if (arr[i] == arr[j]) {
                break
            }
            if (arr[i] != arr[j]) {
                continue
            }


        }
        console.log(i)
    }
    return '-1'
}
console.log(twoPointer([1, 2, 3, 4, 4, 4], 1))
console.log(twoPointer([1, 2, 3, 3, 4, 4, 5], 1));

export { }