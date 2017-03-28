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
var inorderTraversal = function(root) {
    var cur = root,
        list = [];
    var r = (cur, list) => {
     if (cur) {
         r(cur.left, list);
         list.push(cur.val);
         r(cur.right, list);
     }
    };
    r(root, list);
    return list;
};
