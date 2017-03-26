/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let len = nums.length,
        list = [];
    var backtrack = (list, tempList, nums, start) => {
        list.push([...tempList]);
        for(var i = start;i < len; i++) {
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, i+1);
            tempList.pop();
        }
    };
    backtrack(list, [], nums, 0);
    return list;
};
