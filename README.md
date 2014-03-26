Grape.JS
============

Dead simple dependency injection!

Getting started
-------------

First declare your modules / dependencies

    // Example

    var hello = function() { alert('hello') }
    var world = function() { alert('world') }

    // This won't be used
    var unused = function() { return ':(' }

Then you can declare a new `Grape` instance. It takes an object as the only argument. The keys relate to the names of the parameters you want to use and the values are the dependency those parameters relate to:

    dependency = new Grape({
      '$main':hello,
      '$secondary':world,
      '$unused':unused
    })

Now you can declare the function you want to be injected:

    var my_callback = function($secondary, $main) {
      $secondary() #=> alert: world
      $main() #=> alert: hello
    }

Then, when you want to run that function you call `Grape.inject` on the dependency instance you created above:

    dependency.inject(my_callback)