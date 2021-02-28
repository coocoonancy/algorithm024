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

// [22. 括号生成]https://leetcode-cn.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 递归 1. 左括号个
    const arr = [];
    let dg = (l, r, n, s) => {
        if (l === n && r === n) {
            return arr.push(s);
        }
        if (l < n) dg(l + 1, r, n, s + '(');
        if (l > r) dg(l, r + 1, n, s + ')');
    }
    dg(0, 0, n, '');
    return arr;
};
// [51. N 皇后](https://leetcode-cn.com/problems/n-queens/solution/)
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    let cols = new Set(); // 列
    let pie = new Set(); // 撇
    let na = new Set(); // 捺

    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');
    }
    const recursion = (row) => {
        // terminator
        if (row === n) {
            let strBoard = board.slice();
            for (let i = 0; i < n; i++) {
                strBoard[i] = strBoard[i].join('');
            }
            res.push(strBoard);
            return;
        }
        // process
        for (let col = 0; col < n; col++) {
            if (!cols.has(col) && !pie.has(row + col) && !na.has(row - col)) {
                board[row][col] = 'Q';
                cols.add(col);
                pie.add(row + col);
                na.add(row - col);
                recursion(row + 1);
                board[row][col] = '.';
                cols.delete(col);
                pie.delete(row + col);
                na.delete(row - col);
            }
        }
    }
    recursion(0);
    return res;
};