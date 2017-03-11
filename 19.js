/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var current = head,
        index = 0,
        arr = [];
    while (current) {
        arr.push(current);
        index++;
        current = current.next;
    }
    if (arr[index - n - 1]) {
        arr[index - n - 1].next = arr[index - n - 1].next.next;
    }else {
        head = head.next;
    }

    return head;
};
