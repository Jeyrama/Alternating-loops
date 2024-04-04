/*
function combine()
combines arrays by alternatingly taking elements passed to it.

Example:
  combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
  combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
  combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]

Arrays can have different lengths.
*/


// Solution

function combine(...arrs) {
  let max = arrs.reduce((n, arr) => Math.max(n, arr.length), 0)
  let res = []
  for (let i = 0; i < max; i++) {
    for (let arr of arrs) {
      if (i in arr) res.push(arr[i])
    }
  }
  return res
}

// or