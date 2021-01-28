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

