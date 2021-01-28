// [412. Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/)
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // 最小公倍数15
    const arr = [
        "",
        "",
        "Fizz",
        "",
        "Buzz",
        "Fizz",
        "",
        "",
        "Fizz",
        "Buzz",
        "",
        "Fizz",
        "",
        "",
        "FizzBuzz"
    ];
    let resArr = [];
    for (let i = 0; i < n; i++) {
        const index = i % 15;
        resArr[i] =  arr[index] || (i + 1) + '';
    }
    return resArr;
    
    // Array.from知识点
    // return Array.from({ length: n }, (item, i) => (item = (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') ? item : '' + i);


    // 常规方法 性能差
    // var fizzBuzz = function(n) {
    //     const arr = [];
    //     for (let i = 1; i <= n; i++) {
    //         if (i % 3 === 0 && i % 5 === 0) {
    //             arr[i - 1] = 'FizzBuzz';
    //         } else if (i % 3 === 0) {
    //             arr[i - 1] = 'Fizz';
    //         } else if (i % 5 === 0) {
    //             arr[i - 1] = 'Buzz';
    //         } else {
    //             arr[i - 1] = i + '';
    //         }
    //     }
    //     return arr;
    // };
};

// [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, m = 1, i = 1) {
    // 尾递归 没看懂
    if (n === 1 || n === 0) return m;
    return climbStairs(n - 1, m + i, m);
};

var climbStairs = function(n) {
    // 类推
    if (n === 1 || n === 0) return ;
    return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minstack = [];
};
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minstack.length === 0 || this.minstack[this.minstack.length - 1] >= x) {
        this.minstack.push(x);
    }
}
MinStack.prototype.pop = function() {
    let x = this.stack.pop();
    if (x !== 0 && this.minstack[this.minstack.length - 1] === x) {
        this.minStack.pop()
    }

}
MinStack.prototype.top = function() {
    return this.stack[this.stac.length - 1];
}
MinStack.prototype.min = function() {
    return this.minstack[this.minstack.length - 1];
}

// 24. 两两交换链表中的节点 https://leetcode-cn.com/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

};
// 21. 合并两个有序列表 https://leetcode-cn.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

};