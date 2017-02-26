/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString(),
        reverse = str.split("").reverse().join("");
    return reverse == str;
};
