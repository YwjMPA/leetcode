/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0 || num < 0){
        return false;
    }
    var i = num;
    while(i != 1){
        if (i % 2  === 0){
            i /= 2;
        }else if (i % 3  === 0){
            i /= 3;
        }else if (i % 5  === 0){
            i /= 5;
        }else{
            return false;
        }
    }
    return true;
};
