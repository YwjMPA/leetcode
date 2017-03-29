/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var strArr = [];
    for (var i = 1; i <= n; i ++ ) {
        if(i % 3 === 0){
            if (i % 5 === 0){
                strArr.push("FizzBuzz");
            }else{
                strArr.push("Fizz");
            }
        }else if(i % 5 ===0) {
            strArr.push("Buzz");
        }else{
            strArr.push(i.toString());
        }
    }
    return strArr;
};
