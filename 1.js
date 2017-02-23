/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length,
        dict = {};
    for (var i = 0; i < nums.length; i ++ ){
        if (nums[i] in dict) {
            return [dict[nums[i]], i];
        }else {
            dict[target - nums[i]] = i;
        }
    }
};
