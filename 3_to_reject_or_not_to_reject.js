var q = require('q');
var def = q.defer();

def.promise.then(console.log, function (err) {
  console.log(err.message);
})

def.resolve('I FIRED')
def.reject(new Error('I DID NOT FIRE'))
