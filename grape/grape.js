var Grape = function(dependencies) {
  this.FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
  this.dependencies = dependencies || {}
}

Grape.prototype.getDependencies = function(array, dependencies) {
  return array.map(function(dependencyName) {
    return dependencies[dependencyName]
  })
}

Grape.prototype.extractArguments = function(callback) {
  return callback.toString()
                 .match(this.FN_ARGS)[1]
                 .split(', ').join(',')
                 .split(',')
}

Grape.prototype.inject = function(callback) {
  var args = this.extractArguments(callback)

  return callback.apply(callback, this.getDependencies(args, this.dependencies))
}