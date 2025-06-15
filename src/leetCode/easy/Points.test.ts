import { points } from "./Points"

test("It should return the correct set of points", () => {
  expect(points([5, 2, "C", "D", "+"])).toEqual([5, 10, 15])
})
