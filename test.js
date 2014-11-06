var test = require('tape')
var max  = require('./')

test('maximist', function(t) {
  t.deepEqual(max({
    hello: 'world'
  }), ['--hello', 'world']
    , 'handles strings')

  t.deepEqual(max({
    hello: 2
  }), ['--hello', '2']
    , 'handles numbers')

  t.deepEqual(max({
    hello: true
  }), ['--hello']
    , 'handles true')

  t.deepEqual(max({
    hello: false
  }), ['--no-hello']
    , 'handles false')

  t.deepEqual(max({
      hello: 'world'
    , falsey: false
    , truthy: true
    , numeric: 2
    , stringy: 'string'
  }), [
      '--hello', 'world'
    , '--no-falsey'
    , '--truthy'
    , '--numeric', '2'
    , '--stringy', 'string'
  ], 'all types combined')

  t.throws(function() {
    max({ hello: { world: 'lorem ipsum' }})
  }, 'throws with objects')

  t.throws(function() {
    max({ hello: function(){} })
  }, 'throws with functions')

  t.end()
})
