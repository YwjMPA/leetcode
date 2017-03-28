/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    var len = A.length,
        max = 0,
        j;
    for (j = 0; j < len; j++ ) {
        max += A[j] * j;
    }
    for (var i = 0; i < len; i++) {
        var sum = 0;
        for (j = 0; j < len; j++ ) {
            sum += A[j] * j;
        }
        A.unshift(A.pop());
        max = sum > max ? sum : max;
    }
    return max;
};
