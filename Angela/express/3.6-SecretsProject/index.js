//Make sure you have installed all the dependencies with "npm i".
//The password is nmk

import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const pass = req.body.password;

  if (pass === "nmk") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send("Wrong password");
  }
});

app.listen(8000, () => {
  console.log("running on 8000");
});
