var http = require('http');
var connect = require('connect');
var apiMocker = require('connect-api-mocker');

var app = connect();
var restMock = apiMocker('/api', 'mocks/api')

app.use(restMock);
http.createServer(app).listen(8083);
console.log("Server started on port 8083");