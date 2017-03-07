/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var arr = str.split(" ").reverse(),
        result = "";
    arr.forEach(function(val) {
       if (val) {
           result += val + " ";
       }
    });
    return result.slice(0, result.length - 1);
};
