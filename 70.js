/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [0, 1, 2];
    for (var i = 3; i <= n; i++) {
        arr[i] = arr[i-2] + arr[i-1];
    }
    return arr[n];
};
