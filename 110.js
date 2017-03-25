/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var depth = (cur) => {
        if (!cur) return 0;
        return Math.max(depth(cur.right), depth(cur.left)) + 1;
    };

    if (root) {
        var left = depth(root.left);
        var right = depth(root.right);
        return Math.abs(left - right) <= 1 && isBalanced(root.right) && isBalanced(root.left);
    }else{
        return true;
    }
};
