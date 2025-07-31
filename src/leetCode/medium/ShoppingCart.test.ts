import { shoppingCart } from "./ShoppingCart"

test("It should put the right items at the final cart", () => {
  expect(shoppingCart([5, 2, 4, 8], [1, 6, 10])).toEqual([-1, 5, 8])
})
