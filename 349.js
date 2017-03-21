/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var arr = [];
    nums1.forEach(function(val) {
        if (nums2.indexOf(val) >= 0 && arr.indexOf(val) < 0){
            arr.push(val);
        }
    });
    return arr;
};
