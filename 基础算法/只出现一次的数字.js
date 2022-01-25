// 136. 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map()
  nums.forEach(item => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  const result = Array.from(map).find(item => item[1] === 1) // 值为1的那一项
  return result[0]// map转换为数组之后[0]为key,[1]为value
};

// 空间复杂度很高 ，没有符合题目要求



使用集合的方式，尝试修改

var singleNumber = function (nums) {
  const set = new Set()
  nums.forEach(item => {
    if (set.has(item)) {
      set.delete(item)
    } else {
      set.add(item)
    }
  })
  return [...set][0]
};

// 依旧使用了集合这个数据结构，空间复杂度仍不符合


使用异或运算的方式

var singleNumber = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result = nums[i] ^ result
    // 或者 result ^= nums[i]
  }
  return result
};

这里关于异或基本的概念需要掌握

两个相同的数异或返回的结果是 0
0 异或任何数返回的结果都是那个数
同时异或满足交换律，分配律
因此也就是说 A ⊕ A = 0 ,0 ⊕ A = A, A ⊕ B ⊕ A = B
