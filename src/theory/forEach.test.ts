import { forEach } from "./forEach"

test("for each should log the array", () => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {})

  forEach([1, 2, 3, 4])

  expect(consoleLogSpy).toHaveBeenCalledTimes(4)
  expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 1)
  expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 2)
  expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 3)
  expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 4)
})
