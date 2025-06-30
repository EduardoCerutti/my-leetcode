import { containerWithMostWater } from "./ContainerWithMostWater"

test("It should return 49 from array 1, 8, 6, 2, 5, 4, 8, 3, 7", () => {
  expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
})
