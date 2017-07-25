var http = require('http');
var url = require('url');
//var dt = require('./firstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("The date and time are currently: " + dt.myDateTime());

    var q = url.parse(req.url,true).query;
    // localhost:8080/?test=asd
    res.write(q.test);
    res.end();
}).listen(8080);


