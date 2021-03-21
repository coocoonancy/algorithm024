// [最小路径和（亚马逊、高盛集团、谷歌在半年内面试中考过）](https://leetcode-cn.com/problems/minimum-path-sum/)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0;
    }
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== 0 && j !== 0) {
                grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1]);
            } else if (i === 0 && j !== 0) {
                grid[i][j] = grid[i][j-1] + grid[i][j];
            } else if (i !== 0 && j === 0) {
                grid[i][j] = grid[i-1][j] + grid[i][j];
            } else if (i === 0 && j === 0) {
                grid[i][j] = grid[i][j];
            }
        }
    }
    return grid[m - 1][n - 1];
};
// [任务调度器（Facebook 在半年内面试中常考）](https://leetcode-cn.com/problems/task-scheduler/)
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let obj = {};
    const len = tasks.length;
    for (let task of tasks) {
        obj[task] = obj[task] ? (obj[task] + 1) : 1;
    }
    let counts = Object.values(obj);
    let max = Math.max.apply(null, counts);
    let maxCount = counts.filter(item => item === max).length;
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length);
};
// [最大正方形（华为、谷歌、字节跳动在半年内面试中考过）](https://leetcode-cn.com/problems/maximal-square/)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let dp = [];
    let max = Number.MIN_VALUE;
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows + 1; i++) {
        if (i === 0) dp[i] = new Array(cols + 1).fill(0);
        else dp[i] = [0];
    }
    // 动态规划方程 dp[i][j]为matrix[i][j]右下角最大的正方形
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < cols + 1; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max = Math.max(max, dp[i][j])
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return max * max;
};
// [解码方法（亚马逊、Facebook、字节跳动在半年内面试中考过）](https://leetcode-cn.com/problems/decode-ways/)
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0 || s[0] === '0') return 0;
    let dp = new Array(s.length + 1);
    dp[0]=1;
    dp[1]=1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 1] === '2') dp[i+1] = dp[i-1];
            else return 0;
        } else if (s[i - 1] === '1' || ((s[i - 1] === '2') && (s[i] - 0 <= 6))) {
            dp[i+1] = dp[i] + dp[i - 1];
        } else {
            dp[i+1] = dp[i];
        }
    }
    return dp[s.length];
  };
