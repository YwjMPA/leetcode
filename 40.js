/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var len = candidates.length,
        list = [];
    candidates.sort();
    var backtrack = (list, tempList, nums, remain, start) => {
      if (remain < 0) return;
      if (remain === 0) {
          list.push([...tempList]);
      } else {
        for (var i = start; i < len; i++) {
            if(i > start && nums[i] == nums[i-1]) continue;
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, remain-nums[i], i+1);
            tempList.pop();
        }
      }
    };
    backtrack(list, [], candidates, target, 0);
    return list;
};
