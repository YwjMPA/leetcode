/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var list = [];
    var backtrack = function(list, str, open, close, max) {
      if (open === max && close === max) {
          list.push(str);
          return;
      }
      if (open < max) {
        backtrack(list, str+'(', open+1, close, max);
      }
      if (close < open) {
        backtrack(list, str+')', open, close+1, max);
      }
    };
    backtrack(list, '', 0, 0, n);
    return list;
};
