import http from "http";
import url from "url";
import path from "path";
import fs from "fs/promises";
// GET current paths
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT;
const server = http.createServer(async (req, res) => {
  let filePath;
  if (req.method === "GET") {
    if (req.url === "/") {
      filePath = path.join(__dirname, "public", "index.html");
    } else if (req.url === "/about") {
      filePath = path.join(__dirname, "public", "about.html");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Error");
    }
    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is listing on ${port}`);
});
