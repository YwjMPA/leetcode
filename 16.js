/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a -b);
    var len = nums.length,
        result = nums[0] + nums[1] + nums[2];
    for (var i = 0; i < len - 2; i ++) {
        var lo = i + 1,
            hi = len - 1;
        while (lo < hi) {
            sum = nums[i] + nums[lo] + nums[hi];
            if (sum == target) {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(result - target) ) {
                result = sum;
            }
            if (sum < target) {
                lo++;
            }else{
                hi--;
            }
        }
    }
    return result;
};
