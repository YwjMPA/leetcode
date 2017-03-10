/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var len = nums.length;
    nums.sort(function(a, b){
        return a - b;
    });
    for (var i = 0; i < len; i ++) {
        if(nums[i] !== i) {
            return i;
        }
    }
    return nums[len - 1] + 1;
};
