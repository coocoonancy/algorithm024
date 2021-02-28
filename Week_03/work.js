// [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)
// [236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 如果root
    if (!root || root === p || root === q ) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left ? left : right;
};
// [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null;
    const root = new TreeNode(preorder[0]);
    const index = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};
// [77. 组合](https://leetcode-cn.com/problems/combinations/submissions/)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    const dfs = (start, path) => {
        if (path.length === k) {
            return res.push(path.slice());
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            dfs(i + 1, path);
            path.pop(); // 不知道为什么呢
        }
    }
    dfs(1, []);
    return res;
};
// [46. 全排列](https://leetcode-cn.com/problems/permutations/submissions/)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    const visited = {};
    const dfs = (path) => {
        if (path.length === nums.length) return res.push(path.slice());
        for (const num of nums) {
            if (visited[num]) continue;
            path.push(num);
            visited[num] = true;
            dfs(path);
            visited[num] = false;
            path.pop();
        }
    }
    dfs([]);
    return res;
};
// [47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/submissions/)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    let visited = new Array(nums.length);
    const dfs = (path) => {
        if (path.length === nums.length) return res.push(path.slice());
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1] && i - 1 >= 0 && !visited[i - 1]) continue;
            if (visited[i]) continue;
            path.push(nums[i]);
            visited[i] = true;
            dfs(path);
            path.pop();
            visited[i] = false;
        }
    }
    dfs([]);
    return res;
};