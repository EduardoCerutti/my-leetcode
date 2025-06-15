// Given an array [-2,1,-3,4,-1,2,1,-5,4] it should return 6 because that's the
// biggest sum it can get sequentialy adding this subarray [4,-1,2,1]

// Space complexity:
// Time complexity:
export function maximumSubarray(arr: number[]) {
  let sum = 0

  // start from the middle when the summed number is less than the previous
  // remove the lower farthest number

  // length = 9 (9 -1) / 2 = 4
  // start from position 4
  // posotion 4 is -1

  // 4 -1  = 3
  // 4 -1 2 = 5
  // -3 4 -1 2 = 1
  // 4 -1 2 1 = 6
  // 4 -1 2 1 -5 = 1
  // return 6

  return sum
}
