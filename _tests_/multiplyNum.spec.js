const multiplyNum = require('../src/multiplyNum')

describe('Multiply Number', () => {
  test('can return the multiplication of 2 numbers', () => {
    const A = 52
    const B = 41
    const output = A * B
    expect(multiplyNum(A, B)).toEqual(output)
  })
})
