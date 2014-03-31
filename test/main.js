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

// var Grape = function(dependencies) {
//   this.FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
//   this.dependencies = dependencies || {}
// }

// Grape.prototype.getDependencies = function(array, dependencies) {
//   return array.map(function(dependencyName) {
//     return dependencies[dependencyName]
//   })
// }

// Grape.prototype.extractArguments = function(callback) {
//   return callback.toString()
//                  .match(this.FN_ARGS)[1]
//                  .split(', ').join(',')
//                  .split(',')
// }

// Grape.prototype.inject = function(callback) {
//   var args = this.extractArguments(callback)

//   return callback.apply(callback, this.getDependencies(args, this.dependencies))
// }