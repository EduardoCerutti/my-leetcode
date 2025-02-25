import { stringChallenge } from "./HtmlAutomation"

test("It should interpolate div with igh5czfue2 and return", () => {
  expect(stringChallenge("<div><i>hello</i>world</b>")).toBe("diigvh5czfue2")
})
