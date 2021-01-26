// [412. Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/)
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // 最小公倍数15
    const arr = [
        "",
        "",
        "Fizz",
        "",
        "Buzz",
        "Fizz",
        "",
        "",
        "Fizz",
        "Buzz",
        "",
        "Fizz",
        "",
        "",
        "FizzBuzz"
    ];
    let resArr = [];
    for (let i = 0; i < n; i++) {
        const index = i % 15;
        resArr[i] =  arr[index] || (i + 1) + '';
    }
    return resArr;
    
    // Array.from知识点
    // return Array.from({ length: n }, (item, i) => (item = (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') ? item : '' + i);


    // 常规方法 性能差
    // var fizzBuzz = function(n) {
    //     const arr = [];
    //     for (let i = 1; i <= n; i++) {
    //         if (i % 3 === 0 && i % 5 === 0) {
    //             arr[i - 1] = 'FizzBuzz';
    //         } else if (i % 3 === 0) {
    //             arr[i - 1] = 'Fizz';
    //         } else if (i % 5 === 0) {
    //             arr[i - 1] = 'Buzz';
    //         } else {
    //             arr[i - 1] = i + '';
    //         }
    //     }
    //     return arr;
    // };
};

// [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, m = 1, i = 1) {
    // 尾递归 没看懂
    if (n === 1 || n === 0) return m;
    return climbStairs(n - 1, m + i, m);
};

var climbStairs = function(n) {
    // 类推
    if (n === 1 || n === 0) return ;
    return climbStairs(n - 1) + climbStairs(n - 2);
};