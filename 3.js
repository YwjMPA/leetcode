/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var result = 0,
    stack = [],
    len = s.length;
    for (var i = 0; i < len; i++) {
        if (stack.indexOf(s[i]) < 0) {
            stack.push(s[i]);
        }else{
            var index = stack.indexOf(s[i]);
            while(index >= 0) {
                stack.shift();
                index--;
            }
            stack.push(s[i]);
        }
        if (stack.length > result) {
            result = stack.length;
        }
    }
    return result;

};
