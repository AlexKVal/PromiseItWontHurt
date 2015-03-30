var http = require('q-io/http')
var _ = require('lodash')
var url1 = 'http://localhost:7000'
var url2 = 'http://localhost:7001/'

var urlWithId = _.bind(String.prototype.concat, url2)

http.read(url1)
.then(_.flowRight(http.read, urlWithId))
.then(_.flowRight(console.log, JSON.parse))
.then(null, console.error)
.done()
