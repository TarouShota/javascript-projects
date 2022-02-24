let intervalsArray = [[1, 4], [3, 6], [2, 8]];
var removeCoveredIntervals = function (intervals) {
    let counter = 0;
    let filteredArray = {};
    for (i = 0; i < intervals.length; i++) {
        intervals.shift(intervals.filter(element => {
            element[0] <= intervals[i][0] && element[1] >= intervals[i][1];
        }))
        console.log(intervals)
    }
    return filteredArray;

};
console.log('Im working!');
console.log(intervalsArray[1][1]);
console.log(`result \n\n${removeCoveredIntervals(intervalsArray)}`);
