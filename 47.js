/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var list = [],
        len = nums.length,
        used = new Array(len);
        nums.sort();
    var backtrack = function(list, tempList, nums, used) {
      if (tempList.length == len) {
          list.push([...tempList]);
      }else{
          for (var i = 0; i < len; i++) {
              if (used[i] === true || i > 0 && nums[i] == nums[i-1] && used[i-1]) continue;
              used[i] = true;
              tempList.push(nums[i]);
              backtrack(list, tempList, nums, used);
              used[i] = false;
              tempList.pop();
          }
      }
    };
    backtrack(list, [], nums, used);
    return list;
};
