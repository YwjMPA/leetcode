/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = -Infinity;
    var r = (cur) => {
        if (cur) {
            var left = Math.max(0, r(cur.left));
            var right = Math.max(0, r(cur.right));
            max = Math.max(max, left+right+cur.val);
            return Math.max(left,right) + cur.val;
        }else{
            return 0;
        }
    };
    r(root);
    return max;
};
