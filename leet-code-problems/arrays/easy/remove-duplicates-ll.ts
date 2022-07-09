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
    let j = 1;
    let elemsToSkip = 1;

    let filteredArr: Array<number> = []
    for (i; i < arr.length; i++) {

        for (j; j < arr.length; j = j + 1) {
            //let sum = arr[i] + arr[j];
            console.log(j)
            console.log(i);
            //console.log(arr[i]);
            //console.log(arr[j]);
            if (arr[i] == arr[j]) {
                i += elemsToSkip
                elemsToSkip++
                continue
            }
            if (arr[i] != arr[j]) {
                elemsToSkip = 0;
                filteredArr.push(arr[i]);
                break
            }
        }


        console.log(i)

    }
    console.log(filteredArr);
    return '-1'
}

console.log(twoPointer([1, 2, 2, 2, 3, 3, 4, 4, 5], 1))
//console.log(twoPointer([1, 2, 3, 3, 4, 4, 5], 1));
//did i finish this?
export { }