// [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/submissions/)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        arr[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        arr[0][j] = 1;
    }
    for (let i = 1; i < m; i++) { 
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i][j - 1] + arr[i - 1][j];
        }
    }
    return arr[m - 1][n - 1];
};