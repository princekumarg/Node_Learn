const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    } 
    else if(url==='/message'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else{
        res.write('<html>');
        res.write('<head><title>Enter Your Name</title></head>');
        res.write('<body>404 Page Not Found</body>');
    }
});

server.listen(3000);