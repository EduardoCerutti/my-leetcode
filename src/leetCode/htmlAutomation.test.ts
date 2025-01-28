import { stringChallenge } from "./htmlAutomation"

test("It should mix div with igh5czfue2", () => {
  expect(stringChallenge("<div><i>hello</i>world</b>")).toBe("diigvh5czfue2")
})
