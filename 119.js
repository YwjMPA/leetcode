/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [];
    for (let i = 0; i <= rowIndex; i++ ) {
        let newArr = [];
        for(let j = 0; j <= i; j ++) {
            if (j - 1 >= 0) {
                if (j === i) {
                    newArr.push(1);
                }else{
                    newArr.push(arr[j - 1] + arr[j]);
                }
            }else{
                newArr.push(1);
            }
        }
        arr = newArr;
    }
    return arr;
};
