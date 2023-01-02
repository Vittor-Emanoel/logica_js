const nums = [1, 2, 3, 4, 5]

var runningSum = function (nums) {
  let runningSum = []
  let right = 1
  runningSum[0] = nums[0]
  while (right < nums.length) {
    let sliced = nums.slice(0, right + 1)
    let sum = sliced.reduce((a, b) => a + b, 0)
    runningSum[right] = sum
    right++
  }
  return runningSum
}
