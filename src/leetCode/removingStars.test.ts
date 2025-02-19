import { removingStars } from "./removingStars"

test("removingStars should return lecoe", () => {
  expect(removingStars("leet**cod*e")).toBe("lecoe")
})
