/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var len = s.length,
        stack = [],
        dict = {
            "}":"{",
            "]":"[",
            ")":"("
        };
    for (var i = 0; i < len; i++) {
        if (s[i] === "(") {
            stack.push("(");
        }else if (s[i] === "[") {
            stack.push("[");
        }else if (s[i] === "{") {
            stack.push("{");
        }else if (dict[s[i]] === stack[stack.length - 1]) {
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
};
