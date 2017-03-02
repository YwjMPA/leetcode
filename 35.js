/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    if (nums.indexOf(target) >= 0) {
        return nums.indexOf(target);
    }else{
        if(target <= nums[0]){
            return 0;
        }
        for(var i = 1; i < len; i++) {
            if(target < nums[i]){
                return i;
            }
        }
        return len;
    }
};
