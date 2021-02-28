学习笔记
##### 贪心算法和动态规划及回溯
##### DFS和BFS代码模板
[DFS 代码模板（递归写法、非递归写法）](https://shimo.im/docs/UdY2UUKtliYXmk8t/read)
```
const visited = new Set();
const dfs = (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    dfs(node.left);
    dfs(node.right);
}
```
[BFS 代码模板 ](https://shimo.im/docs/UdY2UUKtliYXmk8t/read)
```
const bfs = (root) => {
    let result = [], quene = [root];
    while(quene.length) {
        let level = [], n = quene.length;
        for (let i = 0; i < n; i++) {
            let node = quene.pop();
            level.push(node.val);
            if (node.left) quene.unshift(node.left);
            if (node.right) quene.unshift(node.right);
        }
        result.push(level);
    }
    return result;
}
```