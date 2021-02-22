// [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 1. 暴力 O(n) 超时
    let res = 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
     for (let i = 0; i < n; i++) {
        res = res * x;
     }
     return res;
    // 2. 分治 Olog(n) // 递归模板 1. 终止 2. 子问题 3. 下探子问题，合并 4. 清理
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    function fb(x, n) {
        if (n === 0) return 1;
        let subres = fb(x, parseInt(n / 2));
        return (n % 2 === 0) ? subres * subres : subres * subres * x;;
    }
    return fb(x, n);
};
// [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description)
