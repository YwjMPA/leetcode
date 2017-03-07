/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var current = head,
        arr = [],
        newList = new ListNode();
    if (head === null) {
        return;
    }
    while(current) {
        arr.push(current.val);
        current = current.next;
    }

    for (var i = 0, cur = newList, len = arr.length; i < len; i++ ) {
        if (i % 2 === 0) {
            cur.next = new ListNode(arr[i / 2]);
            cur = cur.next;
        }else{
            cur.next = new ListNode(arr[len - Math.ceil(i / 2)]);
            cur = cur.next;
        }
    }
    head.next = newList.next.next;
};
