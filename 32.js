/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var len = s.length,
        stack = [0];
    for (var i = 1; i < len; i++) {
        if (s[i] == ')' &&  s[stack[stack.length - 1]] == '('){
            stack.pop();
        }else{
            stack.push(i);
        }
    }
    stack.unshift(-1);
    stack.push(len);
    var sLen = stack.length,
        res = 0;
    for (var j = 0; j < sLen; j++) {
        if (res < stack[j] - stack[j-1] - 1) {
            res  = stack[j] - stack[j-1] - 1;
        }
    }
    return res;
};
