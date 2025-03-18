import HashTable from "./HashTable"

describe("HashTable", () => {
  let hashTable: HashTable

  beforeEach(() => {
    hashTable = new HashTable(5)
    hashTable.set("Airsoft", "Assault")
    hashTable.set("Code", "Typescript")
    hashTable.set("Music", "Rock and Roll")
  })

  test("It should get Airsoft value", () => {
    expect(hashTable.get("Music")).toBe("Rock and Roll")
  })

  test("It should delete Airsoft from HashTable", () => {
    expect(hashTable.delete("Airsoft")).toEqual([["Airsoft", "Assault"]])
    expect(hashTable.get("Airsoft")).toBe(undefined)
  })

  test("It should return all keys inside HashTable", () => {
    expect(hashTable.keys()).toEqual(["Airsoft", "Music", "Code"])
  })

  test("It should return all values inside Hashtable", () => {
    expect(hashTable.values()).toEqual([
      "Assault",
      "Rock and Roll",
      "Typescript",
    ])
  })
})
