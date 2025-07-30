import { groupAnagrams } from "./GroupAnagrams"

describe("GroupAnagrams", () => {
  test("It should return an empty array when there's no content in the input", () => {
    expect(groupAnagrams([])).toEqual([[""]])
  })

  test("It should group the words that are anagrams", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ])
  })
})
