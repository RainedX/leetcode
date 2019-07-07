var letterCombinations = function (digits) {
  let strArr = digits.split('')
  let result = []
  let table = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  for (let i = 0; i < strArr.length; i++) {
    result.push(table[strArr[i]])
  }

  if (result.length === 0) {
    return []
  }
  if (result.length === 1) {
    return result[0].split('')
  }

  let comp = (arr) => {
    let temp = []

    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }

    arr.splice(0, 2, temp)

    if (arr.length > 1) {
      return comp(arr)
    } else {
      return arr[0]
    }
  }

  return comp(result)
}
