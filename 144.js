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
var preorderTraversal = function(root) {
  var list = [];
  var r = (cur, list) => {
    if (cur) {
        list.push(cur.val);
        r(cur.left, list);
        r(cur.right, list);
    }
  };
  r(root, list);
  return list;
};
