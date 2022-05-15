const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to our home page');
    }

    if (req.url == '/about') {
        res.end('Here is our short history');
    }

    if (req.url == '/contacts') {
        res.end('Feel free to contact us');
    }

    res.end(`<h1>Oops!</h1>
    <p>We can't find the page you're looking for</p>
    <a href="/">Back home</a>
    `);
})

server.listen(5000);