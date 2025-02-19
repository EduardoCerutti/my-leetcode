import { replaceTags } from "./replaceTags"

test("It should replace chars </> and return tag name only", () => {
  expect(replaceTags("</div>")).toBe("div")
})
