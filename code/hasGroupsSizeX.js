// 914. 卡牌分组
var hasGroupsSizeX = function (deck) {
  var result = {}

  for (let i = 0; i < deck.length; i++) {
    if (result[deck[i]]) {
      result[deck[i]]++
    } else {
      result[deck[i]] = 1
    }
  }

  result = Object.values(result)
  const min = Math.min(...result)

  if (min < 2) {
    return false
  }

  for (let i = 2; i <= min; i++) {
    if (result.every(item => item % 2 === 0)) {
      return true
    }
  }

  return false
}

console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]))
