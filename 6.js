/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr = [],
        len = s.length,
        cir = (numRows - 1) * 2,
        i,
        obj = {};
    if (numRows <= 1){
        return s;
    }
    for (i = 0; i < numRows; i ++) {
        arr[i] = [];
    }
    for (i = 0; i < cir; i ++) {
        if (i > numRows - 1) {
            obj[i] = cir - i;
        }else{
            obj[i] = i;
        }
    }
    for (i =0; i < len; i++ ) {
        arr[obj[i % cir]].push(s[i]);
    }
    var result = "";
    arr.forEach(function(val) {
       result +=val.join("");
    });
    return result;
};
