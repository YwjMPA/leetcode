/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    var key = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'],
    len = digits.length,
    arr = [""];
    for (var i = 0; i < len; i++) {
        var temp = digits[i];
        var tempLen = key[temp].length;
        while ( arr[0] === undefined || arr[0].length == i ) {
            var t = arr.shift();
            for (var j = 0; j < tempLen; j++) {
                arr.push(t + key[temp][j]);
            }
        }
    }
    return arr;
};
