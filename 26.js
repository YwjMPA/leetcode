/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 1;
    while(j < nums.length){
        if(nums[j] == nums[j-1]){
            nums.splice(j,1);
            j--;
        }
        j++;
    }
    return nums.length;
};
