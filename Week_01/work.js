/*
    简单：
    用 add first 或 add last 这套新的 API 改写 Deque 的代码
    分析 Queue 和 Priority Queue 的源码
    删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过）
    旋转数组（微软、亚马逊、PayPal 在半年内面试中考过）
    合并两个有序链表（亚马逊、字节跳动在半年内面试常考）
    合并两个有序数组（Facebook 在半年内面试常考）
    两数之和（亚马逊、字节跳动、谷歌、Facebook、苹果、微软在半年内面试中高频常考）
    移动零（Facebook、亚马逊、苹果在半年内面试中考过）
    加一（谷歌、字节跳动、Facebook 在半年内面试中考过）
     
    中等：
    设计循环双端队列（Facebook 在 1 年内面试中考过）

    困难：
    接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）
    下周预习
    预习题目：
    有效的字母异位词
    二叉树的中序遍历
    最小的 k 个数

    训练场练习（选做）
    学有余力的同学，可以挑战以下【训练场】模拟面试真题：
    数组相关：
    选择餐馆
    链表相关：
    合并两个有序链表
    栈相关：
    视野总和
    每日在线用户量
    队列相关：
    数据流查询

    // 数组链表跳表
    Array 实战题目：
    两数之和（近半年内，字节跳动在面试中考查此题达到 152 次）
    盛最多水的容器（腾讯、百度、字节跳动在近半年内面试常考）
    移动零（华为、字节跳动在近半年内面试常考）
    爬楼梯（阿里巴巴、腾讯、字节跳动在半年内面试常考）
    三数之和（国内、国际大厂历年面试高频老题）

    Linked List 实战题目：
    反转链表（字节跳动、亚马逊在半年内面试常考）
    两两交换链表中的节点（阿里巴巴、字节跳动在半年内面试常考）
    环形链表（阿里巴巴、字节跳动、腾讯在半年内面试常考）
    环形链表 II
    K 个一组翻转链表（字节跳动、猿辅导在半年内面试常考）


    // 栈队列双端队列
    预习题目：
    有效的括号（亚马逊、JPMorgan 在半年内面试常考）
    最小栈（亚马逊在半年内面试常考）
    实战题目：
    柱状图中最大的矩形（亚马逊、微软、字节跳动在半年内面试中考过）
    滑动窗口最大值（亚马逊在半年内面试常考）
    课后作业：
    用 add first 或 add last 这套新的 API 改写 Deque 的代码
    分析 Queue 和 Priority Queue 的源码
    设计循环双端队列（Facebook 在 1 年内面试中考过）：
    接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）
    说明：改写代码和分析源码这两项作业，同学们需要在第 1 周的学习总结中完成。如果不熟悉 Java 语言，这两项作业可选做。
*/

// 队列现先进先出
function Queue() {
    let items = [];
    this.enqueue = function(x) {
        this.items.push(x);
    }
    this.dequeue = function(x) {
        this.items.shift();
    }
    this.front = function() {
        return this.items[0];
    }
    this.isEmpty = function() {
        return this.items.length === 0;
    }
    this.clear = function() {
        items = [];
    }
    this.size = function() {
        return items.length;
    }
    this.print = function() {
        console.log(items.toString());
    }
}
// 优先队列 机场登机/急诊室挂号
function PriorityQueue() {
    let items = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;
        if (items.length === 0) {
            items.push(queueElement);
        } else {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (items[i].priority > queueElement.priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
        }
        if (!added) items.push(queueElement);
    }
    this.dequeue = function(x) {
        this.items.shift();
    }
    this.front = function() {
        return this.items[0];
    }
    this.isEmpty = function() {
        return this.items.length === 0;
    }
    this.clear = function() {
        items = [];
    }
    this.size = function() {
        return items.length;
    }
    this.print = function() {
        console.log(items.toString());
    }
}
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('YCN1', 1);
priorityQueue.enqueue('YCN2', 2);
priorityQueue.enqueue('YCN3', 1);
priorityQueue.print();
// 循环队列

// 11. 盛最多水的容器 https://leetcode-cn.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 夹逼法
    let i = 0; 
    let j = height.length - 1;
    let max = 0;
    while (i < j) {
        if (height[i] < height[j]) {
            max = Math.max(max, height[i] * (j - i));
            i++;
        } else {
            max = Math.max(max, height[j] * (j - i));
            j--;
        }
    }
    return max;
};

// 15. 三数之和 https://leetcode-cn.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    const len = nums.length;
    if(nums == null || len < 3) return res;
    nums.sort((a, b) => a - b);
    // nums = new Set(nums.sort((a, b) => a - b));
    for (let i = 0; i < len; i++) {
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[l + 1]) l++;
                while(l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
            else if (sum < 0) l++;
            else if (sum > 0) r--;
        }
    }
    return res;
};
// 283. 移动零 https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 辅助下标
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[j] = nums[i];
            j++
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
};
// [641. 设计循环双端队列](https://leetcode-cn.com/problems/design-circular-deque/)
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.Cdeque = [];
    this.max = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.Cdeque.length === this.max) return false;
    this.Cdeque.unshift(value);
    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.Cdeque.length === this.max) return false;
    this.Cdeque.push(value);
    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.Cdeque.length === 0) return false;
    this.Cdeque.shift();
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.Cdeque.length === 0) return false;
    this.Cdeque.pop();
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.Cdeque.length === 0) return -1;
    return this.Cdeque[0];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.Cdeque.length === 0) return -1;
    return this.Cdeque[this.Cdeque.length - 1];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.Cdeque.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.Cdeque.length === this.max;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */