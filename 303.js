/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.val = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var result = 0;
    for (var k = i; k <= j; k++){
        result += this.val[k];
    }
    return result;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
