function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function namedfunction() {
    return "this does something"
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('This should be anonymous')
  }
}
