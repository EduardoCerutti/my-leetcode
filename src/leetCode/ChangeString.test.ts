import { changeString } from "./ChangeString"

describe("ChangeString", () => {
  test("It should insert the letter J in the position 2 of the string", () => {
    expect(changeString("something", ["I 2 J"])).toBe("soJmething")
  })

  test("It should replace the letter in the position 4 of the string to J", () => {
    expect(changeString("something", ["R 4 J"])).toBe("someJhing")
  })

  test("It should delete the letter in the position 6 of the string", () => {
    expect(changeString("something", ["D 0"])).toBe("omething")
  })
})
