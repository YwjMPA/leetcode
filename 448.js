/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort(function(a, b){
        return a - b;
    });
    var len = nums.length,
        arr = [];
    for (var i = 1; i <= len; i++) {
        if (nums.indexOf(i) < 0){
            arr.push(i);
        }
    }
    return arr;
};
