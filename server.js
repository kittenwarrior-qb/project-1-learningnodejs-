const http = require('http');
const { parse } = require('url');
const PORT = 8000;

const server = http.createServer((req, res) => {
    const { pathname } = parse(req.url);
    console.log(pathname);
    
    const method = req.method.toUpperCase();
    console.log(method);

    switch (method) {
        case 'GET':
            if (pathname === "/getall") {
                const products = ["Apple", "Banana", "Orange"];
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(products));
            } else {
                res.statusCode = 404;
                res.end("Not found");
            }
            break;
        case 'POST':
            // Handle POST requests here
            break;
        default:
            res.statusCode = 405; // Method Not Allowed
            res.end("Method Not Allowed");
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
