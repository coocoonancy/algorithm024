/*
    实战题目 / 课后作业:
    有效的字母异位词（亚马逊、Facebook、谷歌在半年内面试中考过）
    字母异位词分组（亚马逊在半年内面试中常考）
    两数之和（亚马逊、字节跳动、谷歌、Facebook、苹果、微软、腾讯在半年内面试中常考）
    参考链接:
    养成收藏精选代码的习惯（示例）
    参考链接:
    二叉搜索树 Demo
    参考链接:
    树的遍历 Demo
    实战题目 / 课后作业:
    二叉树的中序遍历（亚马逊、微软、字节跳动在半年内面试中考过）
    二叉树的前序遍历（谷歌、微软、字节跳动在半年内面试中考过）
    N 叉树的后序遍历（亚马逊在半年内面试中考过）
    N 叉树的前序遍历（亚马逊在半年内面试中考过）
    N 叉树的层序遍历
    参考链接:
    维基百科：堆（Heap）
    堆的实现代码： https://shimo.im/docs/Lw86vJzOGOMpWZz2/
    实战例题:
    最小的 k 个数（字节跳动在半年内面试中考过）
    滑动窗口最大值（亚马逊在半年内面试中常考）
    课后作业:
    HeapSort ：自学 https://www.geeksforgeeks.org/heap-sort/
    丑数（字节跳动在半年内面试中考过）
    前 K 个高频元素（亚马逊在半年内面试中常考）
    本周作业
    简单：
    写一个关于 HashMap 的小总结。
    说明：对于不熟悉 Java 语言的同学，此项作业可选做。
    有效的字母异位词（亚马逊、Facebook、谷歌在半年内面试中考过）
    两数之和（近半年内，亚马逊考查此题达到 216 次、字节跳动 147 次、谷歌 104 次，Facebook、苹果、微软、腾讯也在近半年内面试常考）
    N 叉树的前序遍历（亚马逊在半年内面试中考过）
    HeapSort ：自学 https://www.geeksforgeeks.org/heap-sort/
    中等：
    字母异位词分组（亚马逊在半年内面试中常考）
    二叉树的中序遍历（亚马逊、字节跳动、微软在半年内面试中考过）
    二叉树的前序遍历（字节跳动、谷歌、腾讯在半年内面试中考过）
    N 叉树的层序遍历（亚马逊在半年内面试中考过）
    丑数（字节跳动在半年内面试中考过）
    前 K 个高频元素（亚马逊在半年内面试中常考）
    下周预习
    预习题目：
    爬楼梯
    括号生成
    Pow(x, n)
    子集
    N 皇后
    训练场练习（选做）:
    学有余力的同学，可以挑战以下【训练场】模拟面试真题：
    哈希相关：
    找雪花:
    树相关：
    安装路灯:
    二叉搜索树相关：
    二叉搜索树的后序遍历序列
    堆相关：
    最火视频榜单
    图相关：
    手游上线
*/

// [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    const inorder = (root) => {
        if (!root) return;
        if (root.left) inorder(root.left);
        arr.push(root.val);
        if (root.right) inorder(root.right);
    }
    inorder(root);
    return arr;
};
// [590. N叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let arr = [];
    const porder = (root) => {
        if (!root) return;
        if (root.children && root.children.length > 0) {
            for (let i = 0; i < root.children.length; i++) {
                porder(root.children[i]);
            }
        }
        arr.push(root.val);
        
    }
    porder(root);
    return arr;
};
// [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/submissions/)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let arr = [];
    const preorder = (root) => {
        if (!root) return;
        arr.push(root.val);
        if (root.left) preorder(root.left);
        if (root.right) preorder(root.right);
    }
    preorder(root);
    return arr;
};
// [589. N叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/)
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    let porder = (root) => {
        if (!root) return;
        res.push(root.val);
        if (root.children && root.children.length > 0) {
            for(let i = 0; i < root.children.length; i++) {
                porder(root.children[i]);
            }
        }
    }
    porder(root);
    return res;
};

// [429. N 叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} r
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr = [];
    if (!root) return arr;
    let lorder = (r = root, count = 0) => {
        if (count >= arr.length) arr.push([r.val]);
        else arr[count].push(r.val);
        if (r.children && r.children.length > 0) {
            for (let child of r.children) {
                lorder(child, count + 1);
            }
        }
    }
    lorder();
    return arr;
};