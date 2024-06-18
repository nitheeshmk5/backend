import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/post", (req, res) => {
  res.sendStatus(200);
});

app.delete("/remove", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});
