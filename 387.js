/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var len = s.length,
        i = 0,
        pos,
        arr = [];
    while(s[i]) {
        if (s.indexOf(s[i], i + 1) < 0 && arr.indexOf(s[i]) < 0) {
            return i;
        }else{
            arr.push(s[i]);
            i++;
        }
    }
    return -1;
};
