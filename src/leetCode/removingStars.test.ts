import { removingStars } from "./removingStars"

test('It should return "lecoe" from "leet**cod*e"', () => {
  expect(removingStars("leet**cod*e")).toBe("lecoe")
})
