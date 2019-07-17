// 605. 种花问题

var canPlaceFlowers = function (flowerbed, n) {
  let total = 0
  if (flowerbed.length < 2) {
    return false
  }
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    flowerbed[0] = 1
    total++
  }
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      total++
    }
  }
  if (flowerbed[flowerbed.length - 2] === 0 && flowerbed[flowerbed.length - 1] === 0) {
    flowerbed[flowerbed.length - 1] = 1
    total++
  }
  return total
}

canPlaceFlowers([0, 0, 0, 0, 0], 2)

// 1 00 00  00 00  00 00 01
// 1 0
// 2 0
// 3 1
// 4 1
// 5 2
// 6 2
// 7 3
// 8 3
// 9 4
// 10 4
// 11 5
// 12 5
// 13 6
// 14 6

// n % 2 === 0
