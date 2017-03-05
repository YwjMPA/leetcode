/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = [[1]],
        i;
    if (numRows === 0) {
        return [];
    }
    for (i = 1; i < numRows; i++) {
        var subArr = [];
        for (j = 0; j < i + 1; j++) {
            if (j !== 0) {
                if (arr[i - 1][j]) {
                    subArr.push(arr[i - 1][j - 1] + arr[i - 1][j]);
                }else{
                    subArr.push(1);
                }
            }else{
                subArr.push(1);
            }
        }
        arr.push(subArr);
    }
    return arr;
};
