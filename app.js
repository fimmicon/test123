const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(process.env.PORT || 443, () => {
    console.log('App listening on port ' + (process.env.PORT || 443));
});
