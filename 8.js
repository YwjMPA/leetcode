/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var n = parseInt(str)
    if (isNaN(n)) {
        return 0;
    }else if (n > 2147483647) {
        return 2147483647;
    }else if (n < -2147483648) {
        return -2147483648;
    }else{
        return n;
    }
};
