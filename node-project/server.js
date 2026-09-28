const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.method === "GET") {
        res.end("This is a GET request");
    }

    else if (req.method === "POST") {
        res.end("This is a POST request");
    }

    else if (req.method === "PUT") {
        res.end("This is a PUT request");
    }

    else if (req.method === "DELETE") {
        res.end("This is a DELETE request");
    }

    else {
        res.writeHead(405);
        res.end("Method Not Allowed");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});