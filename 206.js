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
var reverseList = function(head) {
    var current = head,
        arr = [],
        newListNode = new ListNode();
    while(current) {
        arr.push(current.val);
        current = current.next;
    }
    arr.reverse();
    cur = newListNode;
    arr.forEach(function(val) {
        var temp = new ListNode(val);
        cur.next = temp;
        cur = cur.next;
    });
    return newListNode.next;
};
