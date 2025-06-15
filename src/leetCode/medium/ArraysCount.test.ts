import { arraysCount } from "./ArraysCount"

test("It should return 2, 0, 2 from the queries ab, cd, ef", () => {
  expect(arraysCount(["ab", "ef", "ab", "ef"], ["ab", "cd", "ef"])).toEqual([
    2, 0, 2,
  ])
})
