import { replaceTags } from "./replaceTags"

test("replaceTags should replace chars </>", () => {
  expect(replaceTags("</div>")).toBe("div")
})
