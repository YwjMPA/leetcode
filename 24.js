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
var swapPairs = function(head) {
    var current = head;
    while(current && current.next){
        var displace = current.next.val;
        current.next.val = current.val;
        current.val = displace;
        current = current.next.next;
    }
    return head;
};
