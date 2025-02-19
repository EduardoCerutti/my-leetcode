import { commonLetters } from "./commonLetters"

test("It should find letter in common and return true", () => {
  expect(commonLetters(["g", "a", "w", "j"], ["b", "q", "j"])).toBe(true)
})
