// [350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    /*
        1. hash表
    */
    let isminlen = nums1.length >= nums2.length;
    let arr1 = isminlen ? nums2 : nums1;
    let arr2 = isminlen ? nums1 : nums2;
    let res = [];
    let hashmap = {};
    for (let i = 0; i < arr1.length; i++) {
        hashmap[arr1[i]] = hashmap[arr1[i]] ? hashmap[arr1[i]] + 1 : 1;
    }
    for (let j = 0; j < arr2.length; j++) {
        if (hashmap[arr2[j]]) {
            res.push(arr2[j]);
            hashmap[arr2[j]]--;
        }
    }
    return res;
};