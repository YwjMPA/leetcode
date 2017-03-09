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
var isPalindrome = function(head) {
    var current = head,
        arr = [];
    while(current) {
        arr.push(current.val);
        current = current.next;
    }
    var len = arr.length;
    for (var i = 0; i < len / 2; i++) {
       if (arr[i] != arr[len - i - 1]) {
           return false;
       }
    }
    return true;
};
