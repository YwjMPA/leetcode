/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var len = nums1.length,
        arr = [];
    for (var i = 0; i < len; i++) {
        var index = nums2.indexOf(nums1[i]);
        if (index >= 0) {
            arr.push(nums1[i]);
            nums2.splice(index, 1);
        }
    }
    return arr;
};
