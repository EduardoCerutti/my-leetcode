import { reverseWord, reverseWord2, reverseWord3 } from "./reverseWord"

test("reverseWord should revert the word", () => {
  expect(reverseWord("awsome")).toBe("emoswa")
})

test("reverseWord2 should revert the word", () => {
  expect(reverseWord2("something")).toBe("gnihtemos")
})

test("reverseWord3 should revert the word", () => {
  expect(reverseWord3("keep your hands to yourself")).toBe(
    "flesruoy ot sdnah ruoy peek"
  )
})
