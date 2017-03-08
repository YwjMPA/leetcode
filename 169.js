/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length,
        i,
        arr = [],
        arrNum = [];

    for (i = 0; i < len; i ++ ) {
        var index = arr.indexOf(nums[i]);
        if (index < 0) {
            arr.push(nums[i]);
            arrNum.push(1);
        }else{
            arrNum[index]++;
            if (arrNum[index] > (len / 2)) {
                return arr[index];
            }
        }
    }
    return nums[0];
};
