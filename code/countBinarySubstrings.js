// 696.计数二进制子串
// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
// 并且这些子字符串中的所有0和所有1都是组合在一起的。
// 重复出现的子串要计算它们出现的次数。

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

function countBinarySubstrings (s) {
  let prev = 0; let cur = 1; let total = 0

  for (let i = 0, len = s.length - 1; i < len; i++) {
    if (s[i] === s[i + 1]) {
      cur++
    } else {
      prev = cur
      cur = 1
    }

    if (prev >= cur) {
      total++
    }
  }

  return total
}

module.exports = countBinarySubstrings
