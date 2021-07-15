const assert = require('assert')
const operations = require('./src/operations')

it('should return true',() => {
    assert.equal(true,true)
})

it('test case for sum of 2 and 3',() => {
    assert.equal(operations.add(7,8),15)
})

it('test case for sum of -1 and -1',() => {
    assert.equal(operations.add(-1,-1),-2)
})

it('test case for string instead of number',() => {
    assert.equal(operations.validateNumbers("w","q"),false)
})

it('test case for both number',() => {
    assert.equal(operations.validateNumbers(5,5),true)
})


it('test case for sum of 20 and 3',() => {
    assert.equal(operations.subtract(20,3),17)
})

it('test case for multiplication of 2 and 3',() => {
    assert.equal(operations.multiply(2,3),6)
})

it('test case for division of 12 and 3',() => {
    assert.equal(operations.divide(12,3),4)
})