import express from "express";

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(8000, () => {
  console.log("8000");
});
