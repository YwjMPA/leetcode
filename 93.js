/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var len = s.length,
        i,
        j,
        k,
        arr = [],
        s1,
        s2,
        s3,
        s4;
    var isValid = function(n) {
        if ((n.length >1 && n.slice(0,1) != "0" && n<=255) || (n.length === 1 && n >=0)) {
            return true;
        }
        return false;
    };
    for (i = 1; i < 4; i++) {
        for (j = i + 1; j < i + 4 && j < len - 1; j++) {
            for (k = j + 1; k < j + 4 && k < len; k++) {
                s1 = s.slice(0, i);
                s2 = s.slice(i, j);
                s3 = s.slice(j, k);
                s4 = s.slice(k);
                if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
                    arr.push(s1 + '.' + s2 + '.' + s3 + '.' + s4);
                }
            }
        }
    }
    return arr;
};
