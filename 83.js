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
var deleteDuplicates = function(head) {
    var current = head;
    while(current){
        if (current.next && current.next.val == current.val){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return head;
};
