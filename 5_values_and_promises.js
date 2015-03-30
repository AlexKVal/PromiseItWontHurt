var q = require('q');
var def = q.defer();

function attachTitle(arg) {
  return 'DR. ' + arg
}
def.promise
  .then(attachTitle)
  .then(console.log)

def.resolve('MANHATTAN')
