// Web page hosted on the BB which displays data
// Erik, 16 Nov 2013

// First create objects from which to call node.js functions
var b = require('bonescript');
var os = require('os'); 
var http = require('http');
var graph = require('/home/root/gitcode/dygraphs/dygraph-canvas.js');
var port = 1333;

// Create data to be displayed
var output = b.readTextFile('/home/root/humidityAndTemp_readings/2013_Nov_16_Sat.txt');
var body = 'Hello World!\nCurrent humidity and temp:\n' + output + 
    'More data:\n';

// Create the web server
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(body);
}).listen(port, '192.168.2.20');
console.log('Server running at http://192.168.2.20:' + port + "/");
