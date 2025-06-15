import { morseCode } from "./MorseCode"

test('It should return "--..", ".--.", "..--" from "...."', () => {
  expect(morseCode("....")).toEqual(["--..", ".--.", "..--"])
})
