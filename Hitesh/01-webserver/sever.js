const { log } = require("console");
const http = require("http");

const hostname = "127.0.0.1";
const port = "8000";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Hi");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running on ${hostname}:${port}`);
});
