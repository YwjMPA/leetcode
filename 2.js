/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode((l1.val + l2.val) % 10),
        rep = result,
        nullNode = new ListNode(0),
        node,
        val,
        newNode,
        addNode = 0;
        if (l1.val + l2.val >= 10){
            addNode = 1;
        }
        l1 = l1.next;
        l2 = l2.next;
    while (l1 || l2) {
       if (!l1){
           l1 = nullNode;
       }
       if (!l2){
           l2 = nullNode;
       }
       val = (l1.val + l2.val) % 10;
       node = val + addNode;
       if (node ==  10 ){
           addNode = 1;
           newNode = new ListNode(0);
       }else if (l1.val + l2.val >= 10) {
           addNode = 1;
           newNode = new ListNode(node);
       }else{
           addNode = 0;
           newNode = new ListNode(node);
       }
       rep.next = newNode;
       rep = rep.next;
       l1 = l1.next;
       l2 = l2.next;
    }
    if(addNode == 1){
        rep.next = new ListNode(1);
    }
    return result;
};
