学习笔记
##### 递归的实现、特性以及思维要点
###### 注意点
1. 不要人肉递归
2. 找最近重复点
3. 数学归纳思维
###### 代码模板
1. 终止条件
2. 处理逻辑
3. 下探一层
4. 清理操作
```
const recursion = (level, param) => {
    // 终止条件
    if (level > MAX_LEVEL) {
        // prosess_result
        return
    }
    // 处理逻辑
    process(level, param)
    // 下探一层
    recursion(level + 1, param)
    // 清理操作
    ......
}
```
##### 分治和回溯
