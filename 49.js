/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var strsArr = [],
        len = strs.length,
        replaceArr,
        sortArr = [],
        resultArr = [];

    strs.forEach(function(val) {
       replaceArr = val.split('').sort();
       strsArr.push(replaceArr.join(""));
    });

    for (var i = 0; i < len; i++) {
       var index = sortArr.indexOf(strsArr[i]);
       if (index < 0) {
           sortArr.push(strsArr[i]);
           resultArr.push([strs[i]]);
       }else{
           resultArr[index].push(strs[i]);
       }
    }
    return resultArr;
};
