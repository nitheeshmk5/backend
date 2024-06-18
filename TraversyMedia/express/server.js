import express from "express";
import path from "path";
import posts from "./routes/posts.js";

const app = express();
const PORT = 8000;

app.use("/api/posts", posts);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
