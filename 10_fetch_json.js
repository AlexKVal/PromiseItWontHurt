var http = require('q-io/http');

http.read('http://localhost:1337')
.then(function (res) {
  console.log(JSON.parse(res));
})
.then(null, console.error)
.done()
