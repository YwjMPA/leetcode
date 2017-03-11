/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a - b);
    var results = [];
    var findNSum = function(nums, target, n, result, results) {
        if (nums.length < n || n < 2 || target < nums[0]*n || target > nums[nums.length -1]*n) {
            return ;
        }
        if (n == 2) {
            var l = 0,
                r = nums.length - 1;
            while (l < r) {
                s = nums[l] + nums[r];
                if (s == target) {
                    results.push([...result,nums[l],nums[r]]);
                    l++;
                    while (l < r && nums[l] == nums[l - 1]) {
                        l++;
                    }
                }else if (s < target) {
                    l++;
                }else{
                    r--;
                }
            }
        }else{
            for (var i = 0; i < nums.length - n + 1; i++) {
                if (i ===0 || (i > 0 && nums[i-1] != nums[i])) {
                    findNSum(nums.slice(i+1), target - nums[i], n -1, [...result, nums[i]], results);
                }
            }

        }
    };
    findNSum(nums, target, 4, [], results);
    return results;
};
