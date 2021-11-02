/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    /* 題目本身已經轉為ListNode的型態 所以省略js裡本來應該先建立的這個class
    class ListNode {
        constructor(data, next = null) {
            this.data = data
            this.next = next
        }
    }
    */
    const ret = new ListNode(0, head);
    let cur = ret; 
    while(cur.next) {
        if(cur.next.val == val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
}