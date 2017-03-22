/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var str = '1';

    // say one str
    var sayStr = function(str) {
      var len = str.length,
          say = str[0],
          count = 1,
          res = '';
      for (var i = 0; i < len; i++) {
         if (str[i] == str[i+1]) {
           count++;
         }else{
           res = res + count + str[i];
           say = str[i+1];
           count = 1;
         }
      }
      return res;
    };

    for (var i = 2; i <= n; i++) {
      str = sayStr(str);
    }
    return str;
};
