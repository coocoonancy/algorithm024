// [二叉树的层序遍历（字节跳动、亚马逊、微软在半年内面试中考过）](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description)
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // bfs
    if (!root) return [];
    let result = [], queue = [root];
    while(queue.length) {
        let level = [], n = queue.length;
        for (let i = 0; i < n; i++) {
            node = queue.pop();
            level.push(node.val);
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
        result.push(level);
    }
    return result;
};