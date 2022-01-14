算法思想： 双指针，重点是数组是升序排列，所以使用双指针
实现步骤： 设置左右指针， 左指针设置为数组第一项，右指针开始与左指针同样的出发点，每次循环往右移一位，左右指针元素值相同，则进下一轮循环。直到遇到不同元素，左指针的下一位重新赋值，值为右指针的元素，并且左指针开始进位


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0
    // 如果是空数组，直接返回
    let index = 0
    let left = nums[index]
    // 左指针设置为数组第一项
    let right = null
    for (let i = 0; i < nums.length; i++) {
        // 右指针开始与左指针同样的出发点，每次循环往右移一位
        right = nums[i]
        if (left != right) {
            // 直到遇到不同元素，左指针的下一位重新赋值，值为右指针的元素
            nums[++index] = right
            left = nums[index]
            // 左指针开始进位
        }
    }
    // 数组开始到左指针为没有重复元素的新的子数组，长度为index + 1
    return index + 1
};
时间复杂度O(n),n为数组长度
空间复杂度O(1)
