import { hello } from "./hello"

describe("hello", () => {
  it("should return 'hello'", () => {
    expect(hello()).toBe("hello")
  })
})
