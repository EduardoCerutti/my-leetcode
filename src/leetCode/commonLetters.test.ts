import { commonLetters } from "./commonLetters"

test("commonLetters should find letter in common", () => {
  expect(commonLetters(["g", "a", "w", "j"], ["b", "q", "j"])).toBe(true)
})
