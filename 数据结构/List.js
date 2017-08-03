/** 输入两个链表，分别代表两个数字的倒序排列如下： 342+465 = 807;
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8
 * 
 * ListNode类用来生成具体的节点
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

 function ListNode(val) {
   this.val = val;
   this.next = null;
 }

 var addTwoNumbers = function(l1, l2) {
  let nList = new ListNode(0);
  let p = nList;
  
  let c1 = l1, c2 = l2;
  let floor = 0, sum = 0;
  
  while (c1 && c2) {
    sum += c1.value + c2.value;
    if (sum > 10) {
      sum -= 10;
      floor = 1;
    }
    let nEle = new ListNode(sum);
    p.next = nEle;
    p = p.next;
    c1 = c1.next, c2 = c2.next;
    sum = 1;
    floor = 0;
  }
 }
