// [860. 柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for (let bill of bills) {
        if (bill === 5) five++;
        else if (bill === 10) {
            five--;
            ten++;
        } else {
            if (ten > 0) {
                ten--;
                five--;
            } else {
                five -= 3;
            }
        }
        if (five < 0 || ten < 0) return false;
    }
    return true;
};
// [455. 分发饼干](https://leetcode-cn.com/problems/assign-cookies/)
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 小饼干喂胃口小孩子
    g.sort((a,b) => (a-b));
    s.sort((a,b) => (a-b));
    let g1 = 0;
    let s1 = 0;
    while(g1 < g.length && s1 < s.length) {
        if (g[g1] <= s[s1]) {
            g1++
        }
        s1++;
    }
    return g1;
    // 大饼干喂大孩子
    // g.sort((a,b) => (a-b));
    // s.sort((a,b) => (a-b));
    // let index = s.length - 1;
    // let res = 0;
    // for (let i = g.length - 1; i >= 0; i--) {
    //     if (i >= 0 && s[index] >= g[i]) {
    //         res++;
    //         index--;
    //     }
    // }
    // return res;
};
// [874. 模拟行走机器人](https://leetcode-cn.com/problems/walking-robot-simulation/)
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let x = 0, y = 0, di = 0;
    let max = 0;
    let obsSet = new Set(obstacles.map(obs => obs[0].toString() + '_' + obs[1].toString()));
    for (let cmd of commands) {
        if (cmd === -2) {
            // 往左
            di = (di + 3) % 4;
        } else if (cmd === -1) {
            // 往右
            di = (di + 1) % 4;
        } else {
            for (let k = 0; k < cmd; k++) {
                let nx = x + dx[di];
                let ny = y + dy[di];
                let curobs = nx.toString() + '_' + ny.toString();
                if (!obsSet.has(curobs)) {
                    x = nx;
                    y = ny;
                    max = Math.max(max, x * x + y * y);
                }
            }
        }
    }
    return max;
};
// [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (i, j) => {
        if (i < 0 || i === len || j < 0 || j === grid[i].length || grid[i][j] === '0') return 0;
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        return 1;
    }
    const len = grid.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            count += dfs(i, j);
        }
    }
    return count;

};