/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var arr = s.split(""),
        s2,
        len,
        slen,
        pattern = /(.)\1*/g;
    arr.sort();
    s2 = arr.join("");
    len = s.length;
    while((strArr = pattern.exec(s2)) !== null){
        slen = strArr[0].length;
        if (slen % 2 !== 0) {
            len--;
        }
    }
    return s.length === len ? len : len + 1;
};
