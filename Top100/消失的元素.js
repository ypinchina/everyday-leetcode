// 448. 找到所有数组中消失的数字
// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

// 示例 1：

// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]
// 示例 2：

// 输入：nums = [1,1]
// 输出：[2]

// 提示：

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。

// 本题要符合要求其实还是挺难的， 空间复杂度除了返回的新数组外，不能额外开辟空间，时间复杂度需要是O(n)
// 因此不能用集合还有字典的方式

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // 遍历数组，给已经出现的数字所在的位置数改为负数，
    // 但是遇到下标为负的时需要取绝对值，这就是负数的好处。
    // 如果对应位置的值已经是负的，则说明该数已经出现过
    // 还有一个坑点是，该数组是从1-n ，而不是从0开始的
    let index = Math.abs(nums[i]);
    if (nums[index - 1] > 0) {
      nums[index - 1] = -nums[index - 1];
    }
  }
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      arr.push(i + 1);
    }
  }
  return arr;
};
