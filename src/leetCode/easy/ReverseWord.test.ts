import { reverseWord, reverseWord2, reverseWord3 } from "./ReverseWord"

describe("ReverseWord", () => {
  test('It should revert the word "awsome" and return', () => {
    expect(reverseWord("awsome")).toBe("emoswa")
  })

  test('It should revert the word "something" and return', () => {
    expect(reverseWord2("something")).toBe("gnihtemos")
  })

  test('It should revert the sentence "keep your hands to yourself" and return', () => {
    expect(reverseWord3("keep your hands to yourself")).toBe(
      "flesruoy ot sdnah ruoy peek"
    )
  })
})
