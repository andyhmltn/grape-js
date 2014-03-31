var assert = require('assert'),
    Grape  = require('../grape/grape.js')

describe("Grape.JS", function() {
  it("Extracts the arguments correctly", function() {
    var test_function = function(hello,world) {}
    var instance = new Grape({})

    assert.equal(instance.extractArguments(test_function).length,2)
    assert.equal(instance.extractArguments(test_function)[0],'hello')
    assert.equal(instance.extractArguments(test_function)[1],'world')
  })

  it("Correctly injects the relevent arguments", function() {
    var test_function = function($first,$third, $second) {
      return [$first,$third,$second]
    }

    var instance = new Grape({'$first':'hello','$second':'world'}),
        injected = instance.inject(test_function)

    assert.equal(injected[0], 'hello')
    assert.equal(injected[1], undefined)
    assert.equal(injected[2], 'world')
  })
})