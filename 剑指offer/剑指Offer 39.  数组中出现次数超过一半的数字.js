//剑指 Offer 39. 数组中出现次数超过一半的数字
// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//  

// 示例 1:

// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2



// 解题思路： 使用sort方法排序， 再返回数组下标一半的那个元素即可

// 代码如下：


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    return nums[Math.floor(nums.length / 2)]
};
// 时间击败99% 空间击败13%

