/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = [];
    var r = (res, root, height) => {
        if (root === null) return;
        if (height >= res.length) {
            res.push([]);
        }
        res[height].push(root.val);
        r(res, root.left, height+1);
        r(res, root.right, height+1);
    };
    r(res, root, 0);
    return res;


};
