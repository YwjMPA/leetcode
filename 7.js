/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    if (x >= 0) {
        var str1 = parseInt(x.toString().split("").reverse().join(""));
        if (Math.abs(str1) > 2147483647) {
        return 0;
         }
        return str1;
    }else{
        var str2 = parseInt("-" + (-x).toString().split("").reverse().join(""));
        if (Math.abs(str2) > 2147483647) {
        return 0;
         }
        return str2;
    }
};
