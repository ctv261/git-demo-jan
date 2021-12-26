import express from 'express';
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listen on: http://%s:%s', host, port);
});
