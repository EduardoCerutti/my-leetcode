// Given two arrays, the first it'll be the product prices at the shopping, and the
// second will be the maximum budget of the customers, in this shopping there
// are no customers with the same budget, you should assign the most expensive
// product for each customer, after that this product shouldn't be in another
// custumer's list, if the budget of a customer isn't enougth to buy any product
// you should assign -1 to it
// Example: Input: [5, 2, 4, 8], [1, 6, 10]
// Output: [-1, 5, 8]

// Space complexity: O(n + m)
// Time complexity: O(n log n + m log m)
export function shoppingCart(products: number[], customers: number[]) {
  products.sort((a, b) => b - a)
  customers.sort((a, b) => b - a)

  let i = 0
  const result = {}

  for (let product of products) {
    if (result[customers[i]] === undefined) result[customers[i]] = [-1]

    if (product <= customers[i]) {
      result[customers[i]].pop()
      result[customers[i]].push(product)
      i++
    }
  }

  return Object.values(result).flat()
}
