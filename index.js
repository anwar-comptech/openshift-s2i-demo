const http = require('http');

// OpenShift usually defaults to port 8080 for non-root containers
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/api/status' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: "Online",
            platform: "OpenShift S2I",
            timestamp: new Date().toISOString()
        }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});