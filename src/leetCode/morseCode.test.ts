import { morseCode } from "./morseCode"

test('morseCode should return ["--..", ".--.", "..--"]', () => {
  expect(morseCode("....")).toEqual(["--..", ".--.", "..--"])
})
