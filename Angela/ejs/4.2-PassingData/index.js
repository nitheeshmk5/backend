import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  res.render("result.ejs", {
    name: req.body.fName + req.body.lName,
  });
});

app.listen(8000, () => {
  console.log("On");
});
