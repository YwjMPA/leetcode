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
        index = 0;
    while (current) {
        index++;
        current = current.next;
    }
    if (index === n) {
        head = head.next;
    }
    current = head,
    indexTwo = 0;
    while (current) {
        indexTwo++;
        if (indexTwo == index - n ) {
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return head;
};
