import { points } from "./points"

test("points should return the correct set of points", () => {
  expect(points([5, 2, "C", "D", "+"])).toEqual([5, 10, 15])
})
