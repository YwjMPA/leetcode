/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var i,
        j,
        t,
        len = nums.length;
    for (i = 0; i < len - 1; i ++ ) {
        for (j = i + 1; j < len; j ++ ) {
            if(nums[i] > nums[j]) {
                t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }
    }
};
