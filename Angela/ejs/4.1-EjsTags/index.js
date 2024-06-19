import express from "express";

const app = express();

let arr = [1, 2, 3, 4];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["Nitheesh", "Bubu", "Buttu"],
    html: "<em> This is some text </em>",
  });
});

app.listen(8000, () => {
  console.log("ON");
});
