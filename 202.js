/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var str = n.toString();
    while(str.length > 1) {
        var newN = 0,
            arr = str.split("");
        arr.forEach(function(val){
            newN += val*val;
        });
        str = newN.toString();
    }
    if (str ==="1" || str ==="7") {
        return true;
        }
    return false;
};
