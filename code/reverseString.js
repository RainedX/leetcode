// 557. 反转字符串中的单词 III
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc"

const reverseWords = function (str) {
  let strArr = str.split(' ')

  let result = strArr.map(item => {
    return item.split('').reverse().join('')
  })

  return result.join(' ')
}

module.exports = reverseWords
