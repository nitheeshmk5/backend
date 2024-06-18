import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// custom middleware - logger
// const logger = (req, res, next) => {
//   console.log(`Url : ${req.url} | Method : ${req.method}`);
//   next();
// };

// app.use(morgan("combined"));
//app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));

let bName = " ";

const bandName = (req, res, next) => {
  bName = req.body["name"] + req.body["petName"];
  next();
};

app.use(bandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // console.log(req.body);
  // res.send(`<h1>${req.body.name}${req.body.petName} </h1>`);
  res.send(`${bName}`);
});

app.listen(8000, () => {
  console.log("Listing on 8000");
});
