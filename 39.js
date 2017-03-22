/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var len = candidates.length,
        list = [];
    var backtrack = (list, tempList, nums, remain, start) => {
        if (remain < 0) return;
        if (remain === 0) {
            list.push([...tempList]);
        }else{
            for (let i = start; i < len; i++) {
                tempList.push(nums[i]);
                backtrack(list, tempList, nums, remain-nums[i], i);
                tempList.pop(nums[i]);
            }
        }
    };
    backtrack(list, [], candidates, target, 0);
    return list;
};
