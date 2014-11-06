# maximist
![](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat)
![](http://img.shields.io/npm/v/maximist.svg?style=flat)
![](http://img.shields.io/npm/dm/maximist.svg?style=flat)
![](http://img.shields.io/npm/l/maximist.svg?style=flat)

The opposite of minimist: take an object and turn it into an array of
command-line arguments.

## Usage

[![NPM](https://nodei.co/npm/maximist.png)](https://nodei.co/npm/maximist/)

### `flags = maximist(args)`

Converts the `args` object into `flags`. For example, the following:

``` javascript
require('maximist')({
    hello: 'world'
  , spin: false
})
```

Should yeild:

``` javascript
['--hello', 'world', '--no-spin']
```

## See Also

* [dargs](https://github.com/sindresorhus/dargs)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/maximist/blob/master/LICENSE.md) for details.
