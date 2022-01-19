// 387. 字符串中的第一个唯一字符 https://leetcode-cn.com/problems/first-unique-character-in-a-string/
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// 示例：

// s = "leetcode"
// 返回 0

// s = "loveleetcode"
// 返回 2
// 使用字典解决，解法思想详情请看下方代码的注释


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map()
  // 创建一个字典
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // 如果有重复出现的字符，设置为false
      map.set(s[i], false)
    } else {
      // 首次出现的字符，设置为值为该字符的下标index
      map.set(s[i], i)
    }
  }
  const result = Array.from(map).find(item => item[1] !== false)
  // 使用find方法遍历字典转换成的数组
  return result ? result[1] : -1
};
// 时间复杂度为O(n),n为字符串长度，空间复杂度使用了字典，最差为每一个字符都不相同，也是O(n)