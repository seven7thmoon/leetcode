/*
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const arr = Array.from(Array(n), () => new Array(n));

    let count = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    while(startRow <= endRow && startColumn <= endColumn) {
        for (let column = startColumn; column <= endColumn; column++) {
            arr[startRow][column] = count++;
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            arr[row][endColumn] = count++;
        }
        for (let column = endColumn - 1; column > startColumn; column--) {
            arr[endRow][column] = count++;
        }
        for (let row = endRow; row > startRow; row--) {
            arr[row][startColumn] = count++;
        }
        startRow++;
        startColumn++;
        endRow--;
        endColumn--;
    }
    return arr;
};