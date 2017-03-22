/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    var sum = 10;
    if (n === 0) {
        return 1;
    }
    if (n > 10){
        n = 10;
    }
    for (var i = 2; i <= n; i++) {
        var sumj = 9;
        for (var j = 9; j > 10 - i; j -- ) {
            sumj *= j;
        }
        sum += sumj;
    }
    return sum;
};
