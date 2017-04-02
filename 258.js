/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  function reduce(a, b){
      return parseInt(a) + parseInt(b);
  }
  str = num.toString();
  while (str.length > 1) {
      var arr = str.split('');
      str = arr.reduce(reduce).toString();
  }
  return parseInt(str);
};
