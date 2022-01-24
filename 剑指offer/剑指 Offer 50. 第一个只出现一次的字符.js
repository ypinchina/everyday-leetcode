// 剑指 Offer 50. 第一个只出现一次的字符 https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:

// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:

// 输入：s = "" 
// 输出：' '

// 因为周三下午要面试字节的飞书，所以做一下可能出现的题目，
// 因此有幸做到本题。
// 本题的思路和第一个出现的数字那题差不多，都是使用字典解决，
// 时间高于94 %， 空间高于14 %， 空间复杂度比较差 因为使用了字典这个数据结构


/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1)
    } else {
      map.set(s[i], false)
    }
  }
  const item = Array.from(map).find(item => item[1] === 1)
  return item ? item[0] : ' '
};
// 时间复杂度为O(n),
// 空间复杂度为O(n)
