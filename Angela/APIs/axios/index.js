import express from "express";
import axios from "axios";

const app = express();

app.get("/api", async (req, res) => {
  let data = (await axios.get("https://cat-fact.herokuapp.com/facts")).data;
  console.log(data);
});

app.listen(8000, () => {
  console.log("ON");
});
