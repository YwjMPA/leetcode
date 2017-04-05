/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head,
        fast = head;
    while (slow && fast) {
        slow = slow.next;
        if (!fast.next) return false;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
};
