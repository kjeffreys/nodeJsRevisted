var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Visit localhost:8081 to see this message!\n');
}).listen(8081);

console.log("Server started...");