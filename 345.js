/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var obj = {
        a:1,
        e:2,
        i:2,
        o:2,
        u:2,
        A:2,
        E:2,
        I:2,
        O:2,
        U:2
    };
    var arr = s.split(""),
        len = s.length,
        newArr = [];
    for (var i = 0; i < len; i++) {
        if (arr[i] in obj) {
            newArr.push(i);
        }
    }
    var newLen = newArr.length;
    var halfLen = Math.floor(newLen / 2),
        exchange;
    for (i = 0; i < halfLen; i ++){
        exchange = arr[newArr[i]];
        arr[newArr[i]] = arr[newArr[newLen - i -1]];
        arr[newArr[newLen - i -1]] = exchange;
    }
    return arr.join("");
};
