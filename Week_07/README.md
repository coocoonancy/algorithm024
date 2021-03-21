学习笔记
###### 参考链接
[BFS 代码模板](https://shimo.im/docs/ZBghMEZWix0Lc2jQ/read)
```
const bfs = (root) => {
    let result = [], quene = [root];
    while(quene.length > 0) {
        let level = [], len = quene.length;
        for (let i = 0; i < len; i++>) {
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
[DFS 代码模板](https://shimo.im/docs/UdY2UUKtliYXmk8t/read)
```
const visited = new Set();
const dfs = (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    dfs(node.left);
    dfs(node.right);
}

```
[AlphaZero Explained](https://nikcheerla.github.io/deeplearningschool/2018/01/01/AlphaZero-Explained/)
[棋类复杂度](https://en.wikipedia.org/wiki/Game_complexity)

###### 双向BFS

###### 剪枝

###### 启发式搜索
- 基于BFS 智能搜索 根据某个条件 不断优化搜索的方向
- 通过优先级不断去找
- 模板
- 估计函数
启发式函数：h(n) 它用来评价哪些节点是我们要找的节点，h(n)返回一个非负实数，也可以是从节点n的目标节点路径的估价成本。
启发式函数是一种告知搜索方向的方法。它提供来一种明智的方法来猜测哪个邻居节点会导向一个目标。
```
function aStarSearch(graph, start, end) {
    // graph 使用二维数组来存储数据  
    let collection = new SortedArray([start], (p1, p2) => distance(p1) - distance(p2));  
    while (collection.length) {    
    let [x, y] = collection.take();    
        if (x === end[0] && y === end[1]) { return true; }    
        insert([x - 1, y]);    
        insert([x + 1, y]);    
        insert([x, y - 1]);    
        insert([x, y + 1]);  
    }
     return false;  
     function distance([x, y]) {    
        return (x - end[0]) ** 2 - (y - end[1]) ** 2;  
     }  
     function insert([x, y]) {    
        if (graph[x][y] !== 0) return;    if (x < 0 || y < 0 || x >= graph[0].length || y > graph.length) {      
            return;    
        }    
        graph[x][y] = 2;    
        collection.insert([x, y]);  
    }}
    class SortedArray {  
        constructor(data, compare) {    
            this.data = data;    
            this.compare = compare;  
        }  
        // 每次取最小值  
        take() {    
            let min = this.data[0];    
            let minIndex = 0;    
            for (let i = 1; i < this.data.length; i++) {      
                if (this.compare(min, this.data[i]) > 0) {        
                    min = this.data[i];        
                    minIndex = i;      
                }    
            }    
            this.data[minIndex] = this.data[this.data.length - 1];    
            this.data.push();    return min;  
        }  
        insert(value) {    this.data.push(value);  }  
        get length() {    return this.data.length;  }
    }
```
###### 参考链接
[A* 代码模板](https://shimo.im/docs/8CzMlrcvbWwFXA8r/read)
[相似度测量方法]()
[二进制矩阵中的最短路径的 A* 解法]()
[8 puzzles 解法比较]()