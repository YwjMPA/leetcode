/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var invert = (root) => {
        if (!root) return root;
        [root.left, root.right] = [root.right, root.left];
        return root;
    };
    var r = (root) => {
      if (root === null) return null;
      invert(root);
      r(root.left);
      r(root.right);
    };
    r(root);
    return root;
};
