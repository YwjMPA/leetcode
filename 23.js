/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len = lists.length;
    if (lists === null || len === 0) return null;

    var merge = function(l1, l2) {
      if (l1 === null) return l2;
      if (l2 === null) return l1;
      if (l1.val > l2.val) {
          l2.next = merge(l1, l2.next);
          return l2;
      }else{
          l1.next = merge(l1.next, l2);
          return l1;
      }
    };
    var l = 0,
        r = len - 1;
    while(l < r) {
        while(l < r) lists[l] = merge(lists[l++], lists[r--]);
        l = 0;
    }
    return lists[0];
};
