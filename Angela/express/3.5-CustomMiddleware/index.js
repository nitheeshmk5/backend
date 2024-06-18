import express from "express";
import morgan from "morgan";

const app = express();

// custom middleware - logger
const logger = (req, res, next) => {
  console.log(`Url : ${req.url} | Method : ${req.method}`);
  next();
};

// app.use(morgan("combined"));
app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Hi</h1>");
});

app.listen(8000, () => {
  console.log("Listing on 8000");
});
