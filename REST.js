var express = require('express')
    , app = express()
    , fs = require("fs")    
    , path = require('path')
    , request = require('request')
    , certFile = path.resolve(__dirname, 'ssl/proxy')
    , keyFile = path.resolve(__dirname, 'ssl/proxy')
    , caFile = path.resolve(__dirname, 'ssl/proxy');


var options = {
    url: 'https://api.some-server.com/',
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile),
    passphrase: 'password',
    ca: fs.readFileSync(caFile)
};

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });

    //request.get(options)
    request.get('http://www.google.com', function (e, response, body) {
    console.log(body)
    });

})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})