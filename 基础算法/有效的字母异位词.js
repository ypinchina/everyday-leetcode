// 242. 有效的字母异位词 https://leetcode-cn.com/problems/valid-anagram/
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。



// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false
  // 如果两个字符串长度不相等 直接跳出
  let map = new Map()
  // 使用s串给字典建立字符与次数的对应关系
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1)
    } else {
      map.set(s[i], map.get(s[i]) + 1)
    }
  }
  // 然后用遍历t串 ，再减字典中字符出现的次数
  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j])) {
      map.set(t[j], map.get(t[j]) - 1)
    }
  }
  // 每一个字典字符的次数都为0返回true，否则返回false
  return Array.from(map).every(item => item[1] === 0)
};

// 时间复杂度O(n)，线性级，准确来说是比2n大一点，因为毕竟遍历3次，其中两次是字符串的长度n，最后一次是遍历字典
// 空间复杂度O（n），字典的大小