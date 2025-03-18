class HashTable {
  private data: any[]

  constructor(size: number) {
    this.data = new Array(size)
  }

  // Time complexity: O(n)
  private hash(key: string) {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  // Time complexity: O(1)
  public set(key: string, value: any) {
    let address = this.hash(key)

    if (!this.data[address]) this.data[address] = []

    return this.data[address].push([key, value])
  }

  // Time complexity: O(n)
  public get(key: string) {
    let address = this.hash(key)
    const currentBucket = this.data[address]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1]
      }
    }

    return undefined
  }

  // Time complexity: O(n)
  public delete(key: string) {
    let address = this.hash(key)
    let currentBucket = this.data[address]

    if (!currentBucket) return undefined

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) return currentBucket.splice(i, 1)
    }

    return undefined
  }

  // Time complexity: O(n)
  public keys() {
    const keysArray = []

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0])
          }
        } else {
          keysArray.push(this.data[i][0][0])
        }
      }
    }

    return keysArray
  }

  // Time complexity: O(n)
  public values() {
    const valuesArray = []

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            valuesArray.push(this.data[i][j][1])
          }
        } else {
          valuesArray.push(this.data[i][0][1])
        }
      }
    }

    return valuesArray
  }
}

export default HashTable
