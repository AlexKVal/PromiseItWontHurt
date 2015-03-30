var q = require('q');

function parsePromised(json) {
  var def = q.defer();

  try {
    def.resolve(JSON.parse(json))
  } catch (e) {
    def.reject(e)
  }

  return def.promise
}

parsePromised(process.argv[2])
  .then(null, function (err) {
    console.log(err);
  })
