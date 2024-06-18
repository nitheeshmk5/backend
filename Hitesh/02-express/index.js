import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to tea stall");
});

let teaData = [];
let nextId = 1;

app.post("/teas", (req, res) => {
  req.body
  /* const name = req.body.name;
  const price = req.body.price;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea); */
  //res.status(201).send(newTea);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
