var http = require('http');
var fs = require('fs');
var local = require('./read_template_server')

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    res.end();
  });
  
  local.open_file('mynewfile1.txt');
  local.remove_file('mynewfile1.txt');
}).listen(8080);

exports.append_to_file = function (text) {
  fs.appendFile('mynewfile1.txt', text, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

exports.open_file = function (filename) {
  fs.open(filename, 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  })
}

exports.remove_file = function (filename){
  fs.unlink(filename, function (err) {
    if (err) throw err;
    console.log('File deletes! %s' % filename);
  })
}