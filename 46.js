/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var list = [],
        len = nums.length;
    var backtrack = function(list, tempList, nums) {
        if (tempList.length == len) {
            list.push([...tempList]);
        }else {
            for (var i = 0; i < len; i++) {
                if (tempList.indexOf(nums[i]) >= 0) continue;
                tempList.push(nums[i]);
                backtrack(list, tempList, nums);
                tempList.pop();
            }
        }
    };
    backtrack(list, [], nums);
    return list;
};
