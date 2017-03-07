/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    var current = head,
        arr = [];
    while(current) {
        arr.push(current.val);
        current = current.next;
    }
    arr.sort(function(a, b) {
       return a - b;
    });
    var newList = new ListNode(),
        cur = newList;
    arr.forEach(function(val) {
        cur.next = new ListNode(val);
        cur = cur.next;
    });
    return newList.next;
};
