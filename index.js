module.exports = maximist

function maximist(opts) {
  return Object.keys(opts).reduce(function(args, name) {
    var value = opts[name]
    var type = typeof value

    switch (typeof value) {
      case 'boolean':
        args.push(!value
          ? '--no-' + name
          : '--' + name
        )
      break;
      case 'number': value = String(value)
      case 'string':
        args.push('--' + name)
        args.push(value)
      break;
      default: throw new Error(
        'maximist currently only supports strings and booleans'
      )
    }

    return args
  }, [])
}
