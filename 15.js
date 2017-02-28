/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b){
        return a - b;
    });
    var res = [],
        len = nums.length;
    for (var i = 0; i < len - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] != nums[i - 1])) {
            var lo = i + 1,
                hi = len - 1,
                sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] == sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] == nums[lo + 1]) {lo++;}
                    while (lo < hi && nums[hi] == nums[hi - 1]) {hi--;}
                    lo++;
                    hi--;
                }else if (nums[lo] + nums[hi] < sum){
                    lo++;
                }else {
                    hi--;
                }
            }
        }
    }
    return res;
};
