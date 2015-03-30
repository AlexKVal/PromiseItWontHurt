var q = require('q');
var defOne = q.defer();
var defTwo = q.defer();

function all(p1, p2) {
  var resP = q.defer();
  var counter = 0;
  var res1, res2;

  p1.then(function (res) {
    res1 = res
    ifBothResolve()
  }, function (err) {
    resP.reject(err)
  })

  p2.then(function (res) {
    res2 = res
    ifBothResolve()
  }, function (err) {
    resP.reject(err)
  })

  return resP.promise;

  function ifBothResolve() {
    if (++counter === 2) resP.resolve([res1, res2])
  }
}

var allP = all(defOne.promise, defTwo.promise).then(console.log)

setTimeout(function () {
  defOne.resolve('PROMISES')
  defTwo.resolve('FTW')
}, 200);
