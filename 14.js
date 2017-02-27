/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
    var arr = [],
        len = strs.length,
        same = true;
        smallestLen = strs[0].length;
    strs.forEach(function (val) {
        if (val.length < smallestLen) {
            smallestLen = val.length;
        }
    });
    outer:
    for (var j = 0; j < smallestLen; j++ ) {
        for (var i = 0; i < len - 1; i++) {
            if (strs[i][j] != strs[i + 1][j]) {
                same = false;
                break outer;
            }
        }
        if (same) {
            arr.push(strs[i][j]);
        }
    }
    return arr.join("");
};
