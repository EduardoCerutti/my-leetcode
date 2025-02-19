import { morseCode } from "./morseCode"

test('It should return "--..", ".--.", "..--" from "...."', () => {
  expect(morseCode("....")).toEqual(["--..", ".--.", "..--"])
})
