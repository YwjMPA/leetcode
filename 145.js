/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  var list = [];
  var r = (cur, list) => {
    if (cur) {
        r(cur.left, list);
        r(cur.right, list);
        list.push(cur.val);
    }
  };
  r(root, list);
  return list;
};
