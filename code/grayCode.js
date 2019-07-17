// 89.格雷编码

var grayCode = function (n) {
  function backCode (n) {
    if (n === 0) {
      return [0]
    }

    if (n === 1) {
      return [0, 1]
    }

    let arr = backCode(n - 1)
    let newArr1 = []; let newArr2 = []

    for (let i = 0; i < arr.length; i++) {
      newArr1.push('0' + arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
      newArr2.push('1' + arr[i])
    }

    return newArr1.concat(newArr2.reverse())
  }
  return backCode(n).map(item => parseInt(item, 2))
}

console.log(grayCode(3))

// 0 ===> [0]
// 1 ===> 0, 1 ===> [0, 1]
// 2 ===> 00 01 11 10 ===> [0 ,1 , 3, 2]
// 3 ===> 000 001 011 010 110 111 101 100 ===> [0, 1, 3, 2, 6, 7, 5, 4]
// 4 ===> 0000 0001 0011 0010 0110 0111 0101 0100 1100 1101 1111 1110 1010 1011 1001 1000
// [0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8]
