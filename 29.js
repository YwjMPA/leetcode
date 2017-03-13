/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // -2147483648到2147483647
    if (divisor === 0){
        return 0;
    }
    var min = -2147483648,
        max = 2147483647,
        a = Math.abs(dividend),
        b = Math.abs(divisor),
        result = 0;

    while (a >= b){
        var temp = b,
            i = 1;
        while(a >= temp) {
            a -= temp;
            temp += temp;
            result += i;
            i = i + i;
        }
    }

    if (dividend > 0 && divisor > 0 || dividend < 0 && divisor <0) {
        if (result > max) {
            return max;
        }
        return result;
    }else {
        if (result > 0 - min) {
            return min;
        }
        return 0 - result;
    }
};
