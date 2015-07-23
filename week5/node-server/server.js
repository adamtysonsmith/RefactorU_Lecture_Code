var http = require('http');

var server = http.createServer(function(req, res){
    // We are writing the response header
    // status 200
    // content type (if text/html it will render html, if text/plain it will be plain text)
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    
    // Here we are sending the response body
    res.end('<h1>Hello wonderful.</h1>');
});

server.listen(9001);