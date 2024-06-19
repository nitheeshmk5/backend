import express from "express";

const app = express();

const date = new Date();
const day = date.getDay();

let days = "";
let advise = "";
if (day < 5) {
  days = "Weekday";
  advise = "Work hard";
} else {
  days = "Weekend";
  advise = "Lets Enjoy !";
}

app.get("/", (req, res) => {
  res.render("index.ejs", { today: days, advise: advise });
});

app.listen(8000, () => {
  console.log("ON");
});
