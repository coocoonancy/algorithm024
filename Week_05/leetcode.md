###### 参考链接
[不同路径（Facebook、亚马逊、微软在半年内面试中考过）](https://leetcode-cn.com/problems/unique-paths/)
[不同路径 II （谷歌、美团、微软在半年内面试中考过）](https://leetcode-cn.com/problems/unique-paths-ii/)
[最长公共子序列（字节跳动、谷歌、亚马逊在半年内面试中考过）](https://leetcode-cn.com/problems/longest-common-subsequence/)
[MIT 动态规划课程最短路径算法](https://www.bilibili.com/video/av53233912?from=search&seid=2847395688604491997)
参考链接
###### 递归代码模板
[递归代码模板](https://shimo.im/docs/EICAr9lRPUIPHxsH/read)
```
const recursion = (level, params) =>{   // recursion terminator   
if(level > MAX_LEVEL){     process_result     return    }   // process   
current level   
process(level, params)   //drill down   
recursion(level+1, params)   //clean current level status if needed   }
```
[分治代码模板](https://u.geekbang.org/lesson/133?article=262111)
```
//Javascript
const divide_conquer = (problem, params) => {  // recursion terminator  if (problem == null) {    process_result    return  }   // process current problem  
subproblems = split_problem(problem, data)  subresult1 = divide_conquer(subproblem[0], p1)  subresult2 = divide_conquer(subproblem[1], p1)  subresult3 = divide_conquer(subproblem[2], p1)  ...  // merge  
result = process_result(subresult1, subresult2, subresult3)  // revert the current level status}
```
[动态规划定义](https://en.wikipedia.org/wiki/Dynamic_programming)