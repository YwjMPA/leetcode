/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var arr = [],
        indexArr = [],
        len = nums.length;

    for (var i = 0; i < len; i++) {
        var index = arr.indexOf(nums[i]);
        if (index < 0) {
            arr.push(nums[i]);
            indexArr.push(1);
        }else{
            indexArr[index]++;
        }
    }

    var indexLen = indexArr.length,
        indexArrCopy = indexArr.slice(),
        newArr = [],
        resultArr = [];
    indexArrCopy.sort(function(a, b) {
       return b - a;
    });

    line = indexArrCopy[k - 1];

    for (i = 0; i < indexLen; i++) {
        if (indexArr[i] >= line) {
            newArr.push(i);
        }
    }

    newArr.forEach(function(val) {
        resultArr.push(arr[val]);
    });

    return resultArr;
};
