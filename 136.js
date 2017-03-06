/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var len = nums.length,
        i = 0;
    nums.sort();
    while(i < len) {
        if (nums[i] == nums[i + 1]) {
            i += 2;
        }else{
            return nums[i];
        }
    }
};
