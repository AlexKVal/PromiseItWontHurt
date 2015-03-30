var q = require('q');

q.fcall(function () {
  return JSON.parse(process.argv[2])
}).then(null, function (err) {
  console.log(err);
})
